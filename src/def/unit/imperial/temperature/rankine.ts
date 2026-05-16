import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const rankine = 'degRa' as UnitRef< TemperatureDim, 'degRa' >;

export default ( {
  type: UnitType.NAMED,
  id: rankine,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    factor: 5 / 9,
    offset: 0
  },
  prefixable: false,
  aliases: [
    '°Ra',
    'degree rankine',
    'degrees rankine',
    'rankine'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'degRa',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '°Ra',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}Ra}'
      }
    }, {
      id: 'degR',
      deprecated: true,
      format: {
        [ Format.PLAIN ]: '°R',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}R}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ '°Rankine' ],
      [ Lang.DE ]: [ 'Grad Rankine' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of temperature in the imperial and US customary systems, based on the Fahrenheit scale',
      [ Lang.DE ]: 'historische Temperatureinheit im imperialen und US-amerikanischen Maßsystem, basierend auf der Fahrenheit-Skala'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, UnitType.NAMED, typeof rankine >;
