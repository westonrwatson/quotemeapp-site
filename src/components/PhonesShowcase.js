import React from 'react';
import { Link } from 'react-router-dom';


export default function PhonesShowcase() {
  return (
    <section className="phones-showcase">
      <div className="phones-layout">
        <div className="privacy-block">
          <h3>Privacy</h3>
          <p>We don’t collect personal data. No ads, no tracking, no sneaky stuff. Your quotes stay on your device, always.</p>
          <Link to="/privacy" className="outline-btn yellow">Read Privacy Policy</Link>
        </div>

        <div className="phones-stack">
          <img src="/right-phone.png"  alt="Quotes screen" className="phone right" draggable="false"/>
          <img src="/left-phone.png" alt="Add Quote screen" className="phone left" draggable="false"/>
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
