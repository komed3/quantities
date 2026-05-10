import type { Deprecated, Meta } from '../common';
import type { UnitSIType, UnitStatus, UnitSystem } from '../dict';
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
  prefix?: PrefixRef;
} >;

export type UnitConv< D extends Dimension = Dimension > =
  | { base: UnitRef< D >, factor: number, uncertainty?: number }
  | { base: UnitRef< D >, scale: number, offset: number, uncertainty?: number }
  | 1;

export type UnitDef<
  D extends Dimension = Dimension,
  R extends UnitRef< D > = UnitRef< D >
> = {
  readonly id: R;
  readonly dim: D;
  structure: UnitStruct;
  conversion: UnitConv< D >;
  prefixable: boolean;
  aliases?: string[];
  context: {
    system: UnitSystem[];
    status?: UnitStatus;
    dimensionless?: boolean;
    constant?: boolean;
    si?: UnitSIType;
  };
  deprecated?: Deprecated< UnitRef< D > >;
  meta: Meta;
};
