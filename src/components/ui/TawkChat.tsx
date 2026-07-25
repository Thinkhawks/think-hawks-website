"use client";

import Script from "next/script";

const PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
const WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || "default";

/**
 * Embeds the Tawk.to live-chat / AI assistant widget site-wide.
 * Renders nothing until NEXT_PUBLIC_TAWK_PROPERTY_ID is configured,
 * so local/dev builds without the key stay clean.
 */
export function TawkChat() {
  if (!PROPERTY_ID) return null;

  return (
    <Script id="tawk-to" strategy="afterInteractive">
      {`
        var Tawk_API = Tawk_API || {};
        Tawk_API.onLoad = function() {
          Tawk_API.showWidget();
        };

        // Tawk flips document.title to "1 new message" once a second, forever —
        // even for visitors who never opened the chat, because the automated
        // greeting counts as unread. That leaves every tab flashing. Hold our own
        // title until the visitor actually engages, then stop interfering so a
        // real conversation still gets its notification.
        (function () {
          var titleEl = document.getElementsByTagName("title")[0];
          if (!titleEl || typeof MutationObserver === "undefined") return;

          var canonical = document.title;
          var observer = new MutationObserver(function () {
            if (document.title.indexOf("new message") !== -1) {
              if (document.title !== canonical) document.title = canonical;
            } else {
              // A real navigation changed the title — adopt it as the new baseline.
              canonical = document.title;
            }
          });
          observer.observe(titleEl, { childList: true, characterData: true, subtree: true });

          Tawk_API.onChatMaximized = function () {
            observer.disconnect();
          };
        })();

        var Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}
