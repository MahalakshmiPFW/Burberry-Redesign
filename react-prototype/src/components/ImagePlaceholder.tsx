import type { CSSProperties } from 'react';
import { ImagePlaceholderIcon } from './Icons';

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  style?: CSSProperties;
}

export function ImagePlaceholder({
  label,
  aspectRatio,
  className,
  style,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder${className ? ` ${className}` : ''}`}
      style={{ ...style, aspectRatio }}
    >
      <ImagePlaceholderIcon />
      <span>{label}</span>
    </div>
  );
}
