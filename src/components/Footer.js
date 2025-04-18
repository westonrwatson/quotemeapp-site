import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-inner">
        
        {/* === Mobile-only logo and socials === */}
        <div className="footer-mobile-header mobile-only">
          <Link to="/" className="footer-logo">QuoteMe</Link>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/quoteme.app/" target="_blank" rel="noopener noreferrer">
              <img src="/icon-instagram.svg" alt="Instagram" className="social-icon" draggable="false" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574947895650" target="_blank" rel="noopener noreferrer">
              <img src="/icon-facebook.svg" alt="Facebook" className="social-icon" draggable="false" />
            </a>
          </div>
        </div>

        {/* === Desktop-only logo and tagline === */}
        <div className="footer-column desktop-only">
          <Link to="/" className="footer-logo">QuoteMe</Link>
          <p className="footer-tagline">
            Let’s make a mark together! <br />
            Your words deserve to be seen, not forgotten. <br />
            QuoteMe keeps them front and center.
          </p>
        </div>

        {/* === Download + Support columns === */}
        <div className="footer-columns-pair">
          <div className="footer-column">
            <h5>Download</h5>
            <a
              href="https://apps.apple.com/us/app/quoteme-pro/id6744032855"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/app-store-download.png"
                alt="Download on the App Store"
                className="store-badge"
                draggable="false"
              />
            </a>
          </div>

          <div className="footer-column">
            <h5>Support</h5>
            <Link to="/privacy">Privacy Policy</Link>
            <a href="mailto:team.quoteme@gmail.com">Feedback</a>
          </div>
        </div>

        {/* === Desktop-only social links === */}
        <div className="footer-column desktop-only">
          <h5>Socials</h5>
          <a href="https://www.instagram.com/quoteme.app/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61574947895650" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </div>
  );
}
