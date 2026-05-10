export enum Lang {
  EN = 'en',
  DE = 'de'
}

export enum UnitSystem {
  COMMON = 'common',
  SI = 'si',
  CGS = 'cgs',
  GAUSSIAN = 'cgs_gaussian',
  EMU = 'cgs_emu',
  ESU = 'cgs_esu',
  NATURAL = 'natural',
  PLANCK = 'natural_planck',
  ATOMIC = 'natural_atomic',
  IMPERIAL = 'imperial',
  USC = 'usc',
  ASTRO = 'astronomical'
}

export enum Branch {
  COMMON = 'common',
  MECHANICS = 'mechanics',
  ACOUSTICS = 'acoustics',
  ELECTROMAGNETISM = 'electromagnetism',
  OPTICS = 'optics',
  THERMODYNAMICS = 'thermodynamics'
}

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
