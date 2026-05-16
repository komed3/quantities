import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const delisle = 'degDe' as UnitRef< TemperatureDim, 'degDe' >;

export default ( {
  type: UnitType.NAMED,
  id: delisle,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    factor: -2 / 3,
    offset: 373.15
  },
  prefixable: false,
  aliases: [
    '°De',
    'degree delisle',
    'degrees delisle',
    'delisle'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'degDe',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '°De',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}De}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ '°Delisle' ],
      [ Lang.DE ]: [ 'Grad Delisle' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of temperature, inverted scale used in the 18th century in France and Russia',
      [ Lang.DE ]: 'historische Temperatureinheit, invertierte Skala, die im 18. Jahrhundert in Frankreich und Russland verwendet wurde'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, UnitType.NAMED, typeof delisle >;
