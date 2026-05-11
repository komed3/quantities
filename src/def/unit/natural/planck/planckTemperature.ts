import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const planckTemperature = 'TP' as UnitRef< TemperatureDim, 'TP' >;

export default ( {
  id: planckTemperature,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    factor: 1.41678416e32,
    uncertainty: 1.1e-5
  },
  prefixable: false,
  aliases: [
    'planck temperature',
    'planck temperatures'
  ],
  context: {
    system: [
      UnitSystem.NATURAL,
      UnitSystem.PLANCK
    ],
    status: UnitStatus.ACTIVE,
    constant: true
  },
  meta: {
    symbol: [ {
      id: 'TP',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'TP',
        [ Format.UNICODE ]: 'Tₚ',
        [ Format.LATEX ]: 'T_{\\mathrm{P}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'mP*c^2/kB',
        [ Format.UNICODE ]: 'mₚ·c²/kB',
        [ Format.LATEX ]: '\\frac{m_{\\mathrm{P}}\\,c^{2}}{k_{\\mathrm{B}}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'planck temperature', 'planck temperatures' ],
      [ Lang.DE ]: [ 'Planck-Temperatur', 'Planck-Temperaturen' ]
    },
    description: {
      [ Lang.EN ]: 'Planck unit of temperature in the system of natural units, highest meaningful temperature',
      [ Lang.DE ]: 'Planck-Einheit der Temperatur im System der natürlichen Einheiten, höchste sinnvolle Temperatur'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof planckTemperature >;
