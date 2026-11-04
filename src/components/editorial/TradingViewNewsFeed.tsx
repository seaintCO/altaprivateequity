"use client";

import { useEffect, useRef } from "react";

/** Official TradingView News Feed widget: https://www.tradingview.com/widget-docs/widgets/news/news-feed/ */
export default function TradingViewNewsFeed() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    const widget = document.createElement("tv-news-feed");
    widget.setAttribute("style", "display:block;width:100%;min-height:480px;");
    container.appendChild(widget);
    const id = "seaint-tradingview-news-feed-module";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.type = "module";
      script.src = "https://widgets.tradingview-widget.com/w/en/tv-news-feed.js";
      script.async = true;
      document.head.appendChild(script);
    }
    return () => { widget.remove(); };
  }, []);

  return (
    <div className="relative min-h-[500px] rounded-[24px] border border-black/[0.07] bg-white p-3 shadow-[0_18px_60px_-42px_rgba(0,0,0,0.28)] sm:p-5">
      <div ref={host} className="min-h-[460px]" />
      <p className="mt-3 border-t border-black/[0.06] pt-3 text-[10px] text-zinc-400">
        Market stories provided by TradingView. Availability depends on the third-party widget.
        <a href="https://www.tradingview.com/news/" target="_blank" rel="noopener noreferrer" className="ml-1 text-cyan-700 hover:underline">View on TradingView ↗</a>
      </p>
    </div>
  );
}
