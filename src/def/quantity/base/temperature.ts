import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { TemperatureDim } from '../../../types/dimension';

import { celsius } from '../../unit/common/temperature/celsius';
import { delisle } from '../../unit/common/temperature/delisle';
import { leiden } from '../../unit/common/temperature/leiden';
import { newton } from '../../unit/common/temperature/newton';
import { reaumur } from '../../unit/common/temperature/reaumur';
import { romer } from '../../unit/common/temperature/romer';
import { fahrenheit } from '../../unit/imperial/temperature/fahrenheit';
import { rankine } from '../../unit/imperial/temperature/rankine';
import { planckTemperature } from '../../unit/natural/planck/planckTemperature';
import { kelvin } from '../../unit/si/base/kelvin';

export const temperature = 'temperature' as QuantityRef< TemperatureDim >;

export default ( {
  id: temperature,
  dim: TemperatureDim,
  units: [
    celsius,
    delisle,
    fahrenheit,
    kelvin,
    leiden,
    newton,
    planckTemperature,
    rankine,
    reaumur,
    romer
  ],
  baseUnit: kelvin,
  branch: Branch.THERMODYNAMICS,
  meta: {
    symbol: [ {
      id: 'T',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'T',
        [ Format.LATEX ]: 'T'
      }
    } ],
    name: {
      [ Lang.EN ]: 'thermodynamic temperature',
      [ Lang.DE ]: 'Thermodynamische Temperatur'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the average kinetic energy of the particles in a system',
      [ Lang.DE ]: 'Größe, die die durchschnittliche kinetische Energie der Teilchen in einem System ausdrückt'
    }
  }
} ) as const satisfies QuantityDef< TemperatureDim, typeof temperature >;
