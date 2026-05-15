import type { UnitRegistry } from '../../types/def/registry';

import { ampere } from './si/base/ampere';
import { candela } from './si/base/candela';
import { gram } from './si/base/gram';
import { kelvin } from './si/base/kelvin';
import { meter } from './si/base/meter';
import { mole } from './si/base/mole';
import { second } from './si/base/second';

export default ( [
  // SI base units
  second, meter, gram, ampere, kelvin, mole, candela
] ) as const satisfies UnitRegistry;
