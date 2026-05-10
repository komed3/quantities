import type { PrefixRef } from './prefix';
import type { QuantityRef } from './quantity';
import type { UnitRef } from './unit';

export type QuantityRegistry = readonly QuantityRef[];
export type UnitRegistry = readonly UnitRef[];
export type PrefixRegistry = readonly PrefixRef[];

export type Registry = {
  quantity: QuantityRegistry;
  unit: UnitRegistry;
  prefix: PrefixRegistry;
};
