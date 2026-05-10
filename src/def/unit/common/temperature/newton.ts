import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const newton = 'degN' as UnitRef< TemperatureDim, 'degN' >;

export default ( {
  id: newton,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    scale: 1 / 0.33,
    offset: 273.15
  },
  prefixable: false,
  aliases: [
    '°N',
    'degree newton',
    'degrees newton'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'degN',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '°N',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}N}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ '°Newton' ],
      [ Lang.DE ]: [ 'Grad Newton' ]
    },
    description: {
      [ Lang.EN ]: 'historical temperature unit introduced by Isaac Newton',
      [ Lang.DE ]: 'historische Temperatureinheit, die von Isaac Newton eingeführt wurde'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof newton >;
