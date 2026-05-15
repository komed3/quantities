import type { ConstRef } from './constant';
import type { PrefixRef } from './prefix';
import type { QuantityRef } from './quantity';
import type { UnitRef } from './unit';

export type PrefixRegistry = readonly PrefixRef[];
export type QuantityRegistry = readonly QuantityRef[];
export type UnitRegistry = readonly UnitRef[];
export type ConstRegistry = readonly ConstRef[];

export type Registry = {
  prefix: PrefixRegistry;
  quantity: QuantityRegistry;
  unit: UnitRegistry;
  constant: ConstRegistry;
};
