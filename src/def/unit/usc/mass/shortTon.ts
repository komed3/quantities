import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const shortTon = 'tn' as UnitRef< MassDim, 'tn' >;

export default ( {
  type: UnitType.NAMED,
  id: shortTon,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 0.90718474
  },
  prefixable: false,
  aliases: [
    'short ton',
    'short tons',
    'tn. sh.'
  ],
  context: {
    system: [
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'tn',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'tn',
        [ Format.LATEX ]: '\\mathrm{tn}'
      }
    }, {
      id: 'tnsh',
      format: {
        [ Format.PLAIN ]: 'tn. sh.',
        [ Format.LATEX ]: '\\mathrm{tn.\\,sh.}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'short ton', 'short tons' ],
      [ Lang.DE ]: [ 'amerikanische Tonne', 'amerikanische Tonnen' ]
    },
    description: {
      [ Lang.EN ]: 'american unit of mass equal to 2,000 pounds (approx. 907.18474 kg)',
      [ Lang.DE ]: 'amerikanische Masseeinheit, die 2.000 Pfund (etwa 907,18474 kg) entspricht'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof shortTon >;
