import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const romer = 'degRo' as UnitRef< TemperatureDim, 'degRo' >;

export default ( {
  id: romer,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    scale: 40 / 21,
    offset: 273.15 - ( 7.5 * 40 / 21 )
  },
  prefixable: false,
  aliases: [
    '°Ro',
    'degree romer',
    'degrees romer',
    'romer',
    'roemer'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'degRo',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '°Ro',
        [ Format.UNICODE ]: '°Rø',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}Rø}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ '°Rømer' ],
      [ Lang.DE ]: [ 'Grad Rømer' ]
    },
    description: {
      [ Lang.EN ]: 'historical temperature unit based on water expansion',
      [ Lang.DE ]: 'historische Temperatureinheit, die auf der Ausdehnung von Wasser basiert'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof romer >;
