import type { Lang, UnitSystem } from './dict';

export type LangGroup< T = unknown > = { [ L in Lang ]?: T };

export type Symbol = {
  readonly id: string;
  canonical?: boolean;
  deprecated?: boolean;
  context?: {
    system?: UnitSystem[];
    lang?: Lang;
  };
  format: {
    plain: string;
    unicode?: string;
    latex?: string;
  };
};

export type Name = string | readonly [
  singular: string, plural?: string
];

export type Meta = {
  symbol: Symbol[];
  name?: LangGroup< Name >;
  description?: LangGroup< string >;
};

export type Deprecated< R = unknown > = {
  replacement?: R;
  since?: string;
  reason?: LangGroup< string >;
};
