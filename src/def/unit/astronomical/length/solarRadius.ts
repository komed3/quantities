import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const solarRadius = 'rSolar' as UnitRef< LengthDim, 'rSolar' >;

export default ( {
  type: UnitType.NAMED,
  id: solarRadius,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 6.957e8
  },
  prefixable: false,
  aliases: [
    'R☉',
    'solar radius',
    'solar radii',
    'solar radien',
    'nominal solar radius',
    'nominal solar radii',
    'nominal solar radien'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'rSolar',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'solar radius',
        [ Format.UNICODE ]: 'R☉',
        [ Format.LATEX ]: '\\mathrm{R_{\\odot}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'solar radius', 'solar radii' ],
      [ Lang.DE ]: [ 'Sonnenradius', 'Sonnenradien' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of length, defined as the radius of the Sun at a specific point in time, used as a standard unit of measurement in astronomy',
      [ Lang.DE ]: 'astronomische Längeneinheit, definiert als der Radius der Sonne zu einem bestimmten Zeitpunkt, verwendet als Standardmaßeinheit in der Astronomie'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof solarRadius >;
