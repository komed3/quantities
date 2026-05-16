import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { pascal } from '../../si/derived/pascal';

export const bar = 'bar' as UnitRef< PressureDim, 'bar' >;

export default ( {
  type: UnitType.NAMED,
  id: bar,
  dim: PressureDim,
  structure: [],
  conversion: {
    base: pascal,
    factor: 1e5
  },
  prefixable: true,
  aliases: [
    'bars'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'bar',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'bar',
        [ Format.LATEX ]: '\\mathrm{bar}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'bar', 'bars' ],
      [ Lang.DE ]: [ 'Bar' ]
    },
    description: {
      [ Lang.EN ]: 'commonly used unit of pressure, defined as 100,000 Pa',
      [ Lang.DE ]: 'häufig verwendete Druckeinheit, definiert als 100.000 Pa'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof bar >;
