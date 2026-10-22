import { Navigate, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import MapEmbed from '../components/Map.jsx';
import { ThumbGallery } from '../components/Slider.jsx';
import { BlueBanner } from '../components/ContactBand.jsx';
import { Btn, Eyebrow, IconBubble, WaveText } from '../components/Shared.jsx';
import LocationAccordion from '../components/LocationAccordion.jsx';
import SpecificationShowcase from '../components/SpecificationShowcase.jsx';
import { completedProjects } from '../data.js';

export default function CompletedProject() {
  const { slug } = useParams();
  const p = completedProjects[slug];
  if (!p) return <Navigate to="/404" replace />;
  const fullName = p.name.join(' ');
  return (
    <>
      <section className="cp-hero">
        <div className="hero-carousel cp-hero-img">
          <div className="hero-carousel-images">
            <img className="hero-carousel-image is-active" src={p.heroImages[0]} alt={`${fullName} featured image 1`} />
          </div>
        </div>
        <div className="container">
          <div className="cp-hero-copy">
            <Eyebrow>Completed Project</Eyebrow>
            <WaveText as="h1">{p.name[0]}<br /><em>{p.name[1]}</em></WaveText>
            <p className="cp-place"><Icon name="MapPin" size={17} />{p.place}</p>
          </div>
        </div>
      </section>

      <section className="section cp-about">
        <div className="container two-col">
          <div>
            <Eyebrow both>About The Project</Eyebrow>
            <WaveText as="h2" className="h-md">{p.aboutTitle[0]}<br /><em>{p.aboutTitle[1]}</em></WaveText>
            <p className="lead sm">{p.about}</p>
            <ul className="checks">
              {p.highlights.map((h) => <li key={h}><Icon name="CircleCheck" size={19} />{h}</li>)}
            </ul>
          </div>
          <ThumbGallery images={p.galleryImages} alt={fullName} />
          <Btn className="btn btn-primary" href="#" icon="Download" variant="outline" onClick={(e) => e.preventDefault()}>Download Brochure</Btn>
        </div>
      </section>

      <section className="container">
        <div className="statbar">
          {p.stats.map((s) => (
            <div className="sb-item" key={s.label}>
              <IconBubble name={s.icon} size={24} />
              <div><small>{s.label}</small><strong>{s.value}</strong></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cp-why">
        <div className="container two-col rev">
          <img className="cp-side" src={p.sideImage} alt={`${fullName} surroundings`} loading="lazy" />
          <div>
            <Eyebrow both>Why Choose {p.whyTitle}</Eyebrow>
            <h2 className="h-md">Everything You Need,<br /><em>Right Where You Are</em></h2>
            <div className="why-grid">
              {p.why.map((w) => (
                <div className="why-item" key={w.title}>
                  <IconBubble name="CircleCheck" />
                  <div><h3>{w.title}</h3><p>{w.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="specs">
          <Eyebrow center both>Project Specifications</Eyebrow>
          <SpecificationShowcase specs={p.specs} />
        </div>
      </section>

      <section className="section cp-loc">
        <div className="container two-col loc2">
          <div>
            <Eyebrow>Prime Location</Eyebrow>
            <h2 className="h-md">Well Connected.<br /><em>Well Positioned.</em></h2>
            {p.locationAdvantages ? (
              <LocationAccordion
                sections={[{ title: 'Connectivity', items: p.near }, ...p.locationAdvantages]}
                idPrefix={slug}
              />
            ) : (
              <ul className="near">
                {p.near.map(([n, t]) => <li key={n}><span>{n}</span><b>{t}</b></li>)}
              </ul>
            )}
          </div>
          <MapEmbed query={p.mapQuery} fallback={p.mapImage} title={`${fullName} location`} height={340} />
        </div>
      </section>

      <BlueBanner
        title={`Have Questions About ${fullName}?`}
        text={`We’re here to help you find the perfect ${slug === 'grand-square' ? 'home' : 'plot'} for your future.`}
        cta="Talk to Our Expert"
        to={`/contact?subject=${encodeURIComponent(fullName + ' enquiry')}`}
      />
    </>
  );
}
