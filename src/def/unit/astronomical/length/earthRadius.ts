import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const earthRadius = 'rEarth' as UnitRef< LengthDim, 'rEarth' >;

export default ( {
  id: earthRadius,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 6.378137e6
  },
  prefixable: false,
  aliases: [
    'R🜨',
    'RE',
    'earth radius',
    'earth radii',
    'earth radien'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'rEarth',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'earth radius',
        [ Format.UNICODE ]: 'R🜨',
        [ Format.LATEX ]: '\\mathrm{R_{\\oplus}}'
      }
    }, {
      id: 'RE',
      format: {
        [ Format.PLAIN ]: 'RE',
        [ Format.LATEX ]: '\\mathrm{R_{E}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'earth radius', 'earth radii' ],
      [ Lang.DE ]: [ 'Erdradius', 'Erdradien' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of length, defined as the radius of the Earth at the equator, used as a standard unit of measurement in astronomy',
      [ Lang.DE ]: 'astronomische Längeneinheit, definiert als der Radius der Erde am Äquator, verwendet als Standardmaßeinheit in der Astronomie'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof earthRadius >;
