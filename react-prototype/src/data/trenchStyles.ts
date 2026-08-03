import type { ColorOption, TrenchStyle } from '../types/trench';

const STANDARD_COLORS: ColorOption[] = [
  { name: 'Honey', hex: '#c69a56' },
  { name: 'Black', hex: '#171310' },
  { name: 'Stone', hex: '#d8cdbc' },
];

export const trenchStyles: TrenchStyle[] = [
  {
    slug: 'mayfair',
    name: 'Mayfair',
    kicker: '1920s original',
    cardDescription:
      'The double-breasted original — knee-length, wide lapel, check lining.',
    pdpDescription:
      "Cut from the original 1924 double-breasted pattern in signature cotton gabardine — wide lapel, knee length, the coat that started it all.",
    heritageNote:
      'First tailored for army officers in 1920, the Mayfair keeps the trench’s original double-breasted silhouette unchanged.',
    price: 2490,
    colors: STANDARD_COLORS,
  },
  {
    slug: 'kensington',
    name: 'Kensington',
    kicker: 'Everyday classic',
    cardDescription:
      'Slimmer through the body, mid-thigh length — the coat most people picture first.',
    pdpDescription:
      'Cut from the original 1924 pattern in signature cotton gabardine — slimmer through the body, mid-thigh length, the everyday classic.',
    heritageNote:
      'First issued to army officers in 1914, refined into the Kensington silhouette worn today.',
    price: 2290,
    colors: STANDARD_COLORS,
  },
  {
    slug: 'waterloo',
    name: 'Waterloo',
    kicker: 'Relaxed drape',
    cardDescription:
      'Longer and fuller-cut, falling well below the knee for a looser silhouette.',
    pdpDescription:
      'Cut fuller through the body and longer in the leg, in signature cotton gabardine — a relaxed drape that falls well below the knee.',
    heritageNote:
      'Named for the station, not the battle — the Waterloo answers to a looser, more relaxed era of the trench.',
    price: 2590,
    colors: STANDARD_COLORS,
  },
  {
    slug: 'chelsea',
    name: 'Chelsea',
    kicker: 'Tailored city cut',
    cardDescription:
      'Fitted at the waist with a shorter hem — the most structured of the six.',
    pdpDescription:
      'Fitted at the waist and cut with a shorter hem, in signature cotton gabardine — the most structured silhouette in the collection.',
    heritageNote:
      'Sharpened for the city — the Chelsea trades length for a closer, more tailored line.',
    price: 2390,
    colors: STANDARD_COLORS,
  },
  {
    slug: 'fitzrovia',
    name: 'Fitzrovia',
    kicker: "'70s archive",
    cardDescription:
      "Oversized fit with dropped shoulders, drawn from the '70s archive.",
    pdpDescription:
      "Cut oversized with dropped shoulders, in signature cotton gabardine — drawn straight from the '70s archive.",
    heritageNote:
      "Pulled from the archive, the Fitzrovia revives the looser, dropped-shoulder cut Burberry ran through the 1970s.",
    price: 2650,
    colors: STANDARD_COLORS,
  },
  {
    slug: 'camden',
    name: 'Camden',
    kicker: 'Cropped, modern',
    cardDescription:
      'Single-breasted and cropped above the knee, cut for movement.',
    pdpDescription:
      'Single-breasted and cropped above the knee, in signature cotton gabardine — cut for movement, the most modern silhouette here.',
    heritageNote:
      'The newest silhouette in the collection — the Camden reworks the trench’s proportions for a shorter, more mobile cut.',
    price: 2190,
    colors: STANDARD_COLORS,
  },
];

export function getTrenchStyle(slug: string): TrenchStyle | undefined {
  return trenchStyles.find((style) => style.slug === slug);
}
