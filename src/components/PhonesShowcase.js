import React from 'react';

export default function PhonesShowcase() {
  return (
    <section className="phones-showcase">
      <div className="phones-layout">
        <div className="privacy-block">
          <h3>Privacy</h3>
          <p>We don’t collect personal data. No ads, no tracking, no sneaky stuff. Your quotes stay on your device, always.</p>
          <a href="https://gist.github.com/westonrwatson/db8257adb0ae351057fa9626c5be1400" target="_blank" rel="noopener noreferrer" className="outline-btn yellow">Read Privacy Policy</a>
        </div>

        <div className="phones-stack">
          <img src="/right-phone.png" alt="Quotes screen" className="phone right" />
          <img src="/left-phone.png" alt="Add Quote screen" className="phone left" />
        </div>

        <div className="feedback-block">
          <h3>Feedback</h3>
          <p>
            Have ideas for new features? Found a bug or just want to say hi? We’d love to hear from you —
            your input helps shape QuoteMe.
          </p>
          <a href="mailto:team.quoteme@gmail.com" className="outline-btn orange">Give Feedback</a>
        </div>
      </div>
    </section>
  );
}
