export enum Lang {
  EN = 'en',
  DE = 'de'
}

export enum Format {
  PLAIN = 'plain',
  UNICODE = 'unicode',
  LATEX = 'latex'
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
  STONEY = 'natural_stoney',
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

export enum UnitType {
  NAMED = 'named',
  COMPOUND = 'compound'
}

export enum SIType {
  BASE = 'base',
  DERIVED = 'derived',
  ACCEPTED = 'accepted'
}

export enum UnitStatus {
  ACTIVE = 'active',
  HISTORICAL = 'historical',
  OBSOLETE = 'obsolete'
}
