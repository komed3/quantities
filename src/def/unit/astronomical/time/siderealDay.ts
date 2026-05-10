import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const siderealDay = 'dSid' as UnitRef< TimeDim, 'dSid' >;

export default ( {
  id: siderealDay,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 8.61640989e4
  },
  prefixable: false,
  aliases: [
    'sidereal day',
    'sidereal days',
    'sidereal rotation period',
    'sidereal rotation periods'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'dSid',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'd',
        [ Format.LATEX ]: '\\mathrm{d_{sid}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'sidereal day', 'sidereal days' ],
      [ Lang.DE ]: [ 'siderischer Tag', 'siderische Tage' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of time, time of one Earth rotation around its axis',
      [ Lang.DE ]: 'astronomische Einheit der Zeit, Zeit einer Erdrotation um die eigene Achse'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof siderealDay >;
