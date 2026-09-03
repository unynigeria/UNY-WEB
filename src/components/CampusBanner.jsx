import React from 'react';
import { CheckCircle2, Clock, Building2 } from 'lucide-react';

export default function CampusBanner() {
  const campuses = [
    {
      name: 'FUNAAB',
      fullName: 'Federal Univ. of Agriculture, Abeokuta',
      status: 'Live',
      isLive: true,
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'University of Lagos',
      status: 'Coming soon',
      isLive: false,
      logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'University of Ibadan',
      status: 'Coming soon',
      isLive: false,
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Olabisi Onabanjo University',
      status: 'Coming soon',
      isLive: false,
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'University of Nigeria, Nsukka',
      status: 'Coming soon',
      isLive: false,
      logo: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <section className="campus-banner-section section-padding-sm">
      <div className="container">
        <div className="campus-banner-card">
          <div className="banner-info">
            <h3 className="banner-title">
              Built for <span className="text-highlight">your campus.</span>
            </h3>
            <p className="banner-desc">
              Uny is live on <strong>FUNAAB</strong>. More campuses coming soon.
            </p>
          </div>

          <div className="campus-scroll-wrapper">
            <div className="campus-grid">
              {campuses.map((campus, idx) => (
                <div 
                  key={idx} 
                  className={`campus-badge-card ${campus.isLive ? 'live-card' : ''}`}
                >
                  <div className="campus-logo-wrap">
                    <Building2 size={20} color={campus.isLive ? '#6C2BD9' : '#64748B'} />
                  </div>
                  <div className="campus-text-meta">
                    <span className="campus-name">{campus.name}</span>
                    <span className={`status-pill ${campus.isLive ? 'pill-live' : 'pill-soon'}`}>
                      {campus.isLive ? (
                        <>
                          <span className="dot-live"></span> Live
                        </>
                      ) : (
                        'Coming soon'
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .campus-banner-section {
          background: #FAFAFC;
        }

        .campus-banner-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 28px 36px;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 32px;
          align-items: center;
          box-shadow: var(--shadow-sm);
        }

        .banner-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .text-highlight {
          color: var(--primary);
        }

        .banner-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .campus-scroll-wrapper {
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE */
          padding: 4px 0;
        }

        .campus-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .campus-grid {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .campus-badge-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 10px 18px;
          border-radius: var(--radius-lg);
          min-width: 190px;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .campus-badge-card.live-card {
          background: #F3E8FF;
          border-color: #D8B4FE;
          box-shadow: 0 4px 12px rgba(108, 43, 217, 0.08);
        }

        .campus-badge-card:hover {
          transform: translateY(-2px);
        }

        .campus-logo-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.06);
        }

        .campus-text-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .campus-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .status-pill {
          font-size: 0.72rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .pill-live {
          color: #059669;
        }

        .pill-soon {
          color: var(--text-muted);
        }

        .dot-live {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10B981;
          display: inline-block;
          box-shadow: 0 0 6px #10B981;
        }

        @media (max-width: 960px) {
          .campus-banner-card {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
