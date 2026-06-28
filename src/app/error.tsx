"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for monitoring (replace with your error tracker).
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111111] px-4 py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] via-[#111111] to-[#1a1a2e]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="relative text-center max-w-lg">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
          Something went wrong
        </h1>
        <p className="mt-3 text-white/60 leading-relaxed">
          An unexpected error occurred. You can try again, or head back home — we&apos;re on it.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Try Again
          </button>
          <Link
            href="/"
            className="border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
