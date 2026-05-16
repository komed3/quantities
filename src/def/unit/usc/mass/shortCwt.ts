import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const shortCwt = 'cwtSh' as UnitRef< MassDim, 'cwtSh' >;

export default ( {
  type: UnitType.NAMED,
  id: shortCwt,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 4.5359237e4
  },
  prefixable: false,
  aliases: [
    'short hundredweight',
    'short hundredweights',
    'cwt. sh.'
  ],
  context: {
    system: [
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'cwtSh',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'cwt. sh.',
        [ Format.LATEX ]: '\\mathrm{cwt.\\,sh.}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'short hundredweight', 'short hundredweights' ],
      [ Lang.DE ]: [ 'amerikanisches Hundredweight', 'amerikanische Hundredweights' ]
    },
    description: {
      [ Lang.EN ]: 'american unit of mass equal to 100 pounds (approx. 45.359237 kg)',
      [ Lang.DE ]: 'amerikanische Masseeinheit, die 100 Pfund (etwa 45,359237 kg) entspricht'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof shortCwt >;
