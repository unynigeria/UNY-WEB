import React from 'react';
import { ArrowRight, Star, ChevronRight, CheckCircle2, Ticket, Utensils, ShoppingBag, MapPin, QrCode, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenWaitlist }) {
  return (
    <section className="hero-section section-padding">
      <div className="container hero-container">
        {/* Left Hero Content */}
        <div className="hero-content">
          <div className="badge-tag badge-tag-pill">
            <Sparkles size={14} /> LIFE ON CAMPUS
          </div>
          
          <h1 className="hero-title">
            Your campus,<br />
            <span className="text-gradient">in one place.</span>
          </h1>
          
          <p className="hero-subtitle">
            Find what's happening, where to eat, what to buy, where to go and what's around you — all in one place.
          </p>

          <div className="hero-cta-group">
            <button onClick={onOpenWaitlist} className="btn btn-primary btn-hero">
              Get Uny <ArrowRight size={18} />
            </button>
            <a href="#explore" className="btn btn-secondary btn-hero">
              Explore Uny <ChevronRight size={18} />
            </a>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof">
            <div className="avatar-group">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Student" className="avatar" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80" alt="Student" className="avatar" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Student" className="avatar" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Student" className="avatar" />
            </div>

            <div className="rating-info">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#FBBF24" color="#FBBF24" />
                ))}
                <span className="rating-score">4.8/5</span>
              </div>
              <p className="rating-text">Loved by 20,000+ Students on FUNAAB</p>
            </div>
          </div>
        </div>

        {/* Right Phone Mockup & Floating Cards */}
        <div className="hero-visual">
          <div className="visual-wrapper">
            
            {/* Top Left Floating Card - Food Party */}
            <div className="floating-card float-top-left glass-card-light float-anim">
              <div className="card-header-mini">
                <span className="date-tag">Sat, 24 May</span>
              </div>
              <div className="card-body-mini">
                <h4>Food Party</h4>
                <p>FUNAAB Park Side</p>
                <div className="card-footer-mini">
                  <span className="price">₦1,500</span>
                  <button onClick={onOpenWaitlist} className="btn-tiny">Get Ticket</button>
                </div>
              </div>
            </div>

            {/* Top Right Floating Card - Payment Successful */}
            <div className="floating-card float-top-right glass-card-light float-anim-delay">
              <div className="payment-success">
                <div className="check-icon">
                  <CheckCircle2 size={20} color="#10B981" />
                </div>
                <div>
                  <span className="pay-status">Payment successful</span>
                  <p className="pay-amount">₦2,600.00</p>
                  <span className="pay-item">Afro Night Ticket</span>
                </div>
              </div>
            </div>

            {/* Middle Left Floating Card - Food item */}
            <div className="floating-card float-mid-left glass-card-light">
              <div className="food-item-mini">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&q=80" alt="Jollof Rice" className="food-img" />
                <div>
                  <h4>Jollof Rice & Chicken</h4>
                  <p className="vendor">Alma Kitchen • 15 mins</p>
                  <span className="price">₦2,500</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Floating Card - Digital Ticket */}
            <div className="floating-card float-bottom-right glass-card-dark">
              <div className="ticket-card-mini">
                <div className="ticket-top">
                  <span className="badge-purple">Afro Night</span>
                  <span className="ticket-date">Sat, 24 May • 7:00 PM</span>
                </div>
                <div className="qr-box">
                  <QrCode size={64} color="#FFFFFF" />
                </div>
                <div className="ticket-footer-mini">
                  <span>UNY-AN-240525</span>
                  <span className="ticket-price">₦2,000</span>
                </div>
              </div>
            </div>

            {/* Main Phone Frame Mockup */}
            <div className="phone-frame">
              <div className="phone-screen">
                {/* Dynamic App Notch & Header */}
                <div className="phone-top-bar">
                  <div className="phone-notch"></div>
                </div>

                <div className="app-header">
                  <div className="app-user">
                    <img src="/uny_logo_assets/unylogo.jpg" alt="App Logo" className="app-logo-ic" />
                    <div>
                      <span className="app-greeting">Hey Tapi 👋</span>
                    </div>
                  </div>
                  
                  <div className="app-wallet">
                    <span className="wallet-label">App Balance</span>
                    <div className="wallet-val">
                      <strong>₦15,500</strong>
                      <span className="topup-btn">Top up</span>
                    </div>
                  </div>
                </div>

                {/* App Quick Icons */}
                <div className="app-categories">
                  <div className="app-cat-item active">
                    <div className="cat-ic"><Ticket size={16} /></div>
                    <span>Events</span>
                  </div>
                  <div className="app-cat-item">
                    <div className="cat-ic"><Utensils size={16} /></div>
                    <span>Food</span>
                  </div>
                  <div className="app-cat-item">
                    <div className="cat-ic"><ShoppingBag size={16} /></div>
                    <span>Market</span>
                  </div>
                  <div className="app-cat-item">
                    <div className="cat-ic"><MapPin size={16} /></div>
                    <span>Places</span>
                  </div>
                </div>

                {/* App Featured Section */}
                <div className="app-section-title">
                  <span>What's happening</span>
                  <span className="see-all">See all</span>
                </div>

                <div className="app-banner-card">
                  <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80" alt="Afro Night Event" className="app-banner-img" />
                  <div className="app-banner-overlay">
                    <span className="app-event-tag">AFRO NIGHT</span>
                    <h5>Afro Night 2025</h5>
                    <p>Sat 24 May • 7:00 PM • Main Auditorium</p>
                    <div className="app-banner-flex">
                      <span className="app-banner-price">₦2,000</span>
                      <button onClick={onOpenWaitlist} className="btn-app-ticket">Get Ticket</button>
                    </div>
                  </div>
                </div>

                {/* App Vendor Listing */}
                <div className="app-vendor-card">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=150&q=80" alt="Cravings Kitchen" className="vendor-img" />
                  <div className="vendor-details">
                    <h6>Cravings Kitchen</h6>
                    <p>★ 4.8 • 15-20 min • 300m</p>
                    <span className="vendor-badge">Open now</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background: var(--hero-glow), #FAFAFC;
          overflow: hidden;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }

        .text-gradient {
          background: linear-gradient(135deg, #6C2BD9 0%, #4F46E5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 520px;
          margin-bottom: 32px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .btn-hero {
          padding: 14px 28px;
          font-size: 1rem;
        }

        .hero-social-proof {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar-group {
          display: flex;
          align-items: center;
        }

        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 3px solid #FFFFFF;
          object-fit: cover;
          margin-left: -12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .avatar:first-child {
          margin-left: 0;
        }

        .rating-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stars {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .rating-score {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
          margin-left: 4px;
        }

        .rating-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Hero Visual & Phone */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 600px;
          display: flex;
          justify-content: center;
        }

        .phone-frame {
          width: 290px;
          height: 580px;
          background: #000000;
          border-radius: 46px;
          padding: 12px;
          box-shadow: 0 25px 60px -15px rgba(108, 43, 217, 0.3), 0 0 0 4px #1E1B4B;
          position: relative;
          z-index: 2;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: #F8FAFC;
          border-radius: 36px;
          overflow: hidden;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .phone-top-bar {
          display: flex;
          justify-content: center;
          height: 18px;
        }

        .phone-notch {
          width: 90px;
          height: 18px;
          background: #000000;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }

        .app-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .app-user {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .app-logo-ic {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          object-fit: cover;
        }

        .app-greeting {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .app-wallet {
          background: #6C2BD9;
          color: #FFFFFF;
          padding: 6px 10px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 0.75rem;
        }

        .wallet-val {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .topup-btn {
          background: rgba(255,255,255,0.25);
          font-size: 0.65rem;
          padding: 2px 6px;
          border-radius: 6px;
        }

        .app-categories {
          display: flex;
          justify-content: space-between;
          gap: 6px;
        }

        .app-cat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        .app-cat-item.active .cat-ic {
          background: var(--primary);
          color: #FFFFFF;
        }

        .cat-ic {
          width: 36px;
          height: 36px;
          background: #F1F5F9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        .app-section-title {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .see-all {
          color: var(--primary);
          font-weight: 600;
        }

        .app-banner-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          height: 170px;
        }

        .app-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .app-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 70%);
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: #FFFFFF;
        }

        .app-event-tag {
          font-size: 0.6rem;
          background: var(--primary);
          padding: 2px 6px;
          border-radius: 4px;
          width: fit-content;
          margin-bottom: 4px;
        }

        .app-banner-overlay h5 {
          font-size: 0.9rem;
          margin-bottom: 2px;
        }

        .app-banner-overlay p {
          font-size: 0.65rem;
          opacity: 0.8;
          margin-bottom: 6px;
        }

        .app-banner-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .app-banner-price {
          font-weight: 700;
          font-size: 0.8rem;
        }

        .btn-app-ticket {
          background: var(--primary);
          color: #FFFFFF;
          font-size: 0.65rem;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .app-vendor-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          padding: 8px;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .vendor-img {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          object-fit: cover;
        }

        .vendor-details h6 {
          font-size: 0.78rem;
        }

        .vendor-details p {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .vendor-badge {
          font-size: 0.6rem;
          color: #10B981;
          font-weight: 600;
        }

        /* Floating Cards */
        .floating-card {
          position: absolute;
          z-index: 10;
          padding: 12px 14px;
          border-radius: 14px;
          box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.12);
        }

        .float-top-left {
          top: 30px;
          left: -40px;
          width: 170px;
        }

        .card-header-mini {
          margin-bottom: 4px;
        }

        .date-tag {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--primary);
        }

        .card-body-mini h4 {
          font-size: 0.85rem;
        }

        .card-body-mini p {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .card-footer-mini {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 6px;
        }

        .card-footer-mini .price {
          font-weight: 700;
          font-size: 0.8rem;
        }

        .btn-tiny {
          background: var(--primary);
          color: #FFFFFF;
          font-size: 0.65rem;
          padding: 3px 8px;
          border-radius: 20px;
        }

        .float-top-right {
          top: 20px;
          right: -30px;
          width: 190px;
        }

        .payment-success {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .pay-status {
          font-size: 0.7rem;
          color: #10B981;
          font-weight: 700;
        }

        .pay-amount {
          font-size: 0.9rem;
          font-weight: 800;
        }

        .pay-item {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .float-mid-left {
          bottom: 180px;
          left: -50px;
          width: 190px;
        }

        .food-item-mini {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .food-img {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          object-fit: cover;
        }

        .food-item-mini h4 {
          font-size: 0.75rem;
        }

        .food-item-mini .vendor {
          font-size: 0.62rem;
          color: var(--text-muted);
        }

        .food-item-mini .price {
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--primary);
        }

        .float-bottom-right {
          bottom: 60px;
          right: -45px;
          width: 170px;
          color: #FFFFFF;
        }

        .ticket-card-mini {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .ticket-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.65rem;
        }

        .badge-purple {
          background: var(--primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .ticket-date {
          font-size: 0.6rem;
          opacity: 0.8;
        }

        .qr-box {
          background: #FFFFFF;
          padding: 6px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ticket-footer-mini {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-subtitle {
            margin: 0 auto 32px auto;
          }

          .hero-cta-group {
            justify-content: center;
          }

          .hero-social-proof {
            justify-content: center;
          }

          .float-top-left, .float-top-right, .float-mid-left, .float-bottom-right {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.7rem;
          }
        }

        @media (max-width: 380px) {
          .hero-title {
            font-size: 2.1rem;
          }
          .phone-frame {
            width: 260px;
            height: 520px;
          }
          .btn-hero {
            padding: 12px 20px;
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}
