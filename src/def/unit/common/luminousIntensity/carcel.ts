import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LuminousIntensityDim } from '../../../../types/dimension';

import { candela } from '../../si/base/candela';

export const carcel = 'carcel' as UnitRef< LuminousIntensityDim, 'carcel' >;

export default ( {
  id: carcel,
  dim: LuminousIntensityDim,
  structure: [],
  conversion: {
    base: candela,
    factor: 9.74
  },
  prefixable: false,
  aliases: [
    'carcel',
    'carcels'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'carcel',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'carcel',
        [ Format.LATEX ]: '\\mathrm{carcel}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'carcel', 'carcels' ],
      [ Lang.DE ]: [ 'Carcel' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of luminous intensity used in the 19th century, equal to approx. 9.74 candelas',
      [ Lang.DE ]: 'historische Lichtstärkeeineinheit, die im 19. Jahrhundert verwendet wurde und ca. 9,74 Candela entspricht'
    }
  }
} ) as const satisfies UnitDef< LuminousIntensityDim, typeof carcel >;
