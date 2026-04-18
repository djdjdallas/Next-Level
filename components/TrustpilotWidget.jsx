"use client";

import { useEffect, useRef } from "react";

export default function TrustpilotWidget({
  templateId = "56278e9abfbbba0bdcd568bc",
  businessUnitId = "69e2c157e53f0d98b81dae84",
  token = "2609d1f0-d6a0-4984-9600-50790393eed4",
  height = "52px",
  width = "100%",
  locale = "en-US",
  reviewUrl = "https://www.trustpilot.com/review/ceonelectric.com",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const tryLoad = () => {
      if (window.Trustpilot && ref.current) {
        window.Trustpilot.loadFromElement(ref.current, true);
        return true;
      }
      return false;
    };

    if (tryLoad()) return;

    const interval = setInterval(() => {
      if (tryLoad()) clearInterval(interval);
    }, 250);

    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`trustpilot-widget ${className}`.trim()}
      data-locale={locale}
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-style-height={height}
      data-style-width={width}
      data-token={token}
    >
      <a href={reviewUrl} target="_blank" rel="noopener">
        Trustpilot
      </a>
    </div>
  );
}
