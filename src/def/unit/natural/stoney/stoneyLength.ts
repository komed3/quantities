import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const stoneyLength = 'lS' as UnitRef< LengthDim, 'lS' >;

export default ( {
  id: stoneyLength,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 1.3807e-36
  },
  prefixable: false,
  aliases: [
    'stoney length',
    'stoney lengths'
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
      id: 'lS',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'lS',
        [ Format.UNICODE ]: 'lₛ',
        [ Format.LATEX ]: 'l_{\\mathrm{S}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'sqrt(G*e^2/(4*pi*epsilon0*c^4))',
        [ Format.UNICODE ]: '√(G·e²/(4π·ε₀·c⁴))',
        [ Format.LATEX ]: '\\sqrt{\\frac{Ge^{2}}{4\\pi\\epsilon_{0}c^{4}}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'stoney length', 'stoney lengths' ],
      [ Lang.DE ]: [ 'Stoney-Länge', 'Stoney-Längen' ]
    },
    description: {
      [ Lang.EN ]: 'unit of length in the system of natural units proposed by George Stoney, based on the elementary charge',
      [ Lang.DE ]: 'Einheit der Länge im System der natürlichen Einheiten, vorgeschlagen von George Stoney, basierend auf der Elementarladung'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof stoneyLength >;
