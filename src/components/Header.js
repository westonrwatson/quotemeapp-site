import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">QuoteMe</Link>
      <nav className="nav">
        <a href="https://apps.apple.com/us/app/quoteme-pro/id6744032855" target="_blank" rel="noopener noreferrer">Download</a>
        <a href="mailto:team.quoteme@gmail.com">Feedback</a>
        <Link to="/privacy">Privacy</Link>
      </nav>
    </header>
  );
}