import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const nominalEarthRadius = 'nrEarth' as UnitRef< LengthDim, 'nrEarth' >;

export default ( {
  type: UnitType.NAMED,
  id: nominalEarthRadius,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 6.3781e6
  },
  prefixable: false,
  aliases: [
    'RNE',
    'nominal earth radius',
    'nominal earth radii',
    'nominal earth radien'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'nrEarth',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'RNE',
        [ Format.LATEX ]: '\\mathcal{R}_{\\mathrm{E}}^{\\mathrm{N}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'nominal earth radius', 'nominal earth radii' ],
      [ Lang.DE ]: [ 'Nominaler Erdradius', 'nominale Erdradien' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of length, defined as the radius of the Earth at the equator, used as a standard unit of measurement in astronomy',
      [ Lang.DE ]: 'astronomische Längeneinheit, definiert als der Radius der Erde am Äquator, verwendet als Standardmaßeinheit in der Astronomie'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof nominalEarthRadius >;
