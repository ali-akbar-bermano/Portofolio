import { useState, useEffect } from "react";
import "./DownloadFab.css";

export default function DownloadFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/assets/CV-Ali-Akbar-Bermano.pdf"
      download="CV Ali Akbar Bermano.pdf"
      className={`download-fab${visible ? " visible" : ""}`}
      aria-label="Download CV"
      id="download-fab-btn"
      title="Download CV"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span>CV</span>
    </a>
  );
}
