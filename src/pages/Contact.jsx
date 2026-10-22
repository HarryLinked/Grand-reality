import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import ContactForm from '../components/ContactForm.jsx';
import MapEmbed from '../components/Map.jsx';
import { Eyebrow, WaveText } from '../components/Shared.jsx';
import { company } from '../data.js';
import homeaboutfinal from '../assets/home-about-image-final.webp';

export default function Contact() {
  const [params] = useSearchParams();

  const info = [
    { icon: 'MapPin', title: 'Address', body: <>{company.address.map((l) => <span key={l}>{l}</span>)}</> },
    { icon: 'Phone', title: 'Call Us', body: <a href={company.phoneHref}>{company.phone}</a> },
    { icon: 'Mail', title: 'Email Us', body: <a href={`mailto:${company.email}`}>{company.email}</a> },
    { icon: 'Clock', title: 'Office Hours', body: <>{company.hours.map((l) => <span key={l}>{l}</span>)}</> },
  ];

  return (
    <>
      <section className="contact-hero">
        <div className="hero-carousel contact-hero-carousel">
          <div className="hero-carousel-images">
            <img className="hero-carousel-image is-active" src={homeaboutfinal} alt="A home by Grand Reality" />
          </div>
        </div>
        <div className="container ch-copy">
          <span className="eyebrow">Get In Touch</span>
          <WaveText as="h1">We’d Love to Hear From <em>You</em></WaveText>
          <p>Our team is ready to assist you with any queries.<br />Let’s build something extraordinary together.</p>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-grid">
          <div className="cm-left">
            <Eyebrow>Our Location</Eyebrow>
            <WaveText as="h2" className="h-md">Find Us Here</WaveText>
            <p>Visit our office or connect with us through any of the channels.</p>
            <MapEmbed query={company.mapQuery} fallback="/images/map-contact.jpg" title="Grand Reality office" height={300}>
              <div className="map-pop">
                <strong>Grand Reality</strong>
                <span>{company.address.join(' ')}</span>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.mapQuery)}`} target="_blank" rel="noreferrer">
                  <Icon name="Plus" size={13} strokeWidth={2.4} />Get Directions
                </a>
              </div>
            </MapEmbed>
          </div>

          <div className="cm-right">
            <Eyebrow>Send Us A Message</Eyebrow>
            <ContactForm subject={params.get('subject') || ''} />

          </div>

          <div className="contact-info">
            <Eyebrow>Contact Information</Eyebrow>
            <div className="info-cards">
              {info.map((c) => (
                <div className="info-card" key={c.title}>
                  <span className="bubble"><Icon name={c.icon} size={22} /></span>
                  <h3>{c.title}</h3>
                  <div className="ic-body">{c.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
