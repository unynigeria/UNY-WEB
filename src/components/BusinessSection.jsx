import React from 'react';
import { LayoutDashboard, Calendar, Ticket, ShoppingBag, BarChart3, Wallet, Plus, QrCode, ArrowRight, TrendingUp } from 'lucide-react';

export default function BusinessSection({ onOpenWaitlist }) {
  return (
    <section id="businesses" className="business-section section-padding">
      <div className="container business-container">
        
        {/* Left Column: Copy & CTA */}
        <div className="business-content">
          <div className="badge-tag badge-tag-dark">
            <LayoutDashboard size={14} /> BUILT FOR CAMPUS
          </div>

          <h2 className="business-title">
            Made for the people <br />
            <span className="text-purple-glow">who make campus happen.</span>
          </h2>

          <p className="business-desc">
            Sell more, get discovered and manage your campus business from one place.
          </p>

          <button onClick={onOpenWaitlist} className="btn btn-primary btn-business">
            For Businesses <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Column: Dashboard UI Preview */}
        <div className="dashboard-preview-wrapper">
          <div className="dashboard-card">
            
            {/* Dashboard Sidebar */}
            <div className="dashboard-sidebar">
              <div className="dash-logo">
                <span className="logo-sm">uny</span>
              </div>
              
              <nav className="dash-nav">
                <a href="#dash" className="dash-nav-item active"><LayoutDashboard size={16} /> <span>Overview</span></a>
                <a href="#dash" className="dash-nav-item"><Calendar size={16} /> <span>Events</span></a>
                <a href="#dash" className="dash-nav-item"><Ticket size={16} /> <span>Tickets</span></a>
                <a href="#dash" className="dash-nav-item"><ShoppingBag size={16} /> <span>Orders</span></a>
                <a href="#dash" className="dash-nav-item"><BarChart3 size={16} /> <span>Analytics</span></a>
                <a href="#dash" className="dash-nav-item"><Wallet size={16} /> <span>Payouts</span></a>
              </nav>
            </div>

            {/* Dashboard Main Content */}
            <div className="dashboard-main">
              
              {/* Header Bar */}
              <div className="dash-header">
                <div>
                  <h4 className="dash-heading">Afro Night <span className="badge-mini">Event</span></h4>
                  <p className="dash-sub">Realtime sales overview</p>
                </div>
                
                <div className="dash-user-profile">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Vendor" className="user-avatar" />
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-label">Revenue</span>
                  <div className="stat-value">₦384,000</div>
                  <span className="stat-trend positive"><TrendingUp size={12} /> +24%</span>
                </div>

                <div className="stat-card">
                  <span className="stat-label">Tickets sold</span>
                  <div className="stat-value">192</div>
                  <span className="stat-sub">Target 250</span>
                </div>

                <div className="stat-card">
                  <span className="stat-label">Sold Rate</span>
                  <div className="stat-value">78%</div>
                  <span className="stat-sub">High demand</span>
                </div>

                <div className="stat-card">
                  <span className="stat-label">Checked in</span>
                  <div className="stat-value">148</div>
                  <span className="stat-sub">Live scans</span>
                </div>
              </div>

              {/* Chart & Quick Actions Row */}
              <div className="dash-content-grid">
                
                {/* SVG Area Chart */}
                <div className="chart-card">
                  <div className="chart-header">
                    <h6>Ticket Sales Trend</h6>
                    <span className="chart-range">Last 7 days</span>
                  </div>
                  
                  <div className="chart-svg-wrap">
                    <svg viewBox="0 0 400 120" className="area-chart">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0"/>
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 0 100 Q 50 80 100 85 T 200 40 T 300 30 T 400 10 L 400 120 L 0 120 Z" 
                        fill="url(#chartGrad)"
                      />
                      <path 
                        d="M 0 100 Q 50 80 100 85 T 200 40 T 300 30 T 400 10" 
                        fill="none" 
                        stroke="#A78BFA" 
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="chart-days">
                      <span>15 May</span>
                      <span>17 May</span>
                      <span>19 May</span>
                      <span>21 May</span>
                      <span>23 May</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions Panel */}
                <div className="quick-actions-card">
                  <h6>Quick actions</h6>
                  
                  <div className="actions-list">
                    <button onClick={onOpenWaitlist} className="action-btn">
                      <Plus size={14} /> Create Event
                    </button>
                    <button onClick={onOpenWaitlist} className="action-btn">
                      <QrCode size={14} /> Scan Tickets
                    </button>
                    <button onClick={onOpenWaitlist} className="action-btn">
                      <BarChart3 size={14} /> Analytics
                    </button>
                    <button onClick={onOpenWaitlist} className="action-btn">
                      <Calendar size={14} /> Manage Event
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        .business-section {
          background: #080811;
          color: #FFFFFF;
          position: relative;
        }

        .business-container {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 48px;
          align-items: center;
        }

        .business-title {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .business-desc {
          font-size: 1.1rem;
          color: var(--text-dark-secondary);
          max-width: 480px;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .btn-business {
          padding: 14px 28px;
        }

        /* Dashboard Card */
        .dashboard-preview-wrapper {
          width: 100%;
        }

        .dashboard-card {
          background: #111026;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-xl);
          overflow: hidden;
          display: grid;
          grid-template-columns: 180px 1fr;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
        }

        .dashboard-sidebar {
          background: #0C0B1B;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 20px 14px;
        }

        .dash-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #A78BFA;
          margin-bottom: 24px;
          padding-left: 8px;
        }

        .dash-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dash-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-dark-secondary);
          transition: all 0.2s ease;
        }

        .dash-nav-item:hover, .dash-nav-item.active {
          background: rgba(124, 58, 237, 0.2);
          color: #FFFFFF;
        }

        .dashboard-main {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dash-heading {
          font-size: 1.15rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .badge-mini {
          font-size: 0.65rem;
          background: var(--primary);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dash-sub {
          font-size: 0.75rem;
          color: var(--text-dark-secondary);
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px;
          border-radius: var(--radius-md);
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-dark-secondary);
        }

        .stat-value {
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 4px 0 2px 0;
        }

        .stat-trend {
          font-size: 0.68rem;
          color: #10B981;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .stat-sub {
          font-size: 0.65rem;
          color: var(--text-dark-secondary);
        }

        .dash-content-grid {
          display: grid;
          grid-template-columns: 1fr 140px;
          gap: 16px;
        }

        .chart-card, .quick-actions-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 14px;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          margin-bottom: 12px;
        }

        .chart-range {
          font-size: 0.68rem;
          color: var(--text-dark-secondary);
        }

        .chart-svg-wrap {
          width: 100%;
        }

        .area-chart {
          width: 100%;
          height: 80px;
        }

        .chart-days {
          display: flex;
          justify-content: space-between;
          font-size: 0.62rem;
          color: var(--text-dark-secondary);
          margin-top: 4px;
        }

        .quick-actions-card h6 {
          font-size: 0.78rem;
          margin-bottom: 10px;
        }

        .actions-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .action-btn {
          background: rgba(255, 255, 255, 0.06);
          color: #FFFFFF;
          font-size: 0.7rem;
          padding: 6px 8px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.2s ease;
        }

        .action-btn:hover {
          background: rgba(124, 58, 237, 0.4);
        }

        @media (max-width: 1024px) {
          .business-container {
            grid-template-columns: 1fr;
          }

          .dashboard-card {
            grid-template-columns: 1fr;
          }

          .dashboard-sidebar {
            display: none;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .business-title {
            font-size: 2.2rem;
          }

          .dashboard-main {
            padding: 14px;
            gap: 14px;
          }

          .dash-content-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .stat-card {
            padding: 8px;
          }

          .stat-value {
            font-size: 0.95rem;
          }

          .stat-label {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 380px) {
          .business-title {
            font-size: 1.75rem;
          }

          .business-desc {
            font-size: 0.92rem;
          }

          .dashboard-main {
            padding: 10px;
            gap: 10px;
          }

          .dash-heading {
            font-size: 0.95rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
          }

          .stat-card {
            padding: 6px 8px;
          }

          .stat-value {
            font-size: 0.85rem;
          }

          .stat-label {
            font-size: 0.6rem;
          }

          .stat-sub, .stat-trend {
            font-size: 0.6rem;
          }

          .chart-header {
            font-size: 0.7rem;
          }

          .actions-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }

          .action-btn {
            font-size: 0.62rem;
            padding: 5px 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      `}</style>
    </section>
  );
}
