import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-hero">
          <h2>
            Join the <span className="accent">Premium</span> Movement.
          </h2>
        </div>
        <div className="footer-meta">
          <Link href="/" className="brand" style={{ gap: 12 }}>
            <span className="brand-mark"><span>L</span></span>
            <span className="brand-name">
              <strong>La Motivación</strong>
              <em>Dhuri · Punjab · IND</em>
            </span>
          </Link>

          <ul className="footer-socials">
            <li>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8h-3a1 1 0 0 0-1 1v3h4l-1 4h-3v8h-4v-8H5v-4h3V8.5A4.5 4.5 0 0 1 12.5 4H16v4Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="6" width="20" height="12" rx="3"/>
                  <path d="m10 9 5 3-5 3V9Z" fill="currentColor"/>
                </svg>
              </a>
            </li>
          </ul>

          <p className="legal">© 2025 La Motivación · Dhuri, Punjab · All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
