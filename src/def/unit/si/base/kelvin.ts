import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

export const kelvin = 'K' as UnitRef< TemperatureDim, 'K' >;

export default ( {
  id: kelvin,
  dim: TemperatureDim,
  structure: [],
  conversion: 1,
  prefixable: false,
  aliases: [
    'kelvin',
    'kelvins'
  ],
  context: {
    system: [
      UnitSystem.SI
    ],
    status: UnitStatus.ACTIVE,
    si: UnitSIType.BASE
  },
  meta: {
    symbol: [ {
      id: 'K',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'K',
        [ Format.LATEX ]: '\\mathrm{K}'
      }
    }, {
      id: 'degK',
      deprecated: true,
      format: {
        [ Format.PLAIN ]: '°K',
        [ Format.LATEX ]: '\\mathrm{^{\\circ}K}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'kelvin', 'kelvins' ],
      [ Lang.DE ]: [ 'Kelvin' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of thermodynamic temperature',
      [ Lang.DE ]: 'SI-Basiseinheit der thermodynamischen Temperatur'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof kelvin >;
