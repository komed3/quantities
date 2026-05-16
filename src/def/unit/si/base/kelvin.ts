import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TemperatureDim } from '../../../../types/dimension';

export const kelvin = 'K' as UnitRef< TemperatureDim, 'K' >;

export default ( {
  type: UnitType.NAMED,
  id: kelvin,
  dim: TemperatureDim,
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [
    'kelvin',
    'kelvins'
  ],
  context: {
    system: [
      UnitSystem.SI
    ],
    status: UnitStatus.ACTIVE,
    si: SIType.BASE
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
} ) as const satisfies UnitDef< TemperatureDim, UnitType.NAMED, typeof kelvin >;
