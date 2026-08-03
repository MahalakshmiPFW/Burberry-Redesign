import { Link } from 'react-router-dom';
import type { TrenchStyle } from '../types/trench';
import { ImagePlaceholder } from './ImagePlaceholder';

interface StyleCardProps {
  style: TrenchStyle;
}

export function StyleCard({ style }: StyleCardProps) {
  return (
    <Link to={`/trench-coats/${style.slug}`} className="style-card">
      <ImagePlaceholder label={style.name} aspectRatio="4/5" />
      <div className="style-card-body">
        <span className="eyebrow style-card-kicker">{style.kicker}</span>
        <h3>{style.name}</h3>
        <p className="style-card-copy">{style.cardDescription}</p>
        <div className="style-card-footer">
          <span>${style.price.toLocaleString()}</span>
          <span className="style-card-link">View →</span>
        </div>
      </div>
    </Link>
  );
}
