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
