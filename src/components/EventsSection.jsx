import React from 'react';
import { Compass, Ticket, Sparkles, Calendar, MapPin, QrCode, ArrowRight, Wallet } from 'lucide-react';

export default function EventsSection({ onOpenWaitlist }) {
  const steps = [
    {
      icon: <Compass size={22} className="step-icon" />,
      title: 'Discover',
      desc: 'Browse upcoming parties, workshops, and sports matches.'
    },
    {
      icon: <Ticket size={22} className="step-icon" />,
      title: 'Get your ticket',
      desc: 'Instant digital passes saved directly to your phone wallet.'
    },
    {
      icon: <Sparkles size={22} className="step-icon" />,
      title: 'Show up',
      desc: 'Scan your QR code at the gate and enjoy the experience.'
    }
  ];

  return (
    <section id="events" className="events-section section-padding">
      <div className="container events-container">
        
        {/* Left Text & Pillar List */}
        <div className="events-content">
          <div className="badge-tag badge-tag-dark">
            <Calendar size={14} /> THERE'S ALWAYS
          </div>
          
          <h2 className="events-title">
            Something's <br />
            <span className="text-purple-glow">always happening.</span>
          </h2>

          <p className="events-desc">
            From campus parties to student events, discover what's happening and get your ticket in a few taps.
          </p>

          <div className="steps-list">
            {steps.map((step, idx) => (
              <div key={idx} className="step-item">
                <div className="step-ic-box">
                  {step.icon}
                </div>
                <div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Event Showcase Cards */}
        <div className="events-visual">
          <div className="event-mock-wrapper">
            
            {/* Main Event Showcase Banner */}
            <div className="event-showcase-card">
              <div className="event-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80" 
                  alt="Afro Night Concert" 
                  className="event-card-img"
                />
                <span className="event-live-badge">FEW TICKETS LEFT</span>
              </div>
              
              <div className="event-card-body">
                <div className="event-meta-top">
                  <h3 className="event-name">Afro Night</h3>
                  <span className="event-price-tag">₦2,000</span>
                </div>
                
                <p className="event-date">
                  <Calendar size={14} /> Sat, 24 May 2025 • 7:00 PM
                </p>
                <p className="event-location">
                  <MapPin size={14} /> FUNAAB Main Auditorium
                </p>

                <div className="event-organizer-row">
                  <div className="organizer-avatar-stack">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Org" />
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80" alt="Org" />
                  </div>
                  <span className="organizer-name">Organized by <strong>Afro Wave</strong></span>
                </div>

                <button onClick={onOpenWaitlist} className="btn btn-primary btn-full-event">
                  Get Ticket <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Mobile Wallet Ticket Showcase Card */}
            <div className="ticket-mobile-card">
              <div className="ticket-card-header">
                <div className="ticket-header-title">
                  <Ticket size={16} />
                  <span>Your Ticket</span>
                </div>
              </div>

              <div className="ticket-card-main">
                <h4>Afro Night</h4>
                <p className="ticket-venue">FUNAAB Main Auditorium</p>
                
                <div className="qr-container">
                  <QrCode size={110} color="#0F172A" />
                </div>

                <div className="ticket-details-grid">
                  <div>
                    <span className="label">Ticket ID</span>
                    <strong className="val">UNY-AN-240525</strong>
                  </div>
                  <div>
                    <span className="label">Name</span>
                    <strong className="val">Tenitope Ojo</strong>
                  </div>
                </div>

                <button onClick={onOpenWaitlist} className="btn-add-wallet">
                  <Wallet size={14} /> Add to wallet
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .events-section {
          background: var(--bg-dark);
          color: var(--text-dark-primary);
          position: relative;
          overflow: hidden;
        }

        .events-container {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: center;
        }

        .events-title {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .text-purple-glow {
          color: #A78BFA;
          text-shadow: 0 0 20px rgba(167, 139, 250, 0.4);
        }

        .events-desc {
          font-size: 1.1rem;
          color: var(--text-dark-secondary);
          max-width: 480px;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .step-ic-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(167, 139, 250, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A78BFA;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 4px;
        }

        .step-desc {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
        }

        /* Right Visual Mockup */
        .events-visual {
          position: relative;
        }

        .event-mock-wrapper {
          display: grid;
          grid-template-columns: 1fr 240px;
          gap: 20px;
          align-items: center;
        }

        .event-showcase-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .event-img-wrap {
          position: relative;
          height: 200px;
        }

        .event-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .event-live-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #EF4444;
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .event-card-body {
          padding: 24px;
        }

        .event-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .event-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .event-price-tag {
          font-size: 1.1rem;
          font-weight: 800;
          color: #A78BFA;
        }

        .event-date, .event-location {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          margin-bottom: 6px;
        }

        .event-organizer-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 16px 0 20px 0;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .organizer-avatar-stack {
          display: flex;
        }

        .organizer-avatar-stack img {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid var(--bg-dark-card);
          margin-left: -8px;
        }

        .organizer-avatar-stack img:first-child {
          margin-left: 0;
        }

        .organizer-name {
          font-size: 0.8rem;
          color: var(--text-dark-secondary);
        }

        .btn-full-event {
          width: 100%;
        }

        /* Mobile Wallet Ticket */
        .ticket-mobile-card {
          background: #0B0B18;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-xl);
          padding: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }

        .ticket-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
        }

        .ticket-header-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #A78BFA;
        }

        .ticket-card-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ticket-card-main h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .ticket-venue {
          font-size: 0.75rem;
          color: var(--text-dark-secondary);
          margin-bottom: 16px;
        }

        .qr-container {
          background: #FFFFFF;
          padding: 12px;
          border-radius: var(--radius-md);
          margin-bottom: 16px;
        }

        .ticket-details-grid {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 16px;
          font-size: 0.72rem;
          text-align: left;
        }

        .ticket-details-grid .label {
          display: block;
          color: var(--text-dark-secondary);
        }

        .ticket-details-grid .val {
          color: #FFFFFF;
        }

        .btn-add-wallet {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 8px 12px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .btn-add-wallet:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 1024px) {
          .events-container {
            grid-template-columns: 1fr;
          }

          .event-mock-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
