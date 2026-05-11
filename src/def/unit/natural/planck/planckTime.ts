import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const planckTime = 'tP' as UnitRef< TimeDim, 'tP' >;

export default ( {
  id: planckTime,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 5.39124760e-44,
    uncertainty: 1.1e-5
  },
  prefixable: false,
  aliases: [
    'planck time',
    'planck times'
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
      id: 'tP',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'tP',
        [ Format.UNICODE ]: 'tₚ',
        [ Format.LATEX ]: 't_{\\mathrm{P}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'sqrt(hBar*G/c^5)',
        [ Format.UNICODE ]: '√(ħ·G/c⁵)',
        [ Format.LATEX ]: '\\sqrt{\\frac{\\hbar\\,G}{c^{5}}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'planck time', 'planck times' ],
      [ Lang.DE ]: [ 'Planck-Zeit', 'Planck-Zeiten' ]
    },
    description: {
      [ Lang.EN ]: 'Planck unit of time in the system of natural units, smallest meaningful span of time',
      [ Lang.DE ]: 'Planck-Einheit der Zeit im System der natürlichen Einheiten, kleinste sinnvolle Zeitspanne'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof planckTime >;
