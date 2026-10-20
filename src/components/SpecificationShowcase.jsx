import { useState } from 'react';
import Icon from './Icon.jsx';

export default function SpecificationShowcase({ specs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSpec = specs[activeIndex];

  return (
    <div className="spec-showcase">
      <div className="spec-nav" role="tablist" aria-label="Project specifications">
        {specs.map((spec, index) => (
          <button
            className={`spec-tab${index === activeIndex ? ' is-active' : ''}`}
            id={`spec-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls="spec-panel"
            key={spec.label}
            onClick={() => setActiveIndex(index)}
          >
            <Icon name={spec.icon} size={20} strokeWidth={1.6} />
            <span>{spec.label}</span>
          </button>
        ))}
      </div>
      <div
        className="spec-panel"
        id="spec-panel"
        role="tabpanel"
        aria-labelledby={`spec-tab-${activeIndex}`}
        key={activeSpec.label}
      >
        <div className="spec-panel-copy">
          <span className="spec-panel-kicker">Project specification</span>
          <h3>{activeSpec.label}</h3>
          <p>{activeSpec.detail}</p>
        </div>
        <img src={activeSpec.image} alt={activeSpec.imageAlt || activeSpec.label} loading="lazy" />
      </div>
    </div>
  );
}
