import type { Registry } from '../types/def/registry';

import constant from './const';
import prefix from './prefix';
import quantity from './quantity';
import unit from './unit';

export default ( {
  // SI prefixes
  prefix,
  // physical quantities
  quantity,
  // units
  unit,
  // constants
  constant
} ) as const satisfies Registry;
