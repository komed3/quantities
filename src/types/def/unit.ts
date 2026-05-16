import type { Deprecated, Meta } from '../common';
import type { SIType, UnitStatus, UnitSystem, UnitType } from '../dict';
import type { Dimension } from '../dimension';
import type { PrefixRef } from './prefix';

export type UnitRef<
  D extends Dimension = Dimension,
  ID extends string = string
> = ID & {
  readonly __brand: 'unit';
  readonly __dim: D;
};

export type UnitStruct = Array< {
  unit: UnitRef;
  exp: number;
  prefix?: PrefixRef
} | {
  factor: number;
} >;

export type CompoundStruct = Array< {
  unit: UnitRef;
  exp: number;
} >;

export type UnitConv< D extends Dimension = Dimension > =
  | { base: UnitRef< D >, factor: number, uncertainty?: number }
  | { base: UnitRef< D >, scale: number, offset: number, uncertainty?: number }
  | 1;

export type UnitContext = {
  system: UnitSystem[];
  status?: UnitStatus;
  dimensionless?: boolean;
  constant?: boolean;
  si?: SIType;
};

export type UnitDef<
  D extends Dimension = Dimension,
  T extends UnitType = UnitType,
  R extends UnitRef< D > = UnitRef< D >
> = {
  readonly type: T;
  readonly id: R;
  readonly dim: D;
  aliases?: string[];
  context: UnitContext;
  deprecated?: Deprecated< UnitRef< D > >;
  meta: Meta;
} & ( T extends UnitType.NAMED ? {
  structure: UnitStruct;
  conversion: UnitConv< D >;
  prefixable: boolean;
} : T extends UnitType.COMPOUND ? {
  structure: CompoundStruct;
} : never );
