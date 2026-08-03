import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getTrenchStyle } from '../data/trenchStyles';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import type { SizeOption } from '../types/trench';

const SIZES: SizeOption[] = ['XS', 'S', 'M', 'L', 'XL'];

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const style = slug ? getTrenchStyle(slug) : undefined;

  const [selectedColor, setSelectedColor] = useState(style?.colors[0]?.name);
  const [selectedSize, setSelectedSize] = useState<SizeOption>('S');

  if (!style) {
    return <Navigate to="/trench-coats" replace />;
  }

  return (
    <div className="screen" data-screen={`Product page — ${style.name}`}>
      <div className="crumb">
        <Link to="/trench-coats">‹ All six trench styles</Link>
      </div>

      <div className="pdp-grid">
        <div className="pdp-gallery">
          <div className="pdp-thumbs">
            <ImagePlaceholder label="Detail" aspectRatio="1/1" className="pdp-thumb" />
            <ImagePlaceholder label="Back" aspectRatio="1/1" className="pdp-thumb" />
            <ImagePlaceholder label="Worn" aspectRatio="1/1" className="pdp-thumb" />
          </div>
          <ImagePlaceholder
            label={`The ${style.name} — front view`}
            aspectRatio="4/5"
            className="pdp-main"
          />
        </div>

        <div className="pdp-details">
          <div>
            <span className="eyebrow">Heritage trench</span>
            <div className="price-row">
              <h1>The {style.name}</h1>
              <span className="price">${style.price.toLocaleString()}</span>
            </div>
            <p className="pdp-description">{style.pdpDescription}</p>
          </div>

          <div>
            <span className="field-label">Colour — {selectedColor}</span>
            <div className="swatches">
              {style.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  className={`swatch${selectedColor === color.name ? ' swatch--selected' : ''}`}
                  style={{ background: color.hex }}
                  aria-label={color.name}
                  aria-pressed={selectedColor === color.name}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="field-label">Size</span>
            <div className="size-pills">
              {SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-pill${selectedSize === size ? ' active' : ''}`}
                  aria-pressed={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="btn-camel btn-camel--block">
            Add to Bag
          </button>

          <div className="heritage-note">
            <span className="eyebrow">Heritage note</span>
            <p>{style.heritageNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
