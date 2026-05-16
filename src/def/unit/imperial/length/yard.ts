import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const yard = 'yd' as UnitRef< LengthDim, 'yd' >;

export default ( {
  type: UnitType.NAMED,
  id: yard,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 0.9144
  },
  prefixable: false,
  aliases: [
    'yard',
    'yards'
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
      id: 'yd',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'yd',
        [ Format.LATEX ]: '\\mathrm{yd}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'yard', 'yards' ],
      [ Lang.DE ]: [ 'Yard', 'Yards' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length equal to 3 feet or 0.9144 meters',
      [ Lang.DE ]: 'imperiale Längeneinheit, die 3 Fuß oder 0,9144 Meter entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof yard >;
