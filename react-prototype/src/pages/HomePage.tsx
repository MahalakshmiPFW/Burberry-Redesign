import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export function HomePage() {
  return (
    <div className="screen" data-screen="Homepage">
      <div className="page-intro">
        <span className="eyebrow">Concept redesign · v2 — high fidelity</span>
        <p className="page-intro-copy">
          A heritage-led homepage, a single unified comparison of all six
          trench silhouettes, and a clean product page for each — set in a
          cream, black and camel palette with the Haymarket check used once,
          as an accent.
        </p>
      </div>

      <div className="hero">
        <ImagePlaceholder label="Heritage photograph" className="hero-media" />
        <div className="hero-scrim" />
        <div className="hero-content">
          <span className="hero-kicker">Est. 1856</span>
          <h1 className="hero-title">
            Born in the trenches.
            <br />
            Worn for a century.
          </h1>
          <p className="hero-copy">
            Thomas Burberry's gabardine kept WWI officers dry — the coat, and
            the check sewn quietly inside it, haven't stopped since.
          </p>
          <Link to="/trench-coats" className="btn-camel">
            Explore The Trench →
          </Link>
        </div>
      </div>

      <div className="heritage-grid">
        <div className="heritage-cell">
          <span className="eyebrow">Heritage · 01</span>
          <h2>The Haymarket check</h2>
          <p>
            Registered in 1924, the check first lined the trench as a private
            signature — visible only to the wearer when the coat was opened.
          </p>
          <div className="plaid" />
          <a href="#" onClick={(e) => e.preventDefault()}>
            Our heritage →
          </a>
        </div>
        <div className="heritage-cell">
          <span className="eyebrow">Heritage · 02</span>
          <h2>Woven to outlast weather</h2>
          <p>
            Gabardine's tight, twill weave — patented in 1879 — sheds rain
            without rubber, and hasn't changed since.
          </p>
          <ImagePlaceholder label="Fabric detail" style={{ height: 150, marginTop: 6 }} />
          <a href="#" onClick={(e) => e.preventDefault()}>
            The construction →
          </a>
        </div>
      </div>

      <div className="cta-band">
        <span className="eyebrow cta-eyebrow">One trench, six silhouettes</span>
        <h2 className="cta-title">Compare every style, side by side</h2>
        <p className="cta-copy">
          Mayfair to Camden — one page, no hunting through menus.
        </p>
        <Link to="/trench-coats" className="btn-camel btn-camel--inverted">
          Shop Trench Coats
        </Link>
      </div>
    </div>
  );
}
