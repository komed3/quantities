import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LuminousIntensityDim } from '../../../../types/dimension';

export const candela = 'cd' as UnitRef< LuminousIntensityDim, 'cd' >;

export default ( {
  type: UnitType.NAMED,
  id: candela,
  dim: LuminousIntensityDim,
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [
    'candela',
    'candelas'
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
      id: 'cd',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'cd',
        [ Format.LATEX ]: '\\mathrm{cd}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'candela', 'candelas' ],
      [ Lang.DE ]: [ 'Candela' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of luminous intensity',
      [ Lang.DE ]: 'SI-Basiseinheit der Lichtstärke'
    }
  }
} ) as const satisfies UnitDef< LuminousIntensityDim, UnitType.NAMED, typeof candela >;
