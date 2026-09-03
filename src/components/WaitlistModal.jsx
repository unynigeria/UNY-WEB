import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    campus: 'FUNAAB'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header-badge">
              <Sparkles size={16} /> EARLY ACCESS
            </div>

            <h3 className="modal-title">Get early access to Uny</h3>
            <p className="modal-sub">
              Be among the first to experience seamless campus events, food, and student discounts.
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="role-selector">
                <button
                  type="button"
                  className={`role-btn ${role === 'student' ? 'active' : ''}`}
                  onClick={() => setRole('student')}
                >
                  I'm a Student
                </button>
                <button
                  type="button"
                  className={`role-btn ${role === 'vendor' ? 'active' : ''}`}
                  onClick={() => setRole('vendor')}
                >
                  I'm an Organizer / Vendor
                </button>
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Temitope Ojo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="temitope@student.funaab.edu.ng"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Select Campus</label>
                <select 
                  value={formData.campus}
                  onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                >
                  <option value="FUNAAB">FUNAAB (Abeokuta)</option>
                  <option value="UNILAG">UNILAG (Lagos)</option>
                  <option value="UI">UI (Ibadan)</option>
                  <option value="OOU">OOU (Ago-Iwoye)</option>
                  <option value="UNN">UNN (Nsukka)</option>
                  <option value="Other">Other Campus</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary modal-submit-btn">
                Reserve My Pass
              </button>
            </form>
          </div>
        ) : (
          <div className="success-state">
            <div className="success-icon-wrap">
              <CheckCircle size={48} color="#10B981" />
            </div>
            <h3>You're on the list! 🎉</h3>
            <p>
              Thanks for joining the Uny waitlist, <strong>{formData.name || 'Friend'}</strong>. We'll send your priority invitation pass to <strong>{formData.email}</strong> soon!
            </p>
            <button 
              onClick={() => {
                setSubmitted(false);
                onClose();
              }} 
              className="btn btn-primary modal-submit-btn"
            >
              Done
            </button>
          </div>
        )}

      </div>

      <style>{`
        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          color: var(--text-muted);
          padding: 6px;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .modal-close-btn:hover {
          background: #F1F5F9;
          color: var(--text-primary);
        }

        .modal-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--primary);
          background: var(--primary-light);
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 12px;
        }

        .modal-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .modal-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .role-selector {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          background: #F1F5F9;
          padding: 4px;
          border-radius: var(--radius-md);
        }

        .role-btn {
          padding: 8px;
          font-size: 0.78rem;
          font-weight: 700;
          border-radius: 8px;
          color: var(--text-muted);
          transition: all 0.2s;
        }

        .role-btn.active {
          background: #FFFFFF;
          color: var(--primary);
          box-shadow: 0 2px 4px rgba(0,0,0,0.06);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .form-group input, .form-group select {
          padding: 10px 14px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus, .form-group select:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(108, 43, 217, 0.15);
        }

        .modal-submit-btn {
          width: 100%;
          padding: 12px;
          margin-top: 8px;
        }

        .success-state {
          text-align: center;
          padding: 12px 0;
        }

        .success-icon-wrap {
          margin-bottom: 16px;
        }

        .success-state h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .success-state p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
