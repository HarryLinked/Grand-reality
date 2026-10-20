import { useState } from 'react';
import Icon from './Icon.jsx';

export default function LocationAccordion({
  sections,
  idPrefix,
  className = '',
  allowMultiple = false,
  collapsible = true,
}) {
  const [openSections, setOpenSections] = useState([]);

  return (
    <div className={`faq-list location-accordion ${className}`.trim()}>
      {sections.map((section, index) => {
        const isOpen = !collapsible || openSections.includes(index);
        const answerId = `${idPrefix}-location-${index}`;
        const toggleSection = () => {
          if (allowMultiple) {
            setOpenSections((current) => (
              isOpen
                ? current.filter((openIndex) => openIndex !== index)
                : [...current, index]
            ));
            return;
          }

          setOpenSections(isOpen ? [] : [index]);
        };

        return (
          <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={section.title}>
            <h3>
              {collapsible ? (
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={toggleSection}
                >
                  <span className="location-accordion-label">
                    {section.icon && <Icon name={section.icon} size={19} />}
                    {section.title}
                  </span>
                  <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
              ) : (
                <div className="faq-question">
                  <span className="location-accordion-label">
                    {section.icon && <Icon name={section.icon} size={19} />}
                    {section.title}
                  </span>
                </div>
              )}
            </h3>
            <div
              className={`faq-answer${isOpen ? ' is-open' : ''}`}
              id={answerId}
              aria-hidden={!isOpen}
            >
              <div className="faq-answer-inner">
                <ul className="near location-accordion-items">
                  {section.items.map(([name, time]) => (
                    <li key={name}><span>{name}</span><b>{time}</b></li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
