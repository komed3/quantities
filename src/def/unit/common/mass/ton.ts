import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const ton = 't' as UnitRef< MassDim, 't' >;

export default ( {
  type: UnitType.NAMED,
  id: ton,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 1e6
  },
  prefixable: true,
  aliases: [
    'ton',
    'tons',
    'metric ton',
    'metric tons'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE,
    si: SIType.ACCEPTED
  },
  meta: {
    symbol: [ {
      id: 't',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 't',
        [ Format.LATEX ]: '\\mathrm{t}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'metric ton', 'metric tons' ],
      [ Lang.DE ]: [ 'Tonne', 'Tonnen' ]
    },
    description: {
      [ Lang.EN ]: 'accepted metric unit of mass equal to 1,000 kilograms',
      [ Lang.DE ]: 'akzeptierte metrische Masseneinheit, die 1.000 kg entspricht'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof ton >;
