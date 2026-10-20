import { Btn } from './Shared.jsx';
import Icon from './Icon.jsx';
import { company } from '../data.js';

// Light "Have Questions?" band with phone / email (Channel Partners page)
export function QuestionsBand() {
  return (
    <section className="container">
      <div className="questions-band">
        <span className="bubble solid"><Icon name="Phone" size={26} /></span>
        <div className="qb-text">
          <h3>Have Questions?</h3>
          <p>We’re here to help you. Reach out to our team.</p>
        </div>
        <a className="qb-link" href={company.phoneHref}><Icon name="Phone" size={18} />{company.phone}</a>
        <a className="qb-link" href={`mailto:${company.email}`}><Icon name="Mail" size={18} />{company.email}</a>
        <Btn to="/contact" variant="outline">Contact Us</Btn>
      </div>
    </section>
  );
}

// Solid blue CTA banner (completed project pages)
export function BlueBanner({ title, text, cta, to }) {
  return (
    <section className="container">
      <div className="blue-banner">
        <span className="bubble white"><Icon name="Phone" size={26} /></span>
        <div className="bb-text"><h3>{title}</h3><p>{text}</p></div>
        <Btn to={to} variant="white">{cta}</Btn>
      </div>
    </section>
  );
}
