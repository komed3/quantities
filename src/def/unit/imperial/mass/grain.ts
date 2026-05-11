import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const grain = 'gr' as UnitRef< MassDim, 'gr' >;

export default ( {
  id: grain,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 0.06479891
  },
  prefixable: false,
  aliases: [
    'grain',
    'grains'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'gr',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'gr',
        [ Format.LATEX ]: '\\mathrm{gr}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'grain', 'grains' ],
      [ Lang.DE ]: [ 'Gran' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass, equal to 1/7000 of a pound (approx. 64.8 mg)',
      [ Lang.DE ]: 'imperiale Masseeinheit, gleich 1/7000 Pfund (ca. 64,8 mg)'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof grain >;
