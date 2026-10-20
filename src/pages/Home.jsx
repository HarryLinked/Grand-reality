import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { HeroCarousel, useCarouselAutoplay } from '../components/Slider.jsx';
import { Btn, Eyebrow, IconBubble, WaveText } from '../components/Shared.jsx';
import { company, projects } from '../data.js';
import heroBannernew from '../assets/hero-banner.png';
import heroBanner from '../assets/gr-hero-banner.png';
import homeaboutfinal from '../assets/home-about-image-final.webp';
import homeaboutfinal2 from '../assets/home-about-img.webp';
import hero_home from '../assets/hero_home.png';
import hero_homep from '../assets/hero_homep.png';
import Interior from '../assets/Interior.png';
import villa1 from '../assets/villa1.png';
import villa2 from '../assets/villa2.png';
import villa2k from '../assets/villa2k.jpg';

const stats = [
  { icon: 'Medal', value: '10+', label: 'Years of Experience' },
  { icon: 'Building2', value: '25+', label: 'Projects Delivered' },
  { icon: 'Users', value: '1000+', label: 'Happy Families' },
  { icon: 'Construction', value: '3+', label: 'Ongoing Projects' },
];

const aboutPoints = [
  { icon: 'MapPin', title: 'Prime Locations', text: 'Carefully chosen locations for better living.' },
  { icon: 'HardHat', title: 'Quality Construction', text: 'Built with the finest materials & modern technology.' },
  { icon: 'Clock', title: 'Timely Delivery', text: 'On-time delivery with guaranteed excellence.' },
  { icon: 'ShieldCheck', title: 'Transparent Process', text: 'Clear communication & complete transparency.' },
  { icon: 'Users', title: 'Trusted By Many Families', text: 'Thousands of happy families trust us.' },
];

const why = [
  { icon: 'MapPin', title: 'Prime Locations', text: 'Carefully selected locations with great connectivity and future growth.' },
  { icon: 'Building2', title: 'Quality Construction', text: 'High-quality materials and modern construction techniques.' },
  { icon: 'Clock', title: 'Timely Delivery', text: 'We value your time and ensure projects are delivered as promised.' },
  { icon: 'ShieldCheck', title: 'Transparent Process', text: 'Clear communication and transparency at every stage of development.' },
  { icon: 'Users', title: 'Trusted By Many', text: 'Hundreds of happy families who trust us for their dream homes.' },
];

const reviews = [
  { text: 'Excellent construction quality and on-time delivery. We are really happy with our new home at Tesla City.', name: 'Karthik R.', role: 'Tesla City Buyer' },
  { text: 'Transparent process and great customer support throughout. Highly recommended!', name: 'Priya S.', role: 'Sri Mayura Avenue Buyer' },
  { text: 'Grand Reality truly understands customer needs and builds homes with trust and quality.', name: 'Suresh M.', role: 'Grand Square Resident' },
  { text: 'The team guided us clearly at every step, and the whole experience felt straightforward and reassuring.', name: 'Anitha M.', role: 'Homebuyer' },
  { text: 'We appreciated the thoughtful planning and the helpful support we received while exploring our options.', name: 'Vijay K.', role: 'Homebuyer' },
  { text: 'A welcoming team and a well-planned community made our site visit a very positive experience.', name: 'Meena R.', role: 'Homebuyer' },
];

const faqs = [
  {
    question: 'What types of projects does Grand Reality offer?',
    answer: 'Our portfolio includes residential plots at Sri Mayura Avenue, premium apartments at Grand Square and duplex villas at Tesla City. Visit the Projects page to explore each development.',
  },
  {
    question: 'Where are the projects located?',
    answer: 'Our developments are in and around Chennai. Each project page has its location and map so you can review the area and nearby connections.',
  },
  {
    question: 'Can I arrange a visit to a project?',
    answer: 'Yes. Contact our team to arrange a site visit. We can help you choose a suitable time and share the latest project information.',
  },
  {
    question: 'How can I confirm current prices and availability?',
    answer: 'Prices and availability may change. Contact our team for the latest details before making a decision. Any starting price shown on the website is indicative and may exclude registration, taxes and other statutory charges.',
  },
  {
    question: 'How do I get more information about a project?',
    answer: 'Open the project page for its features, specifications and location details, or contact our team directly for help with your questions.',
  },
];

export function ProjectCardCompact({ p }) {
  if (!p) return null;
  const targetLink = p.status === 'upcoming' ? (p.link || '/contact') : p.link;
  return (
    <article className="pc-compact">
      <div className="pc-img">
        <img src={p.image} alt={p.name} loading="lazy" />
        <span className={`badge ${p.status === 'completed' ? 'badge-done' : 'badge-go'}`}>{p.status}</span>
      </div>
      <div className="pc-body">
        <h3>{p.name}</h3>
        {p.place ? (
          <p className="pc-place"><Icon name="MapPin" size={14} />{p.place}</p>
        ) : (
          <p className="pc-place muted">Location Coming Soon</p>
        )}
        <div className="pc-foot">
          <span>{p.type || 'Upcoming'}</span>
          {p.price ? (
            <span className="pc-price"><small>Starts from</small><strong>{p.price}</strong></span>
          ) : (
            <Link to={targetLink} className="link-arrow">
              {p.status === 'upcoming' ? 'Stay Updated' : 'View Project'} <Icon name="ArrowRight" size={15} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const shown = [projects[0], projects[1], projects[2]];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeReview, setActiveReview] = useState(0);
  const [isReviewPaused, setIsReviewPaused] = useState(false);
  const goToReview = useCallback((direction) => {
    setActiveReview((current) => (current + direction + reviews.length) % reviews.length);
  }, []);
  const advanceReview = useCallback(() => goToReview(1), [goToReview]);
  useCarouselAutoplay(advanceReview, { paused: isReviewPaused });
  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <HeroCarousel
          className="home-hero-bg"
          label="Grand Reality featured homes"
          slides={[
            { src: hero_home, alt: 'Modern family home in a landscaped community' },
            { src: hero_homep, alt: 'A welcoming contemporary residential space' },
            { src: heroBanner, alt: 'Thoughtfully designed home by Grand Reality' },
          ]}
        />
        
        <div className="container home-hero-inner">
          <div className="home-hero-copy">
            <Eyebrow>Crafting Spaces</Eyebrow>
            <WaveText as="h1">Built on Trust.<br />Designed for <em>Life.</em></WaveText>
            <p>Premium living spaces crafted with quality, transparency and a commitment to excellence.</p>
            <div className="btn-row">
              <Btn to="/projects">Explore Projects</Btn>
              <Btn to="/contact" variant="outline" icon={null}>Contact Us</Btn>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="stats-bar">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <Icon name={s.icon} size={42} strokeWidth={1.3} />
                <div><strong>{s.value}</strong><span>{s.label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section home-about">
        <div className="container two-col">
          <div className="ha-copy">
            <Eyebrow>About Grand Reality</Eyebrow>
            <WaveText as="h2" className="h-lg">Commitment To Quality.<br /><em>Driven By Passion.</em></WaveText>
            <p className="lead">Grand Reality is one of the most trusted real estate developers in Chennai. We build more than properties — we create lifestyles your family will cherish forever.</p>
            <ul className="point-list">
              {aboutPoints.map((p) => (
                <li key={p.title}>
                  <span className="ring"><Icon name={p.icon} size={20} /></span>
                  <div><strong>{p.title}</strong><span>{p.text}</span></div>
                </li>
              ))}
            </ul>
            <Link to="/about" className="link-arrow big">Know More About Us <Icon name="ArrowRight" size={19} /></Link>
          </div>
          <div className="ha-visual">
            <div className="ha-photo">
              <img src={homeaboutfinal} alt="Modern Grand Reality villa" loading="lazy" />
              <div className="ha-card">
                <span className="ha-icon"><Icon name="Building2" size={30} /></span>
                <h3>Building More Than Properties.</h3>
                <hr />
                <p>Creating Lasting Value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-home">
        <div className="container">
          <div className="section-head row">
            <div>
              <Eyebrow>Our Projects</Eyebrow>
              <WaveText as="h2" className="h-md">Spaces Designed For Better Living.</WaveText>
            </div>
            <Link to="/projects" className="link-arrow">View All Projects <Icon name="ArrowRight" size={16} /></Link>
          </div>
          <div className="grid-3">
            {shown.map((p) => <ProjectCardCompact key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-dark">
        <div className="container">
          <Eyebrow light>Why Choose Us</Eyebrow>
          <WaveText as="h2" className="h-md light">Excellence In Every Step</WaveText>
          <div className="grid-5">
            {why.map((w) => (
              <div className="why-card" key={w.title}>
                <Icon name={w.icon} size={40} strokeWidth={1.3} />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DREAM HOME CTA */}
      <section className="container dream-wrap">
        <div className="dream">
          <img src={Interior} alt="Elegant living room" loading="lazy" />
          <div className="dream-copy">
            <Eyebrow>Let’s Find Your Dream Home</Eyebrow>
            <WaveText as="h2" className="h-md">Your Dream Home<br /><em>Is Just A Step Away!</em></WaveText>
            <Btn to="/contact">Talk To Our Expert</Btn>
          </div>
          <ul className="dream-contact">
            <li><Icon name="Phone" size={24} /><div><small>Call Us Now</small><a href={company.phoneHref}>{company.phone}</a></div></li>
            <li><Icon name="Mail" size={24} /><div><small>Email Us</small><a href={`mailto:${company.email}`}>{company.email}</a></div></li>
            <li><Icon name="MapPin" size={24} /><div><small>Visit Our Office</small><span>{company.address.join(' ')}</span></div></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="faq-heading">
            <Eyebrow center both>FAQs</Eyebrow>
            <WaveText as="h2" className="h-md">Frequently Asked <em>Questions</em></WaveText>
            <p>Helpful answers about our projects and how to get started.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `home-faq-answer-${index}`;
              return (
                <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                  <h3>
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                  </h3>
                  <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials">
        <div className="container">
          <div className="testimonial-heading">
            <Eyebrow center both>What Our Clients Say</Eyebrow>
            <WaveText as="h2" className="h-md">Real Stories. <em>Lasting Trust.</em></WaveText>
          </div>
          <div
            className="testimonial-carousel"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            onMouseEnter={() => setIsReviewPaused(true)}
            onMouseLeave={() => setIsReviewPaused(false)}
            onFocusCapture={() => setIsReviewPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsReviewPaused(false);
            }}
          >
            <button className="testimonial-arrow" type="button" aria-label="Previous testimonial" onClick={() => goToReview(-1)}>
              <Icon name="ChevronLeft" size={22} />
            </button>
            <figure
              className="t-card"
              key={reviews[activeReview].name}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${activeReview + 1} of ${reviews.length}`}
              aria-live="polite"
            >
              <Icon name="Quote" size={40} strokeWidth={1.4} className="t-quote" />
              <blockquote>{reviews[activeReview].text}</blockquote>
              <figcaption><strong>– {reviews[activeReview].name}</strong><span>{reviews[activeReview].role}</span></figcaption>
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="Star" size={20} className="star" />)}
              </div>
            </figure>
            <button className="testimonial-arrow" type="button" aria-label="Next testimonial" onClick={() => goToReview(1)}>
              <Icon name="ChevronRight" size={22} />
            </button>
          </div>
          <div className="testimonial-dots" role="group" aria-label="Choose testimonial">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                className={activeReview === index ? 'on' : ''}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={activeReview === index ? 'true' : undefined}
                onClick={() => setActiveReview(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
