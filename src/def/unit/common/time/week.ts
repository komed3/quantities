import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const week = 'week' as UnitRef< TimeDim, 'week' >;

export default ( {
  type: UnitType.NAMED,
  id: week,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 6.048e5
  },
  prefixable: false,
  aliases: [
    'weeks'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'w',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'w',
        [ Format.LATEX ]: '\\mathrm{w}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'week', 'weeks' ],
      [ Lang.DE ]: [ 'Woche', 'Wochen' ]
    },
    description: {
      [ Lang.EN ]: 'common unit of time, equal to 604,800 seconds',
      [ Lang.DE ]: 'übliche Einheit der Zeit, entspricht 604.800 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, UnitType.NAMED, typeof week >;
