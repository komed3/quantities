export type Dimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
  I: number, // electric current
  θ: number, // temperature
  N: number, // amount of substance
  J: number  // luminous intensity
];

// Dimensionless
export const ScalarDim = [ 0, 0, 0, 0, 0, 0, 0 ] as const satisfies Dimension;
export type ScalarDim = typeof ScalarDim;

// Base Dimensions
export const TimeDim = [ 1, 0, 0, 0, 0, 0, 0 ] as const satisfies Dimension;
export type TimeDim = typeof TimeDim;

export const LengthDim = [ 0, 1, 0, 0, 0, 0, 0 ] as const satisfies Dimension;
export type LengthDim = typeof LengthDim;

export const MassDim = [ 0, 0, 1, 0, 0, 0, 0 ] as const satisfies Dimension;
export type MassDim = typeof MassDim;

export const ElectricCurrentDim = [ 0, 0, 0, 1, 0, 0, 0 ] as const satisfies Dimension;
export type ElectricCurrentDim = typeof ElectricCurrentDim;

export const TemperatureDim = [ 0, 0, 0, 0, 1, 0, 0 ] as const satisfies Dimension;
export type TemperatureDim = typeof TemperatureDim;

export const AmountOfSubstanceDim = [ 0, 0, 0, 0, 0, 1, 0 ] as const satisfies Dimension;
export type AmountOfSubstanceDim = typeof AmountOfSubstanceDim;

export const LuminousIntensityDim = [ 0, 0, 0, 0, 0, 0, 1 ] as const satisfies Dimension;
export type LuminousIntensityDim = typeof LuminousIntensityDim;

// Derived Dimensions
export const FrequencyDim = [ -1, 0, 0, 0, 0, 0, 0 ] as const satisfies Dimension;
export type FrequencyDim = typeof FrequencyDim;

export const AngleDim = ScalarDim;
export type AngleDim = typeof AngleDim;

export const SolidAngleDim = ScalarDim;
export type SolidAngleDim = typeof SolidAngleDim;

export const ForceDim = [ -2, 1, 1, 0, 0, 0, 0 ] as const satisfies Dimension;
export type ForceDim = typeof ForceDim;

export const PressureDim = [ -2, -1, 1, 0, 0, 0, 0 ] as const satisfies Dimension;
export type PressureDim = typeof PressureDim;

export const StressDim = PressureDim;
export type StressDim = typeof StressDim;
