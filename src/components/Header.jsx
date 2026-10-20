import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { navItems } from '../data.js';
import Grand_Reality_Logo from '../assets/Grand_Reality_Cyan_Logo_Bgr.png';
import ContactButton from './ContactButton.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const isActive = (item) =>
    item.children ? item.children.some((c) => pathname === c.to) : item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Grand Reality home">
          <img src={Grand_Reality_Logo} alt="Grand Reality" width="88" height="80" />
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
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
                      {item.label} <Icon name="ChevronDown" size={15} strokeWidth={2.4} />
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
                    {item.label}
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
