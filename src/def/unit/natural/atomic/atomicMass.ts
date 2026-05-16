import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const atomicMass = 'u' as UnitRef< MassDim, 'u' >;

export default ( {
  type: UnitType.NAMED,
  id: atomicMass,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 1.6605390689252e-24
  },
  prefixable: false,
  aliases: [
    'atomic mass unit',
    'atomic mass units',
    'unified atomic mass unit',
    'unified atomic mass units',
    'Da',
    'dalton',
    'daltons'
  ],
  context: {
    system: [
      UnitSystem.NATURAL,
      UnitSystem.ATOMIC
    ],
    status: UnitStatus.ACTIVE,
    constant: true,
    si: SIType.ACCEPTED
  },
  meta: {
    symbol: [ {
      id: 'u',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'u',
        [ Format.LATEX ]: '\\mathrm{u}'
      }
    }, {
      id: 'Da',
      format: {
        [ Format.PLAIN ]: 'Da',
        [ Format.LATEX ]: '\\mathrm{Da}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'dalton', 'daltons' ],
      [ Lang.DE ]: [ 'atomare Masseneinheit', 'atomare Masseneinheiten' ]
    },
    description: {
      [ Lang.EN ]: 'unit of mass defined as one twelfth of the mass of an unbound neutral atom of carbon-12 in its nuclear and electronic ground state',
      [ Lang.DE ]: 'Maßeinheit der Masse, definiert als ein Zwölftel der Masse eines ungebundenen neutralen Atoms von Kohlenstoff-12 in seinem Kern- und Elektronengrundzustand'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof atomicMass >;
