import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const stoneyTime = 'tS' as UnitRef< TimeDim, 'tS' >;

export default ( {
  type: UnitType.NAMED,
  id: stoneyTime,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 4.6054e-45
  },
  prefixable: false,
  aliases: [
    'stoney time',
    'stoney times'
  ],
  context: {
    system: [
      UnitSystem.NATURAL,
      UnitSystem.STONEY
    ],
    status: UnitStatus.HISTORICAL,
    constant: true
  },
  meta: {
    symbol: [ {
      id: 'tS',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'tS',
        [ Format.UNICODE ]: 'tₛ',
        [ Format.LATEX ]: 't_{\\mathrm{S}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'sqrt(G*e^2/(4*pi*epsilon0*c^6))',
        [ Format.UNICODE ]: '√(G·e²/(4π·ε₀·c⁶))',
        [ Format.LATEX ]: '\\sqrt{\\frac{Ge^{2}}{4\\pi\\epsilon_{0}c^{6}}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'stoney time', 'stoney times' ],
      [ Lang.DE ]: [ 'Stoney-Zeit', 'Stoney-Zeiten' ]
    },
    description: {
      [ Lang.EN ]: 'unit of time in the system of natural units proposed by George Stoney, based on the elementary charge',
      [ Lang.DE ]: 'Einheit der Zeit im System der natürlichen Einheiten, vorgeschlagen von George Stoney, basierend auf der Elementarladung'
    }
  }
} ) as const satisfies UnitDef< TimeDim, UnitType.NAMED, typeof stoneyTime >;
