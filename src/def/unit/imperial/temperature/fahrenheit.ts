import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const fahrenheit = 'degF' as UnitRef< TemperatureDim, 'degF' >;

export default ( {
  type: UnitType.NAMED,
  id: fahrenheit,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    factor: 5 / 9,
    offset: 459.67 * 5 / 9
  },
  prefixable: false,
  aliases: [
    '°F',
    'degree fahrenheit',
    'degrees fahrenheit',
    'fahrenheit'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'degF',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '°F',
        [ Format.UNICODE ]: '℉',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}F}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ '°Fahrenheit' ],
      [ Lang.DE ]: [ 'Grad Fahrenheit' ]
    },
    description: {
      [ Lang.EN ]: 'unit of temperature in the imperial and US customary systems, defined as 1/180 of the interval between the freezing and boiling points of water at standard atmospheric pressure, with an offset of 32 degrees from the Celsius scale',
      [ Lang.DE ]: 'Temperatureinheit im imperialen und US-amerikanischen Maßsystem, definiert als 1/180 des Intervalls zwischen dem Gefrier- und Siedepunkt von Wasser bei Normaldruck, mit einem Offset von 32 Grad zur Celsius-Skala'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, UnitType.NAMED, typeof fahrenheit >;
