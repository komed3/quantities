import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const rod = 'rod' as UnitRef< LengthDim, 'rod' >;

export default ( {
  id: rod,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 5.0292
  },
  prefixable: false,
  aliases: [
    'rods',
    'rd.',
    'perch',
    'perchs',
    'pole',
    'poles',
    'lug',
    'lugs'
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
      id: 'rd.',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'rd.',
        [ Format.LATEX ]: '\\mathrm{rd.}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'rod', 'rods' ],
      [ Lang.DE ]: [ 'Rute', 'Ruten' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length equal to 5.0292 meters or 16.5 feet',
      [ Lang.DE ]: 'imperiale Längeneinheit, die 5,0292 Meter oder 16,5 Fuß entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof rod >;
