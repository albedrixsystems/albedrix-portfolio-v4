import React, { useEffect } from 'react';

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Display loader for 2 seconds to showcase the intro/branding

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loader-wrapper">
      <video
        className="loader-video"
        src="/Background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="loader-video-overlay" />
      <div className="loader-content">
        <div className="loader-logo">
          <img src="/favicon.png" alt="Albedrix Logo" />
        </div>
        <div className="loader-brand-name">
          <h1 className="brand-main">ALBEDRIX</h1>
          <p className="brand-sub">SYSTEMS</p>
        </div>
      </div>
    </div>
  );
}
