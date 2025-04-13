import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideArrow(window.scrollY > 10); // hides when user scrolls even a little
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <img src="/hero-image.png" alt="QuoteMe on phone" className="hero-image" draggable="false" />
      
      <div className="hero-text">
        <h2>QuoteMe</h2>
        <p>Quotes shouldn’t live in forgotten notes. Bring them where you’ll see them — your home screen.</p>
        <a
          href="https://apps.apple.com/us/app/quoteme-pro/id6744032855"
          target="_blank"
          rel="noopener noreferrer"
          draggable="false"
        >
          <img
            src="/app-store-download.png"
            alt="Download on the App Store"
            className="store-badge"
            draggable="false"
          />
        </a>
      </div>

      <div className={`down-arrow ${hideArrow ? 'hidden' : ''}`} draggable="false">
         ↓
      </div>
    </section>
  );
}
