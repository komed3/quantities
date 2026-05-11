import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const planckLength = 'lP' as UnitRef< LengthDim, 'lP' >;

export default ( {
  id: planckLength,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 1.61625518e-35,
    uncertainty: 1.1e-5
  },
  prefixable: false,
  aliases: [
    'planck length',
    'planck lengths'
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
      id: 'lP',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'lP',
        [ Format.UNICODE ]: 'lₚ',
        [ Format.LATEX ]: 'l_{\\mathrm{P}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'sqrt(hBar*G/c^3)',
        [ Format.UNICODE ]: '√(ħ·G/c³)',
        [ Format.LATEX ]: '\\sqrt{\\frac{\\hbar\\,G}{c^{3}}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'planck length', 'planck lengths' ],
      [ Lang.DE ]: [ 'Planck-Länge', 'Planck-Längen' ]
    },
    description: {
      [ Lang.EN ]: 'Planck unit of length in the system of natural units, smallest meaningful length',
      [ Lang.DE ]: 'Planck-Einheit der Länge im System der natürlichen Einheiten, kleinste sinnvolle Länge'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof planckLength >;
