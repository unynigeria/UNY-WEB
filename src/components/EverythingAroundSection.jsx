import React, { useState } from 'react';
import { Utensils, ShoppingBag, Home, MapPin, Wrench, Sparkles, Star, ChevronRight } from 'lucide-react';

export default function EverythingAroundSection({ onOpenWaitlist }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { id: 'All', label: 'All' },
    { id: 'Food', label: 'Food', icon: <Utensils size={14} /> },
    { id: 'Events', label: 'Events' },
    { id: 'Market', label: 'Market', icon: <ShoppingBag size={14} /> },
    { id: 'Stay', label: 'Stay', icon: <Home size={14} /> },
    { id: 'Services', label: 'Services', icon: <Wrench size={14} /> },
  ];

  const items = [
    {
      id: 1,
      category: 'Food',
      title: 'Mama Cass Kitchen',
      subtitle: 'Popular for Fried Rice & Chicken',
      rating: '4.9',
      reviews: '230+',
      price: 'From ₦1,200',
      time: '10-15 mins',
      tag: 'Verified Vendor',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      category: 'Market',
      title: 'Campus Tech Hub',
      subtitle: 'Laptops, Earbuds & Phone Chargers',
      rating: '4.8',
      reviews: '180+',
      price: 'Student discounts',
      time: 'Same day pickup',
      tag: 'Electronics',
      image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      category: 'Stay',
      title: 'Green View Student Lodge',
      subtitle: '2 Bedroom Ensuite Apartment',
      rating: '4.7',
      reviews: '45+',
      price: '₦250,000/yr',
      time: '5 mins to Gate',
      tag: 'Off-Campus Stay',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      category: 'Services',
      title: 'Express Laundry & Press',
      subtitle: 'Washing, Drying & Ironing',
      rating: '4.9',
      reviews: '310+',
      price: '₦500 / shirt',
      time: '24h delivery',
      tag: 'Top Rated',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredItems = activeTab === 'All' 
    ? items 
    : items.filter(item => item.category === activeTab);

  return (
    <section id="around" className="around-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="badge-tag badge-tag-pill">
            <Sparkles size={14} /> MORE OF CAMPUS
          </div>
          <h2 className="section-title">Everything around you.</h2>
          <p className="section-subtitle">
            Food, Shopping, Places, Services, Stays. Everything around campus life, connected.
          </p>

          {/* Tab Filters */}
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`pill-btn ${activeTab === cat.id ? 'active' : ''}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="around-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="around-card">
              <div className="around-img-wrap">
                <img src={item.image} alt={item.title} className="around-img" />
                <span className="around-tag-badge">{item.tag}</span>
              </div>
              <div className="around-body">
                <div className="around-title-row">
                  <h4>{item.title}</h4>
                  <div className="rating-pill">
                    <Star size={13} fill="#FBBF24" color="#FBBF24" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                
                <p className="around-sub">{item.subtitle}</p>

                <div className="around-meta-row">
                  <span className="price">{item.price}</span>
                  <span className="dot">•</span>
                  <span className="time">{item.time}</span>
                </div>

                <button onClick={onOpenWaitlist} className="btn-explore-item">
                  View details <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .around-section {
          background: #FAFAFC;
        }

        .section-header-center {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 48px auto;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .category-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pill-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .pill-btn:hover {
          background: #F1F5F9;
          color: var(--text-primary);
        }

        .pill-btn.active {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(108, 43, 217, 0.25);
        }

        .around-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }

        .around-card {
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s ease;
        }

        .around-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .around-img-wrap {
          position: relative;
          height: 180px;
        }

        .around-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .around-tag-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(6px);
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
        }

        .around-body {
          padding: 20px;
        }

        .around-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .around-title-row h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .rating-pill {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .around-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 14px;
        }

        .around-meta-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .around-meta-row .dot {
          color: var(--text-muted);
        }

        .around-meta-row .time {
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.8rem;
        }

        .btn-explore-item {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #F8FAFC;
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .btn-explore-item:hover {
          background: var(--primary-light);
          color: var(--primary);
          border-color: var(--primary-light);
        }
      `}</style>
    </section>
  );
}
