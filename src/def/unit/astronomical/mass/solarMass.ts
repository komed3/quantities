import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const solarMass = 'mSolar' as UnitRef< MassDim, 'mSolar' >;

export default ( {
  type: UnitType.NAMED,
  id: solarMass,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 1.98892e33,
    uncertainty: 2.5e-4
  },
  prefixable: false,
  aliases: [
    'M☉',
    'solar mass',
    'solar masses'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'mSolar',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'solar mass',
        [ Format.UNICODE ]: 'M☉',
        [ Format.LATEX ]: '\\mathrm{M_{\\odot}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'solar mass', 'solar masses' ],
      [ Lang.DE ]: [ 'Sonnenmasse', 'Sonnenmassen' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of mass, defined as the mass of the Sun, used as a standard unit of measurement in astronomy',
      [ Lang.DE ]: 'astronomische Masseneinheit, definiert als die Masse der Sonne, verwendet als Standardmaßeinheit in der Astronomie'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof solarMass >;
