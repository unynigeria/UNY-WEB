import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ onOpenWaitlist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Explore', href: '#explore' },
    { label: 'Events', href: '#events' },
    { label: 'Food', href: '#around' },
    { label: 'Market', href: '#around' },
    { label: 'Stay', href: '#around' },
    { label: 'For Businesses', href: '#businesses' },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          <img 
            src="/uny_logo_assets/unylogo.jpg" 
            alt="Uny Logo" 
            className="logo-img"
            onError={(e) => {
              // Fallback text logo if svg fails
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <span className="logo-text-fallback" style={{ display: 'none' }}>
            uny<span className="dot">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="header-actions">
          <button onClick={onOpenWaitlist} className="btn btn-primary get-uny-btn">
            Get Uny
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }} 
              className="btn btn-primary mobile-cta-btn"
            >
              Get Uny Pass
            </button>
          </nav>
        </div>
      )}

      <style>{`
        .header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          height: 76px;
          display: flex;
          align-items: center;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-img {
          height: 38px;
          width: auto;
          border-radius: 8px;
          object-fit: contain;
        }

        .logo-text-fallback {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: -0.04em;
        }

        .logo-text-fallback .dot {
          color: var(--warning);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .get-uny-btn {
          font-size: 0.88rem;
          padding: 9px 20px;
          border-radius: var(--radius-full);
        }

        .mobile-toggle {
          display: none;
          color: var(--text-primary);
          padding: 6px;
        }

        .mobile-drawer {
          position: absolute;
          top: 76px;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-light);
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          animation: slideDown 0.25s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 8px 0;
          border-bottom: 1px solid #F1F5F9;
        }

        .mobile-cta-btn {
          margin-top: 12px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
