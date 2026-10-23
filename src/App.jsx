import { Routes, Route, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import TeslaCity from './pages/TeslaCity.jsx';
import CompletedProject from './pages/CompletedProject.jsx';
import ChannelPartners from './pages/ChannelPartners.jsx';
import Contact from './pages/Contact.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';
import ContactModal from './components/ContactModal.jsx';
import ContactButton from './components/ContactButton.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) return void el.scrollIntoView({ behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [contactModalSubject, setContactModalSubject] = useState(null);
  const [showContactButton, setShowContactButton] = useState(false);
  const closeContactModal = useCallback(() => setContactModalSubject(null), []);
  const { pathname } = useLocation();

  useEffect(() => {
    const openContactModal = (event) => setContactModalSubject(event.detail?.subject || '');
    const openModalForContactCta = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href]');
      if (
        !link
        || link.hasAttribute('data-project-link')
        || !link.classList.contains('btn')
      ) return;

      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin || url.pathname.replace(/\/+$/, '') !== '/contact') return;

      event.preventDefault();
      setContactModalSubject(url.searchParams.get('subject') || '');
    };

    window.addEventListener('open-contact-modal', openContactModal);
    document.addEventListener('click', openModalForContactCta, true);
    return () => {
      window.removeEventListener('open-contact-modal', openContactModal);
      document.removeEventListener('click', openModalForContactCta, true);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main > section, main > div > section');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -24px 0px' });

    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const hero = document.querySelector('main > section:first-child, main > div > section:first-child');
    if (!hero) {
      setShowContactButton(true);
      return undefined;
    }

    const updateVisibility = () => {
      setShowContactButton(hero.getBoundingClientRect().bottom <= 0);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/tesla-city" element={<TeslaCity />} />
          <Route path="/projects/:slug" element={<CompletedProject />} />
          <Route path="/channel-partners" element={<ChannelPartners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ContactButton
        className={`contact-fab${showContactButton ? '' : ' is-hidden'}`}
        icon="MessageCircle"
        iconSize={20}
        aria-hidden={!showContactButton}
        tabIndex={showContactButton ? 0 : -1}
      />
      {contactModalSubject !== null && (
        <ContactModal subject={contactModalSubject} onClose={closeContactModal} />
      )}
    </>
  );
}
