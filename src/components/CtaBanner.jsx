import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenWaitlist }) {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          
          {/* Left Text */}
          <div className="cta-text-wrap">
            <h2 className="cta-title">Life on Campus.</h2>
            <p className="cta-subtitle">
              Events. Food. Places. Shopping. And everything in between.
            </p>
          </div>

          {/* Center Brand Badge */}
          <div className="cta-badge-center">
            <div className="white-logo-badge">
              <img 
                src="/uny_logo_assets/unylogo.jpg" 
                alt="Uny" 
                className="badge-logo-img" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              <span className="badge-logo-text" style={{ display: 'none' }}>uny</span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="cta-actions-wrap">
            <button onClick={onOpenWaitlist} className="btn btn-white btn-cta">
              Get Uny
            </button>
            <button onClick={onOpenWaitlist} className="btn btn-outline-dark btn-cta">
              Bring Uny to my campus
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .cta-banner-section {
          padding: 60px 0;
          background: #FAFAFC;
        }

        .cta-banner-card {
          background: var(--banner-gradient);
          border-radius: var(--radius-xl);
          padding: 48px 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          color: #FFFFFF;
          box-shadow: 0 20px 40px rgba(76, 29, 149, 0.35);
          position: relative;
          overflow: hidden;
        }

        .cta-text-wrap {
          max-width: 420px;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .cta-subtitle {
          font-size: 1.05rem;
          opacity: 0.9;
          line-height: 1.5;
        }

        .cta-badge-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .white-logo-badge {
          background: #FFFFFF;
          width: 100px;
          height: 100px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          padding: 16px;
        }

        .badge-logo-img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          object-fit: cover;
        }

        .badge-logo-text {
          font-size: 2rem;
          font-weight: 900;
          color: var(--primary);
        }

        .cta-actions-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 220px;
        }

        .btn-cta {
          padding: 14px 24px;
          width: 100%;
        }

        @media (max-width: 960px) {
          .cta-banner-card {
            flex-direction: column;
            text-align: center;
            padding: 36px 24px;
          }

          .cta-actions-wrap {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
