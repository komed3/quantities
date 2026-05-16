import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const leiden = 'degL' as UnitRef< TemperatureDim, 'degL' >;

export default ( {
  type: UnitType.NAMED,
  id: leiden,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    scale: 1,
    offset: 20.15
  },
  prefixable: false,
  aliases: [
    '°L',
    'DL',
    'degree leiden',
    'degrees leiden',
    'leiden'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'degL',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '°L',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}L}'
      }
    }, {
      id: 'DL',
      format: {
        plain: 'DL',
        unicode: 'ÐL',
        latex: '\\mathrm{ÐL}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ '°Leiden' ],
      [ Lang.DE ]: [ 'Grad Leiden' ]
    },
    description: {
      [ Lang.EN ]: 'historical temperature unit used in cryogenics',
      [ Lang.DE ]: 'historische Temperatureinheit, die in der Kryotechnik verwendet wird'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, UnitType.NAMED, typeof leiden >;
