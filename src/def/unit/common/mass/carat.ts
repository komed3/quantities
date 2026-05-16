import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const carat = 'ct' as UnitRef< MassDim, 'ct' >;

export default ( {
  type: UnitType.NAMED,
  id: carat,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 0.2
  },
  prefixable: false,
  aliases: [
    'carat',
    'carats'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'ct',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'ct',
        [ Format.LATEX ]: '\\mathrm{ct}'
      }
    }, {
      id: 'Kt',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'Kt',
        [ Format.LATEX ]: '\\mathrm{Kt}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'carat', 'carats' ],
      [ Lang.DE ]: [ 'Karat', 'Karat' ]
    },
    description: {
      [ Lang.EN ]: 'unit of mass used for gemstones and pearls equal to 0.2 grams',
      [ Lang.DE ]: 'Masseeinheit für Edelsteine und Perlen, die 0,2 Gramm entspricht'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof carat >;
