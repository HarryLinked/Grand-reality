import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { Eyebrow, WaveText } from '../components/Shared.jsx';
import { projects } from '../data.js';

const perks = [
  { icon: 'ShieldCheck', title: 'DTCP Approved', text: 'Clear & Legal Titles' },
  { icon: 'BadgeCheck', title: 'Quality Construction', text: 'Built to Perfection' },
  { icon: 'MapPin', title: 'Prime Locations', text: 'Connected to Everything' },
  { icon: 'HeartHandshake', title: 'Customer First', text: 'Your Trust, Our Priority' },
];

const label = { ongoing: 'Ongoing', completed: 'Completed', upcoming: 'Upcoming' };

function Card({ p }) {
  if (!p) return null;
  const upcoming = p.status === 'upcoming';
  return (
    <article className={`pcard ${p.status || ''}`}>
      <div className="pcard-top">
        {upcoming && !p.cardImage && !p.image ? (
          <div className="coming">
            <span className="coming-ico"><Icon name="CalendarDays" size={40} /></span>
            <h4>COMING SOON</h4>
            <p>Exciting new project<br />launching soon!</p>
          </div>
        ) : (
          <img src={p.cardImage || p.image} alt={p.name} loading="lazy" />
        )}
        <span className="pill pill-status">
          <Icon name={p.status === 'completed' ? 'CircleCheck' : 'Check'} size={13} strokeWidth={2.4} />{label[p.status] || p.status}
        </span>
        <span className="pill pill-dtcp"><Icon name="BadgeCheck" size={15} />DTCP APPROVED</span>
      </div>

      <div className="pcard-body">
        <span className="pcard-logo"><Icon name="Building2" size={30} strokeWidth={1.5} /></span>
        <div className="pcard-title">
          <h3>{p.name}</h3>
          {p.place ? <p><Icon name="MapPin" size={14} />{p.place}</p> : <p className="muted">Location Coming Soon</p>}
        </div>
        <div className="pcard-meta">
          <div className="pm-left">
            {p.status === 'ongoing' && (<><small>STARTS FROM</small><strong>{p.price}</strong></>)}
            {p.status === 'completed' && (<span className="done"><Icon name="CircleCheck" size={22} />Completed</span>)}
            {upcoming && (<><small className="dark">Launching</small><strong>Soon</strong></>)}
          </div>
          <ul>
            <li><Icon name={p.status === 'ongoing' ? 'Home' : 'Building2'} size={16} />{p.type || 'Residential'}</li>
            <li><Icon name={p.status === 'ongoing' ? 'Landmark' : upcoming ? 'Car' : 'Gem'} size={16} />{p.tag || 'Prime Living'}</li>
          </ul>
        </div>
      </div>

      <Link to={p.link || '/contact'} className="pcard-cta" data-project-link={upcoming ? undefined : ''}>
        {upcoming ? 'STAY UPDATED' : 'VIEW PROJECT'} <Icon name="ArrowRight" size={18} />
      </Link>
    </article>
  );
}

export default function Projects() {
  const list = projects.filter(Boolean);
  return (
    <section className="projects-page">
      <div className="container">
        <header className="pp-head">
          <Icon name="Building2" size={30} className="pp-ico" />
          <span className="eyebrow center both">Our Projects</span>
          <WaveText as="h1" className="h-xl">Spaces Designed For <em>Better Living</em></WaveText>
          <span className="diamond" aria-hidden="true" />
          <p>Discover our premium residential projects<br />crafted with excellence and attention to detail.</p>
        </header>

        <div className="pcards">
          {list.map((p) => <Card key={p.id} p={p} />)}
        </div>

        <div className="perks">
          {perks.map((p) => (
            <div className="perk" key={p.title}>
              <span className="bubble lg"><Icon name={p.icon} size={28} /></span>
              <div><strong>{p.title}</strong><span>{p.text}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
