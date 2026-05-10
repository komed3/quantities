import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const hour = 'hour' as UnitRef< TimeDim, 'hour' >;

export default ( {
  id: hour,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 3600
  },
  prefixable: false,
  aliases: [
    'hours'
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
      id: 'h',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'h',
        [ Format.LATEX ]: '\\mathrm{h}'
      }
    }, {
      id: 'hr',
      deprecated: true,
      format: {
        [ Format.PLAIN ]: 'hr',
        [ Format.LATEX ]: '\\mathrm{hr}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'hour', 'hours' ],
      [ Lang.DE ]: [ 'Stunde', 'Stunden' ]
    },
    description: {
      [ Lang.EN ]: 'SI accepted unit of time, equal to 3600 seconds',
      [ Lang.DE ]: 'SI zugelassene Einheit der Zeit, entspricht 3600 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof hour >;
