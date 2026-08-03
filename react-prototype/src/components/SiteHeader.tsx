import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AccountIcon, BagIcon, CloseIcon, MenuIcon, SearchIcon } from './Icons';

interface NavLinkItem {
  label: string;
  to?: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Women' },
  { label: 'Men' },
  { label: 'Trench Coats', to: '/trench-coats' },
  { label: 'Gifts' },
  { label: 'Bags' },
  { label: 'Beauty & Fragrances' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="nav-row">
      <Link to="/" className="logo">
        BURBERRY
      </Link>
      <button
        type="button"
        className="nav-burger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        {NAV_LINKS.map((link) =>
          link.to ? (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `nav-link${isActive ? ' current' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ) : (
            <a key={link.label} href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
              {link.label}
            </a>
          ),
        )}
      </nav>

      <div className="nav-icons">
        <button type="button" aria-label="Search" className="icon-button">
          <SearchIcon />
        </button>
        <button type="button" aria-label="Account" className="icon-button">
          <AccountIcon />
        </button>
        <button type="button" aria-label="Bag" className="icon-button">
          <BagIcon />
        </button>
      </div>
    </header>
  );
}
