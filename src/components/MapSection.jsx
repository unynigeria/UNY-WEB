import React from 'react';
import { MapPin, Navigation, Star, Search, Compass, ChevronRight } from 'lucide-react';

export default function MapSection({ onOpenWaitlist }) {
  return (
    <section className="map-section section-padding">
      <div className="container map-container">
        
        {/* Left Info Column */}
        <div className="map-content">
          <div className="badge-tag badge-tag-pill">
            <Compass size={14} /> KNOW YOUR CAMPUS
          </div>

          <h2 className="map-title">
            Find places.<br />
            <span className="text-highlight">Do more.</span>
          </h2>

          <p className="map-desc">
            Explore food spots, event locations, businesses and everything you need around campus.
          </p>

          <button onClick={onOpenWaitlist} className="btn btn-primary btn-map">
            Explore the map <ChevronRight size={18} />
          </button>
        </div>

        {/* Right Map Visualizer */}
        <div className="map-visual-wrap">
          <div className="map-card-container">
            {/* Map Top Bar */}
            <div className="map-search-bar">
              <Search size={16} color="#64748B" />
              <input type="text" placeholder="Search places on campus (e.g. Cravings, Library...)" readOnly />
            </div>

            {/* Map Canvas Visual Mockup */}
            <div className="map-canvas">
              {/* Map grid lines background */}
              <div className="map-grid-bg"></div>

              {/* Pin 1 - Cravings Kitchen */}
              <div className="map-pin-tooltip pin-1 float-anim">
                <div className="pin-card">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=100&q=80" alt="Cravings Kitchen" />
                  <div>
                    <h6>Cravings Kitchen</h6>
                    <div className="pin-meta">
                      <Star size={11} fill="#FBBF24" color="#FBBF24" />
                      <span>4.8 • 15-20 min • 300m</span>
                    </div>
                  </div>
                </div>
                <div className="pin-pointer">
                  <MapPin size={24} color="#6C2BD9" fill="#6C2BD9" />
                </div>
              </div>

              {/* Pin 2 - FUNAAB Main Auditorium */}
              <div className="map-pin-tooltip pin-2">
                <div className="pin-card">
                  <div>
                    <h6>FUNAAB Main Auditorium</h6>
                    <span className="pin-sub">Event Venue</span>
                  </div>
                </div>
                <div className="pin-pointer">
                  <MapPin size={24} color="#EF4444" fill="#EF4444" />
                </div>
              </div>

              {/* Pin 3 - Campus Sports Complex */}
              <div className="map-pin-tooltip pin-3">
                <div className="pin-card">
                  <div>
                    <h6>Sports Complex</h6>
                    <span className="pin-sub">Football Match @ 4PM</span>
                  </div>
                </div>
                <div className="pin-pointer">
                  <MapPin size={24} color="#10B981" fill="#10B981" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <style>{`
        .map-section {
          background: #FFFFFF;
        }

        .map-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 56px;
          align-items: center;
        }

        .map-title {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .map-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 460px;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .btn-map {
          padding: 14px 28px;
        }

        /* Map Visualizer */
        .map-visual-wrap {
          width: 100%;
        }

        .map-card-container {
          background: #F8FAFC;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 16px;
          box-shadow: var(--shadow-lg);
        }

        .map-search-bar {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          padding: 10px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          box-shadow: var(--shadow-sm);
        }

        .map-search-bar input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .map-canvas {
          height: 380px;
          background: #E2E8F0;
          border-radius: var(--radius-lg);
          position: relative;
          overflow: hidden;
          background-image: 
            radial-gradient(#CBD5E1 1px, transparent 1px),
            radial-gradient(#CBD5E1 1px, #F1F5F9 1px);
          background-size: 20px 20px;
          background-position: 0 0, 10px 10px;
        }

        .map-pin-tooltip {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pin-1 {
          top: 80px;
          left: 40px;
        }

        .pin-2 {
          top: 180px;
          right: 50px;
        }

        .pin-3 {
          bottom: 40px;
          left: 180px;
        }

        .pin-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
          border: 1px solid #E2E8F0;
          margin-bottom: 4px;
        }

        .pin-card img {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          object-fit: cover;
        }

        .pin-card h6 {
          font-size: 0.8rem;
          font-weight: 700;
        }

        .pin-meta {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .pin-sub {
          font-size: 0.68rem;
          color: var(--primary);
          font-weight: 600;
        }

        .pin-pointer {
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));
        }

        @media (max-width: 960px) {
          .map-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
