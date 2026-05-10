import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const reaumur = 'degRe' as UnitRef< TemperatureDim, 'degRe' >;

export default ( {
  id: reaumur,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    scale: 5 / 4,
    offset: 273.15
  },
  prefixable: false,
  aliases: [
    '°Re',
    '°r',
    'degree reaumur',
    'degrees reaumur',
    'reaumur'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'degRe',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '°Re',
        [ Format.UNICODE ]: '°Ré',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}R\\acute{e}}'
      }
    }, {
      id: 'degr',
      format: {
        [ Format.PLAIN ]: '°r',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}r}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ '°Réaumur' ],
      [ Lang.DE ]: [ 'Grad Réaumur' ]
    },
    description: {
      [ Lang.EN ]: 'historical temperature unit based on expansion of ethanol',
      [ Lang.DE ]: 'historische Temperatureinheit, die auf der Ausdehnung von Ethanol basiert'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof reaumur >;
