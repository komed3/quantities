import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { ForceDim } from '../../../../types/dimension';

import { newton } from '../../si/derived/newton';

export const atomicForce = 'auForce' as UnitRef< ForceDim, 'auForce' >;

export default ( {
  type: UnitType.NAMED,
  id: atomicForce,
  dim: ForceDim,
  structure: [],
  conversion: {
    base: newton,
    factor: 8.238723503813e-8
  },
  prefixable: false,
  aliases: [
    'atomic force',
    'atomic forces'
  ],
  context: {
    system: [
      UnitSystem.NATURAL,
      UnitSystem.ATOMIC
    ],
    status: UnitStatus.ACTIVE,
    constant: true
  },
  meta: {
    symbol: [ {
      id: 'auForce',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'a.u. of force',
        [ Format.LATEX ]: '\\mathrm{a.u.\\,of\\,force}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'Eh/a0',
        [ Format.UNICODE ]: 'Eₕ/a₀',
        [ Format.LATEX ]: 'E_{\\mathrm{h}}/a_{0}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'atomic force', 'atomic forces' ],
      [ Lang.DE ]: [ 'atomare Krafteinheit', 'atomare Krafteinheiten' ]
    },
    description: {
      [ Lang.EN ]: 'unit of force in the atomic unit system, defined as the force between two elementary charges separated by a distance of one bohr radius',
      [ Lang.DE ]: 'Krafteinheit im atomaren Einheitensystem, definiert als die Kraft zwischen zwei Elementarladungen, die durch eine Entfernung von einem Bohrschem Radius getrennt sind'
    }
  }
} ) as const satisfies UnitDef< ForceDim, UnitType.NAMED, typeof atomicForce >;
