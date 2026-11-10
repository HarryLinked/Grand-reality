import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { navItems } from '../data.js';
import Grand_Reality_Logo from '../assets/Grand_Reality_Cyan_Logo_Bgr.png';
import ContactButton from './ContactButton.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const activeIndicatorRef = useRef(null);

  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  useEffect(() => {
    const updateHeaderBackground = () => {
      const hero = document.querySelector('main > section:first-child, main > div > section:first-child');
      const header = document.querySelector('.site-header');
      if (!header) return;

      setIsScrolled(hero ? hero.getBoundingClientRect().bottom <= header.offsetHeight : window.scrollY > 0);
    };

    updateHeaderBackground();
    window.addEventListener('scroll', updateHeaderBackground, { passive: true });
    window.addEventListener('resize', updateHeaderBackground);

    return () => {
      window.removeEventListener('scroll', updateHeaderBackground);
      window.removeEventListener('resize', updateHeaderBackground);
    };
  }, [pathname]);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const indicator = activeIndicatorRef.current;
    if (!nav || !indicator) return undefined;

    const updateIndicator = () => {
      const activeLink = nav.querySelector('.nav-link.active');
      if (!activeLink) {
        indicator.style.opacity = '0';
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      indicator.style.width = `${linkRect.width}px`;
      indicator.style.height = `${linkRect.height}px`;
      indicator.style.transform = `translate3d(${linkRect.left - navRect.left}px, ${linkRect.top - navRect.top}px, 0)`;
      indicator.style.opacity = '1';
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [pathname, sub]);

  const isActive = (item) =>
    item.children ? item.children.some((c) => pathname === c.to) : item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Grand Reality home">
          <img src={Grand_Reality_Logo} alt="Grand Reality" width="88" height="80" />
        </Link>

        <nav ref={navRef} className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <span ref={activeIndicatorRef} className="nav-active-indicator" aria-hidden="true" />
          <ul>
            {navItems.map((item) => (
              <li key={item.label} className={`nav-item ${item.children ? 'has-sub' : ''} ${sub === item.label ? 'sub-open' : ''}`}>
                {item.children ? (
                  <>
                    <button z-index={1}
                      type="button"
                      className={`nav-link ${isActive(item) ? 'active' : ''}`}
                      aria-expanded={sub === item.label}
                      onClick={() => setSub(sub === item.label ? null : item.label)}
                    >
                      <span className="nav-link-label">{item.label}</span>
                      <Icon name="ChevronDown" size={15} strokeWidth={2.4} />
                    </button>
                    <ul className="sub-menu">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            onClick={(event) => {
                              setSub(null);
                              setOpen(false);
                              event.currentTarget.blur();
                            }}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink to={item.to} end={item.to === '/'} className={`nav-link ${isActive(item) ? 'active' : ''}`}>
                    <span className="nav-link-label">{item.label}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <ContactButton className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Enquire Now
          </ContactButton>
        </nav>

        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>
    </header>
  );
}
