import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

// Small blue label with a rule, e.g. "— ABOUT US —"
export function Eyebrow({ children, center = false, both = false, light = false }) {
  return (
    <span className={`eyebrow ${center ? 'center' : ''} ${both ? 'both' : ''} ${light ? 'light' : ''}`}>
      {children}
    </span>
  );
}

export function Btn({ to, href, children, variant = 'primary', icon = 'ArrowRight', onClick, type, ...rest }) {
  const cls = `btn btn-${variant}`;
  const inner = (<>{children}{icon && <Icon name={icon} size={17} strokeWidth={2} />}</>);
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type={type || 'button'} className={cls} onClick={onClick} {...rest}>{inner}</button>;
}

export function IconBubble({ name, size = 22, className = '' }) {
  return <span className={`bubble ${className}`}><Icon name={name} size={size} /></span>;
}

export function WaveText({
  children,
  className = '',
  as: Component = 'span',
  baseDelay = 0.08,
  speed = 0.022,
  ...rest
}) {
  let charCount = 0;

  function processNode(node) {
    if (typeof node === 'string') {
      const words = node.split(/(\s+)/);
      return words.map((word, wIdx) => {
        if (/^\s+$/.test(word)) {
          return ' ';
        }
        return (
          <span key={wIdx} className="wave-word">
            {Array.from(word).map((char, cIdx) => {
              const idx = charCount++;
              const charDelay = `${(baseDelay + idx * speed).toFixed(3)}s`;
              return (
                <span
                  key={cIdx}
                  className="wave-char"
                  style={{ '--char-delay': charDelay }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      });
    }

    if (React.isValidElement(node)) {
      if (node.type === 'br') {
        return node;
      }
      return React.cloneElement(node, {
        children: React.Children.map(node.props.children, processNode),
      });
    }

    return node;
  }

  const processed = React.Children.map(children, processNode);

  if (Component === React.Fragment) {
    return <>{processed}</>;
  }

  return (
    <Component className={`wave-text ${className}`.trim()} {...rest}>
      {processed}
    </Component>
  );
}
