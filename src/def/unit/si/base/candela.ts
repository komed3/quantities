import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LuminousIntensityDim } from '../../../../types/dimension';

export const candela = 'cd' as UnitRef< LuminousIntensityDim, 'cd' >;

export default ( {
  id: candela,
  dim: LuminousIntensityDim,
  structure: [],
  conversion: 1,
  prefixable: false,
  aliases: [
    'candela',
    'candelas'
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
} ) as const satisfies UnitDef< LuminousIntensityDim, typeof candela >;
