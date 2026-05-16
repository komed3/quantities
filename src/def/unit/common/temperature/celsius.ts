import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

import { kelvin } from '../../si/base/kelvin';

export const celsius = 'degC' as UnitRef< TemperatureDim, 'degC' >;

export default ( {
  id: celsius,
  dim: TemperatureDim,
  structure: [],
  conversion: {
    base: kelvin,
    factor: 1,
    offset: 273.15
  },
  prefixable: false,
  aliases: [
    '°C',
    'degree celsius',
    'degrees celsius',
    'celsius',
    'centigrade'
  ],
  context: {
    system: [
      UnitSystem.COMMON,
      UnitSystem.SI
    ],
    status: UnitStatus.ACTIVE,
    si: UnitSIType.ACCEPTED
  },
  meta: {
    symbol: [ {
      id: 'degC',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '°C',
        [ Format.UNICODE ]: '℃',
        [ Format.LATEX ]: '{^{\\circ}\\mathrm{C}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'degree Celsius', 'degrees Celsius' ],
      [ Lang.DE ]: [ 'Grad Celsius' ]
    },
    description: {
      [ Lang.EN ]: 'accepted unit of temperature in the SI system, defined as t/°C = T/K - 273.15',
      [ Lang.DE ]: 'akzeptierte Temperatureinheit im SI-System, definiert als t/°C = T/K - 273,15'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof celsius >;
