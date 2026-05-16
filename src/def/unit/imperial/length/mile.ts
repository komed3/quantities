import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const mile = 'mi' as UnitRef< LengthDim, 'mi' >;

export default ( {
  type: UnitType.NAMED,
  id: mile,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 1.609344e3
  },
  prefixable: false,
  aliases: [
    'mile',
    'miles',
    'statute mile',
    'statute miles'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'mi',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'mi',
        [ Format.LATEX ]: '\\mathrm{mi}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'mile', 'miles' ],
      [ Lang.DE ]: [ 'Meile', 'Meilen' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length equal to 1,760 yards or 1,609.344 meters',
      [ Lang.DE ]: 'imperiale Längeneinheit, die 1.760 Yards oder 1.609,344 Meter entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof mile >;
