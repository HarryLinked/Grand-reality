import Icon from '../components/Icon.jsx';
import { Btn, Eyebrow, IconBubble, WaveText } from '../components/Shared.jsx';
import thoughtfulDesignImage from '../assets/Thoughful_Design1.png';
import premiumConstructionImage from '../assets/Premium_Construction1.png';
import lifestyleCommunitiesImage from '../assets/Lifestyle_Communities2.png';
import Interior1 from '../assets/Interior_banner.png';
import Interior from '../assets/Interior.png';
import plot from '../assets/plot1.png';
import { HeroCarousel } from '../components/Slider.jsx';
import about_hero from '../assets/about_hero.png';

const values = [
  { icon: 'ShieldCheck', title: 'Quality First', text: 'We never compromise on quality. Excellence is our standard in every project.' },
  { icon: 'Users', title: 'Customer Focused', text: 'Our customers are at the heart of our decisions. We build relationships that last.' },
  { icon: 'Eye', title: 'Transparency', text: 'We maintain complete transparency in every step of our process.' },
  { icon: 'Clock', title: 'Timely Delivery', text: 'We value your time and ensure every project is delivered as promised.' },
];

const journey = [
  { icon: 'Flag', year: '2014', title: 'The Beginning', text: 'Started our journey with a vision to build quality homes.' },
  { icon: 'Building2', year: '2017', title: 'Growing Strong', text: 'Delivered multiple successful projects across Chennai.' },
  { icon: 'TrendingUp', year: '2020', title: 'Expanding Horizons', text: 'Strengthened our presence with larger projects and happier clients.' },
  { icon: 'Target', year: '2024+', title: 'Building Futures', text: 'Continuing our mission to create landmark spaces for generations to come.' },
];

const why = [
  { image: thoughtfulDesignImage, title: 'Thoughtful Design', text: 'Modern designs that blend aesthetics with functionality to enhance everyday living.' },
  { image: premiumConstructionImage, title: 'Premium Construction', text: 'High-quality materials and superior construction for long-lasting value.' },
  { image: lifestyleCommunitiesImage, title: 'Lifestyle Communities', text: 'Well-planned communities with amenities that enrich your lifestyle.' },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-copy">
            <Eyebrow>About Us</Eyebrow>
            <WaveText as="h1">Building More<br />Than Properties.<br /><em>Building Trust.</em></WaveText>
            <p>Grand Reality is one of the most trusted real estate developers in Chennai. We build more than properties – we create lifestyles that stand the test of time.</p>
            <Btn href="#commit" variant="outline">Know More About Us</Btn>
          </div>
        </div>
        <div className="about-hero-img">
          <HeroCarousel
            className="about-hero-carousel"
            label="About Grand Reality"
            slides={[
              { src: about_hero, alt: 'A home designed by Grand Reality' },
              { src: plot, alt: 'Thoughtfully planned residential living' },
              { src: Interior1, alt: 'A comfortable modern home interior' },
            ]}
          />
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="commit" id="commit">
        <img className="commit-img" src={Interior} alt="Interior designed by Grand Reality" loading="lazy" />
        <div className="commit-inner">
          <div className="commit-copy">
            <Eyebrow>Our Commitment</Eyebrow>
            <WaveText as="h2" className="h-lg">Driven by Values.<br /><em>Focused on You.</em></WaveText>
            <p>At Grand Reality, our commitment to quality, transparency and timely delivery is at the heart of everything we do. We believe in building lasting relationships with our customers through honesty and excellence.</p>
          </div>
          <div className="values">
            {values.map((v) => (
              <div className="value" key={v.title}>
                <IconBubble name={v.icon} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey" id="journey">
        <div className="container journey-inner">
          <div className="journey-copy">
            <Eyebrow light>Our Journey</Eyebrow>
            <h2 className="h-md light">A Legacy Built on<br />Hard Work &amp; Integrity.</h2>
            <p>From humble beginnings to becoming a trusted name in real estate, our journey has been built on hard work, integrity and the trust of our customers.</p>
            <Btn href="#journey" variant="outline-light">Our Journey</Btn>
          </div>
          <ol className="timeline">
            {journey.map((j) => (
              <li key={j.year}>
                <span className="t-icon"><Icon name={j.icon} size={26} /></span>
                <i className="t-dot" />
                <strong className="t-year">{j.year}</strong>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <div className="container about-why-inner">
          <div className="aw-copy">
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="h-lg">Creating Spaces That<br /><em>Enhance Every Lifestyle.</em></h2>
            <p>We don’t just build buildings, we craft spaces where life and happiness are made.</p>
            <Btn to="/contact">Let’s Build Together</Btn>
          </div>
          <div className="aw-cols">
            {why.map((w) => (
              <div key={w.title} className="aw-col">
                <img className="aw-icon" src={w.image} alt="" loading="lazy" />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
