import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const longCwt = 'cwtL' as UnitRef< MassDim, 'cwtL' >;

export default ( {
  type: UnitType.NAMED,
  id: longCwt,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 5.080234544e4
  },
  prefixable: false,
  aliases: [
    'long hundredweight',
    'long hundredweights',
    'cwt. l.'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'cwtL',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'cwt. l.',
        [ Format.LATEX ]: '\\mathrm{cwt.\\,l.}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'long hundredweight', 'long hundredweights' ],
      [ Lang.DE ]: [ 'britisches Hundredweight', 'britische Hundredweights' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass equal to 112 pounds (approx. 50.80234544 kg)',
      [ Lang.DE ]: 'imperiale Masseeinheit, die 112 Pfund (etwa 50,80234544 kg) entspricht'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof longCwt >;
