import type { Deprecated, Meta } from '../common';
import type { Branch } from '../dict';
import type { Dimension } from '../dimension';
import type { UnitRef } from './unit';

export type QuantityRef<
  D extends Dimension = Dimension,
  ID extends string = string
> = ID & {
  readonly __brand: 'quantity';
  readonly __dim: D;
};

export type QuantityDef<
  D extends Dimension = Dimension,
  R extends QuantityRef< D > = QuantityRef< D >
> = {
  readonly id: R;
  readonly dim: D;
  readonly units: UnitRef< D >[];
  baseUnit: UnitRef< D >;
  branch?: Branch;
  deprecated?: Deprecated< QuantityRef< D > >;
  meta: Meta;
};
