import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const longTon = 'LT' as UnitRef< MassDim, 'LT' >;

export default ( {
  type: UnitType.NAMED,
  id: longTon,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 1.016046908e6
  },
  prefixable: false,
  aliases: [
    'long ton',
    'long tons',
    'tn. l.'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'LT',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'LT',
        [ Format.LATEX ]: '\\mathrm{LT}'
      }
    }, {
      id: 'tnl',
      format: {
        [ Format.PLAIN ]: 'tn. l.',
        [ Format.LATEX ]: '\\mathrm{tn.\\,l.}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'long ton', 'long tons' ],
      [ Lang.DE ]: [ 'britische Tonne', 'britische Tonnen' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass equal to 2,240 pounds (approx. 1,016.046908 kg)',
      [ Lang.DE ]: 'imperiale Masseeinheit, die 2.240 Pfund (etwa 1.016,046908 kg) entspricht'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof longTon >;
