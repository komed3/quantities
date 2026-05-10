import type { PrefixRegistry } from '../../types/def/registry';

import { deca } from './pos/deca';
import { exa } from './pos/exa';
import { giga } from './pos/giga';
import { hecto } from './pos/hecto';
import { kilo } from './pos/kilo';
import { mega } from './pos/mega';
import { peta } from './pos/peta';
import { quetta } from './pos/quetta';
import { ronna } from './pos/ronna';
import { tera } from './pos/tera';
import { yotta } from './pos/yotta';
import { zetta } from './pos/zetta';

import { atto } from './neg/atto';
import { centi } from './neg/centi';
import { deci } from './neg/deci';
import { femto } from './neg/femto';
import { micro } from './neg/micro';
import { milli } from './neg/milli';
import { nano } from './neg/nano';
import { pico } from './neg/pico';
import { quekto } from './neg/quekto';
import { ronto } from './neg/ronto';
import { yocto } from './neg/yocto';
import { zepto } from './neg/zepto';

export {
  atto, centi, deca, deci, exa, femto, giga, hecto, kilo, mega, micro, milli,
  nano, peta, pico, quekto, quetta, ronna, ronto, tera, yocto, yotta, zepto, zetta
};

export default ( [
  quetta, ronna, yotta, zetta, exa, peta, tera, giga, mega, kilo, hecto, deca,
  deci, centi, milli, micro, nano, pico, femto, atto, zepto, yocto, ronto, quekto
] ) as const satisfies PrefixRegistry;
