interface IconProps {
  size?: number;
  className?: string;
}

export function SearchIcon({ size = 17, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function AccountIcon({ size = 17, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  );
}

export function BagIcon({ size = 17, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      className={className}
      aria-hidden="true"
    >
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function MenuIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={(size * 14) / 20}
      viewBox="0 0 20 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth={1.4} />
    </svg>
  );
}

export function CloseIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      className={className}
      aria-hidden="true"
    >
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function ImagePlaceholderIcon({ size = 26, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 16.5l-5.5-5.5-4 4-3-3-6.5 6.5" />
    </svg>
  );
}

export function DeliveryIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="7" width="15" height="13" rx="1" />
      <path d="M13 11h6l2 3v3h-8z" />
      <circle cx="7.5" cy="20" r="1.5" />
      <circle cx="17.5" cy="20" r="1.5" />
    </svg>
  );
}

export function GiftIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M2 9h20M12 9v11M12 9c-1.5-4-6-4-6-1s4.5 1 6 1M12 9c1.5-4 6-4 6-1s-4.5 1-6 1" />
    </svg>
  );
}

export function StoreIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      className={className}
      aria-hidden="true"
    >
      <path d="M4 10 12 4l8 6" />
      <rect x="6" y="10" width="12" height="10" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}
