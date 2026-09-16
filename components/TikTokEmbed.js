"use client";

import { useEffect } from "react";

export default function TikTokEmbed({ videoId }) {
  useEffect(() => {
    // Load TikTok embed script after component mounts (client only)
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already loaded, re-trigger embed rendering
      if (window.tiktokEmbed) window.tiktokEmbed.init();
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@events_by_momin_official/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: "605px", minWidth: "325px", width: "100%" }}
        suppressHydrationWarning
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="@events_by_momin_official"
            href="https://www.tiktok.com/@events_by_momin_official?refer=embed"
          >
            @events_by_momin_official
          </a>
        </section>
      </blockquote>
    </div>
  );
}
