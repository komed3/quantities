import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const day = 'day' as UnitRef< TimeDim, 'day' >;

export default ( {
  type: UnitType.NAMED,
  id: day,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 8.64e4
  },
  prefixable: false,
  aliases: [
    'days'
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
      id: 'd',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'd',
        [ Format.LATEX ]: '\\mathrm{d}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'day', 'days' ],
      [ Lang.DE ]: [ 'Tag', 'Tage' ]
    },
    description: {
      [ Lang.EN ]: 'SI accepted unit of time, equal to 86,400 seconds',
      [ Lang.DE ]: 'SI zugelassene Einheit der Zeit, entspricht 86.400 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, UnitType.NAMED, typeof day >;
