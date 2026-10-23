import Icon from '../components/Icon.jsx';
import MapEmbed from '../components/Map.jsx';
import { WindowSlider } from '../components/Slider.jsx';
import { Btn, Eyebrow, WaveText } from '../components/Shared.jsx';
import LocationAccordion from '../components/LocationAccordion.jsx';
import SpecificationShowcase from '../components/SpecificationShowcase.jsx';
import tesla_1_n from '../assets/tesla-p-1-n.webp';
import tesla_2_n from '../assets/tesla-p-2-n.webp';
import tesla_3_n from '../assets/tesla-p-3-n.webp';
import tesla_1_m from '../assets/tesla-p-1-m.webp';
import tesla_2_m from '../assets/tesla-p-2-m.webp';
import tesla_3_m from '../assets/tesla-p-3-m.webp';
import spec_entrance from '../assets/teslahero.png';
import spec_lights from '../assets/Street_Lights.png';
import spec_gated from '../assets/icon-gated-community.webp';
import spec_security from '../assets/icon-security.webp';
import spec_parks from '../assets/icon-parks.webp';
import spec_roads from '../assets/icon-blacktop-roads.webp';
import security from '../assets/Secure_Environment.png';
import parks from '../assets/parks_&_greens.png';
import road from '../assets/Narrow_road.png';
import night from '../assets/Tesla.png';


const amenities = [
  { icon: 'Landmark', title: 'Grand Entrance', text: 'Impressive entrance with 24/7 security' },
  { icon: 'Lightbulb', title: 'LED Street Lights', text: 'Energy-efficient lights for a brighter tomorrow' },
  { icon: 'ShieldCheck', title: '24/7 Security', text: 'Round-the-clock surveillance' },
  { icon: 'TreePine', title: 'Parks & Green Spaces', text: 'Lush landscapes for a healthy lifestyle' },
  { icon: 'Route', title: 'Wide Blacktop Roads', text: 'Smooth connectivity within the community' },
];

const location = [
  { icon: 'Landmark', title: 'Connectivity', items: [['Mambakkam', '6 mins'], ['Medavakkam', '12 mins'], ['GST Road', '13 mins'], ['ECR', '22 mins'], ['Airport', '35 mins']] },
  { icon: 'Building2', title: 'Schools', items: [['Tatva Primary School', '3 mins'], ['Christwood School', '5 mins'], ['Vellammal Vidyalayam', '6 mins'], ['Maharishi Vidya Mandir', '6 mins'], ['Vels School of Maritime Studies', '13 mins']] },
  { icon: 'MapPin', title: 'Colleges', items: [['Prince Shri Venkateshwara Padmavathy Engg College', '4 mins'], ['VIT University', '10 mins'], ['Agni College of Technology', '13 mins'], ['Vels Institute of Science & Technology', '13 mins']] },
];

const specifications = [
  { icon: 'Landmark', label: 'Grand Entrance', detail: 'An impressive entrance welcomes residents and visitors to Tesla City.', image: spec_entrance },
  { icon: 'Lightbulb', label: 'LED Street Lights', detail: 'Energy-efficient LED street lights illuminate the community roads.', image: spec_lights },
  { icon: 'ShieldCheck', label: '24/7 Security', detail: 'Round-the-clock security supports peace of mind for residents.', image: security },
  { icon: 'TreePine', label: 'Parks & Green Spaces', detail: 'Landscaped parks and green spaces provide room to relax outdoors.', image: parks },
  { icon: 'Route', label: 'Wide Blacktop Roads', detail: 'Wide blacktop roads provide smooth access throughout the development.', image: road },
];

export default function TeslaCity() {
  return (
    <>
      <section className="tesla-hero">
        <div className="hero-carousel tesla-photo">
          <div className="hero-carousel-images">
            <img className="hero-carousel-image is-active" src={night} alt="The entrance to Tesla City" />
          </div>
        </div>
        <div className="container tesla-copy">
          <span className="intro">Introducing</span><br />
          <WaveText as="h1">TESLA CITY</WaveText>
          <p className="ponmar">PONMAR</p>
          <p className="tag">Premium Villa Plots for a Lifestyle<br />That Defines You.</p>
        </div>
      </section>

      <section className="section tesla-about">
        <div className="container center-copy">
          <Eyebrow center both>About Tesla City</Eyebrow>
          <WaveText as="h2" className="h-lg">A New Benchmark in <em>Premium Living</em></WaveText>
          <p>Tesla City is a premium plotted development in Ponmar, designed for those who seek more than just land – a lifestyle of comfort, convenience and class. With world-class planning, wide blacktop roads and essential amenities, it’s the perfect place to build your dream home and a secure future.</p>
        </div>
        <div className="container" id="tesla-slider">
          <WindowSlider
            images={[tesla_1_m, tesla_2_m, tesla_3_m]}
            hoverImages={[tesla_1_n, tesla_2_n, tesla_3_n]}
            alts={['Tesla City villas', 'Tesla City duplex villas', 'Row of Tesla City villas']}
          />
        </div>
      </section>

      <section className="section container">
        <div className="specs tesla-specs">
          <Eyebrow center both>Project Specifications</Eyebrow>
          <SpecificationShowcase specs={specifications} />
        </div>
      </section>

      <section className="section location">
        <div className="container">
          <Eyebrow center both>Location Advantages</Eyebrow>
          <LocationAccordion
            sections={location}
            idPrefix="tesla-city"
            className="location-accordion--horizontal"
            collapsible={false}
          />
        </div>
      </section>

      <section className="container">
        <MapEmbed query="Ponmar, Chennai" fallback="/images/map-tesla.jpg" title="Tesla City location" height={340} />
      </section>

      <section className="container cta-wrap">
        <div className="cta-strip">
          <span className="bubble solid sq"><Icon name="Phone" size={34} /></span>
          <div className="cs-text">
            <h3>Interested in Tesla City?</h3>
            <p>Book a site visit today and take the first step towards your dream address.</p>
          </div>
          <Btn to="/contact?subject=Tesla%20City%20site%20visit">Book a Site Visit</Btn>
        </div>
      </section>
    </>
  );
}
