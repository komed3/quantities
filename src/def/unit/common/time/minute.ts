import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const minute = 'min' as UnitRef< TimeDim, 'min' >;

export default ( {
  id: minute,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 60
  },
  prefixable: false,
  aliases: [
    'minute',
    'minutes'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE,
    si: UnitSIType.ACCEPTED
  },
  meta: {
    symbol: [ {
      id: 'min',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'min',
        [ Format.LATEX ]: '\\mathrm{min}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'minute', 'minutes' ],
      [ Lang.DE ]: [ 'Minute', 'Minuten' ]
    },
    description: {
      [ Lang.EN ]: 'SI accepted unit of time, equal to 60 seconds',
      [ Lang.DE ]: 'SI zugelassene Einheit der Zeit, entspricht 60 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof minute >;
