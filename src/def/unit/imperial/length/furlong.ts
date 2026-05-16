import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const furlong = 'fur' as UnitRef< LengthDim, 'fur' >;

export default ( {
  type: UnitType.NAMED,
  id: furlong,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 201.168
  },
  prefixable: false,
  aliases: [
    'furlong',
    'furlongs'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'fur',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'fur',
        [ Format.LATEX ]: '\\mathrm{fur}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'furlong', 'furlongs' ],
      [ Lang.DE ]: [ 'Furlong', 'Furlongs' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length equal to 1,760 yards or 1,609.344 meters',
      [ Lang.DE ]: 'imperiale Längeneinheit, die 1.760 Yards oder 1.609,344 Meter entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof furlong >;
