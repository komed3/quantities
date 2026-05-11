import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { ElectricCurrentDim } from '../../../../types/dimension';

export const ampere = 'A' as UnitRef< ElectricCurrentDim, 'A' >;

export default ( {
  id: ampere,
  dim: ElectricCurrentDim,
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [
    'ampere',
    'amperes'
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
      id: 'A',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'A',
        [ Format.LATEX ]: '\\mathrm{A}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'ampere', 'amperes' ],
      [ Lang.DE ]: [ 'Ampere' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of electric current',
      [ Lang.DE ]: 'SI-Basiseinheit der Stromstärme'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof ampere >;
