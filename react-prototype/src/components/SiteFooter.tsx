import { useState } from 'react';
import { DeliveryIcon, GiftIcon, StoreIcon } from './Icons';

export function SiteFooter() {
  const [email, setEmail] = useState('');

  return (
    <footer className="site-footer">
      <div className="services-grid">
        <span className="services-label">Our Services</span>
        <div className="service">
          <DeliveryIcon className="service-icon" />
          <div>
            <p className="service-title">Free Delivery &amp; Returns</p>
            <p className="service-copy">Available on all online orders.</p>
          </div>
        </div>
        <div className="service">
          <GiftIcon className="service-icon" />
          <div>
            <p className="service-title">Complimentary Gift Packaging</p>
            <p className="service-copy">
              Have your gifts arrive wrapped in our signature packaging,
              available at the checkout.
            </p>
          </div>
        </div>
        <div className="service">
          <StoreIcon className="service-icon" />
          <div>
            <p className="service-title">Collect in Store</p>
            <p className="service-copy">
              Not at home? Choose to pick up from your nearest store, at your
              convenience.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <h3>Sign Up</h3>
          <form
            className="signup-form"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail('');
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" aria-label="Sign up">
              →
            </button>
          </form>
        </div>
        <div className="footer-links">
          <a href="#" onClick={(e) => e.preventDefault()}>Find a Store</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Stories</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Burberry Services</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Customer Support</a>
          <a href="#" onClick={(e) => e.preventDefault()}>About Burberry</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Legal &amp; Cookies</a>
          <span className="footer-meta">
            Language <a href="#" onClick={(e) => e.preventDefault()}>English</a>
          </span>
          <span className="footer-meta">
            Shipping to <a href="#" onClick={(e) => e.preventDefault()}>United States ($)</a>
          </span>
        </div>
      </div>

      <div className="footer-legal">
        <p>
          <a href="#" onClick={(e) => e.preventDefault()}>Modern Slavery Statement</a>
        </p>
        <p>
          If you are using a screen-reader and are having problems using this
          website, please call{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>+1 877 217 4085</a> or{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>contact us</a> for assistance.
        </p>
      </div>
    </footer>
  );
}
