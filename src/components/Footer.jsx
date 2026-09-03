import React from 'react';

export default function Footer({ onOpenWaitlist }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <img 
                src="/uny_logo_assets/unylogo.jpg" 
                alt="Uny Logo" 
                className="footer-logo-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              <span className="footer-logo-text" style={{ display: 'none' }}>uny</span>
            </a>
            <p className="footer-tagline">Life on Campus.</p>
          </div>

          {/* Product Links */}
          <div className="footer-col">
            <h5 className="footer-heading">Product</h5>
            <ul className="footer-links">
              <li><a href="#explore">Explore</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#around">Food</a></li>
              <li><a href="#around">Market</a></li>
              <li><a href="#around">Stay</a></li>
            </ul>
          </div>

          {/* Business Links */}
          <div className="footer-col">
            <h5 className="footer-heading">For Business</h5>
            <ul className="footer-links">
              <li><a href="#businesses">For Organizers</a></li>
              <li><a href="#businesses">For Vendors</a></li>
              <li><button onClick={onOpenWaitlist} className="footer-btn-link">Bring Uny to your Campus</button></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-col">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-links">
              <li><button onClick={onOpenWaitlist} className="footer-btn-link">About</button></li>
              <li><button onClick={onOpenWaitlist} className="footer-btn-link">Contact</button></li>
              <li><button onClick={onOpenWaitlist} className="footer-btn-link">Privacy</button></li>
              <li><button onClick={onOpenWaitlist} className="footer-btn-link">Terms</button></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-col">
            <h5 className="footer-heading">Social</h5>
            <ul className="footer-links">
              <li><a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Uny. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0B0B14;
          color: #94A3B8;
          padding: 80px 0 40px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-logo {
          display: inline-block;
          margin-bottom: 8px;
        }

        .footer-logo-img {
          height: 38px;
          width: auto;
          border-radius: 8px;
          object-fit: contain;
        }

        .footer-logo-text {
          font-size: 1.8rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .footer-tagline {
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
        }

        .footer-heading {
          font-size: 0.85rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 18px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a, .footer-btn-link {
          font-size: 0.88rem;
          color: #94A3B8;
          transition: color 0.2s ease;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          cursor: pointer;
        }

        .footer-links a:hover, .footer-btn-link:hover {
          color: #FFFFFF;
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
          font-size: 0.82rem;
          color: #64748B;
        }

        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
