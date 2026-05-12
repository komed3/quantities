import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { ForceDim } from '../../../../types/dimension';

import { newton } from '../../si/derived/newton';

export const planckForce = 'FP' as UnitRef< ForceDim, 'FP' >;

export default ( {
  id: planckForce,
  dim: ForceDim,
  structure: [],
  conversion: {
    base: newton,
    factor: 1.210e44
  },
  prefixable: false,
  aliases: [
    'planck force',
    'planck forces'
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
      id: 'FP',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'FP',
        [ Format.UNICODE ]: 'Fₚ',
        [ Format.LATEX ]: 'F_{\\mathrm{P}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'c^4/G',
        [ Format.UNICODE ]: 'c⁴/G',
        [ Format.LATEX ]: '\\frac{c^{4}}{G}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'planck force', 'planck forces' ],
      [ Lang.DE ]: [ 'Planck-Kraft', 'Planck-Kräfte' ]
    },
    description: {
      [ Lang.EN ]: 'Planck unit of force in the system of natural units, highest meaningful force',
      [ Lang.DE ]: 'Planck-Einheit der Kraft im System der natürlichen Einheiten, höchste sinnvolle Kraft'
    }
  }
} ) as const satisfies UnitDef< ForceDim, typeof planckForce >;
