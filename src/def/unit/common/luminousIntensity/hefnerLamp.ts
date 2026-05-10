import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LuminousIntensityDim } from '../../../../types/dimension';

import { candela } from '../../si/base/candela';

export const hefnerLamp = 'HK' as UnitRef< LuminousIntensityDim, 'HK' >;

export default ( {
  id: hefnerLamp,
  dim: LuminousIntensityDim,
  structure: [],
  conversion: {
    base: candela,
    factor: 0.903
  },
  prefixable: false,
  aliases: [
    'NK',
    'hefner lamp',
    'hefner lamps'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'HK',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'HK',
        [ Format.LATEX ]: '\\mathrm{HK}'
      }
    }, {
      id: 'NK',
      format: {
        [ Format.PLAIN ]: 'NK',
        [ Format.LATEX ]: '\\mathrm{NK}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'hefner lamp', 'hefner lamps' ],
      [ Lang.DE ]: [ 'Hefnerkerze', 'Hefnerkerzen' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of luminous intensity used in Germany and Austria, equal to approx. 0.903 candelas',
      [ Lang.DE ]: 'historische Lichtstärkeeineinheit, die in Deutschland und Österreich verwendet wurde und ca. 0,903 Candela entspricht'
    }
  }
} ) as const satisfies UnitDef< LuminousIntensityDim, typeof hefnerLamp >;
