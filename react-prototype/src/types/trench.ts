export interface ColorOption {
  name: string;
  hex: string;
}

export interface TrenchStyle {
  slug: string;
  name: string;
  kicker: string;
  cardDescription: string;
  pdpDescription: string;
  heritageNote: string;
  price: number;
  colors: ColorOption[];
}

export type SizeOption = 'XS' | 'S' | 'M' | 'L' | 'XL';
