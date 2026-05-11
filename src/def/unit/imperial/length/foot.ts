import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const foot = 'ft' as UnitRef< LengthDim, 'ft' >;

export default ( {
  id: foot,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 0.3048
  },
  prefixable: false,
  aliases: [
    'foot',
    'feet'
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
      id: 'ft',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'ft',
        [ Format.LATEX ]: '\\mathrm{ft}'
      }
    }, {
      id: 'prime',
      format: {
        [ Format.PLAIN ]: '\'',
        [ Format.UNICODE ]: '′',
        [ Format.LATEX ]: '^{\\prime}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'foot', 'feet' ],
      [ Lang.DE ]: [ 'Fuß' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length equal to 12 inches or 0.3048 meters',
      [ Lang.DE ]: 'imperiale Längeneinheit, die 12 Zoll oder 0,3048 Meter entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof foot >;
