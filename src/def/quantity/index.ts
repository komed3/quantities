import type { QuantityRegistry } from '../../types/def/registry';

import { amountOfSubstance } from './base/amountOfSubstance';
import { electricCurrent } from './base/electricCurrent';
import { length } from './base/length';
import { luminousIntensity } from './base/luminousIntensity';
import { mass } from './base/mass';
import { temperature } from './base/temperature';
import { time } from './base/time';

export default ( [
  // SI base quantities
  time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity
] ) as const satisfies QuantityRegistry;
