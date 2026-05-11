import type { Format, Lang, UnitSystem } from './dict';

export type LangGroup< T = unknown > =
  { [ L in Lang ]?: T };

export type FormatGroup< T = unknown > =
  { [ F in Format.PLAIN ]: T } &
  { [ F in Exclude< Format, Format.PLAIN > ]?: T };

export type Symbol = {
  readonly id: string;
  canonical?: boolean;
  deprecated?: boolean;
  context?: {
    system?: UnitSystem[];
    lang?: Lang;
  };
  format: FormatGroup< string >;
};

export type Formula = {
  format: FormatGroup< string >;
};

export type Name = string | readonly [
  singular: string, plural?: string
];

export type Meta = {
  symbol: Symbol[];
  formula?: Formula;
  name?: LangGroup< Name >;
  description?: LangGroup< string >;
};

export type Deprecated< R = unknown > = {
  replacement?: R;
  since?: string;
  reason?: LangGroup< string >;
};
