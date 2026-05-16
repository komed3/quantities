import type { QuantityRegistry } from '../../types/def/registry';

import { amountOfSubstance } from './base/amountOfSubstance';
import { electricCurrent } from './base/electricCurrent';
import { length } from './base/length';
import { luminousIntensity } from './base/luminousIntensity';
import { mass } from './base/mass';
import { temperature } from './base/temperature';
import { time } from './base/time';

import { angle } from './derived/angle';
import { force } from './derived/force';
import { frequency } from './derived/frequency';
import { pressure } from './derived/pressure';
import { solidAngle } from './derived/solidAngle';
import { stress } from './derived/stress';

export default ( [
  // SI base quantities
  amountOfSubstance, electricCurrent, length, luminousIntensity, mass,
  temperature, time,

  // derived quantities
  angle, force, frequency, pressure, solidAngle, stress
] ) as const satisfies QuantityRegistry;
