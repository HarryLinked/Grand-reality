import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { company } from '../data.js';
import Grand_Reality_Logo from '../assets/Grand_Reality_Cyan_Logo_Bgr.png';
import Grand_Reality_Inverse from '../assets/Grand_Reality_Logo_Inverse.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    // TODO: connect to your newsletter provider / API
    setDone(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={Grand_Reality_Inverse} alt="Grand Reality" width="82" height="76" />
          <p>Building premium residential spaces with quality, transparency and commitment.</p>
          <div className="social">
            {['Facebook', 'Instagram', 'Linkedin', 'Youtube'].map((n) => (
              <a key={n} href="#" aria-label={n} onClick={(e) => e.preventDefault()}><Icon name={n} size={16} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects/tesla-city">On Going Projects</Link></li>
            <li><Link to="/projects/sri-mayura-avenue">Completed Projects</Link></li>
            <li><Link to="/channel-partners">Channel Partners</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Projects</h4>
          <ul>
            <li><Link to="/projects/tesla-city">Tesla City</Link></li>
            <li><Link to="/projects/sri-mayura-avenue">Sri Mayura Avenue</Link></li>
            <li><Link to="/projects">Other Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact Info</h4>
          <ul className="contact-list">
            <li><Icon name="MapPin" size={16} /><span>{company.address.join(' ')}</span></li>
            <li><Icon name="Phone" size={16} /><a href={company.phoneHref}>{company.phone}</a></li>
            <li><Icon name="Mail" size={16} /><a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p className="news-text">Subscribe to get updates on our latest projects and offers.</p>
          {done ? (
            <p className="news-done" role="status">Thanks! You're subscribed.</p>
          ) : (
            <form className="news-form" onSubmit={subscribe}>
              <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
              <button type="submit" aria-label="Subscribe"><Icon name="ArrowRight" size={18} /></button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Grand Reality. All Rights Reserved.</span>
        <span className="legal"><Link to="/privacy-policy">Privacy Policy</Link><i /><Link to="/terms">Terms &amp; Conditions</Link></span>
      </div>
    </footer>
  );
}
