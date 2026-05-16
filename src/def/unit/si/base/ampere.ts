import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { ElectricCurrentDim } from '../../../../types/dimension';

export const ampere = 'A' as UnitRef< ElectricCurrentDim, 'A' >;

export default ( {
  type: UnitType.NAMED,
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
    si: SIType.BASE
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
      [ Lang.DE ]: 'SI-Basiseinheit der Stromstärke'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, UnitType.NAMED, typeof ampere >;
