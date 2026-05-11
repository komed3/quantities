import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { ElectricCurrentDim } from '../../../../types/dimension';

import { ampere } from '../../si/base/ampere';

export const atomicCurrent = 'auCurrent' as UnitRef< ElectricCurrentDim, 'auCurrent' >;

export default ( {
  id: atomicCurrent,
  dim: ElectricCurrentDim,
  structure: [],
  conversion: {
    base: ampere,
    factor: 6.623618237508272e-3
  },
  prefixable: false,
  aliases: [
    'atomic current',
    'atomic currents'
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
      id: 'auCurrent',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'a.u. of current',
        [ Format.LATEX ]: '\\mathrm{a.u.\\,of\\,current}'
      }
    }, {
      id: 'auStrom',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'a.u. Strom',
        [ Format.LATEX ]: '\\mathrm{a.u.\\,Strom}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'e*Eh/h',
        [ Format.UNICODE ]: 'e·Eₕ/ℏ',
        [ Format.LATEX ]: 'eE_{\\mathrm{h}}/\\hbar'
      }
    },
    name: {
      [ Lang.EN ]: [ 'atomic current', 'atomic current' ],
      [ Lang.DE ]: [ 'atomare Stromeinheit', 'atomare Stromeinheiten' ]
    },
    description: {
      [ Lang.EN ]: 'unit of electric current in the atomic unit system, defined as the electric current corresponding to the flow of one elementary charge per atomic time unit',
      [ Lang.DE ]: 'Einheit der elektrischen Stromstärke im atomaren Einheitensystem, definiert als die elektrische Stromstärke, die dem Fluss einer Elementarladung pro atomare Zeiteinheit entspricht'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof atomicCurrent >;
