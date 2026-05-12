import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const stone = 'st' as UnitRef< MassDim, 'st' >;

export default ( {
  id: stone,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 6.35029318e3
  },
  prefixable: false,
  aliases: [
    'stone',
    'stones'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'st',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'st',
        [ Format.LATEX ]: '\\mathrm{st}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'stone' ],
      [ Lang.DE ]: [ 'Stone' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass, equal to 14 pounds',
      [ Lang.DE ]: 'imperiale Masseeinheit, gleich 14 Pfund'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof stone >;
