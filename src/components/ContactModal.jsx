import { useEffect } from 'react';
import Icon from './Icon.jsx';
import ContactForm from './ContactForm.jsx';

export default function ContactModal({ subject, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="contact-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button className="contact-modal-close" type="button" aria-label="Close contact form" onClick={onClose}>
          <Icon name="X" size={22} />
        </button>
        <span className="eyebrow">Get In Touch</span>
        <h2 className="h-md" id="contact-modal-title">Send Us A Message</h2>
        <ContactForm subject={subject} />
      </section>
    </div>
  );
}
