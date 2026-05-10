import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { AmountOfSubstanceDim } from '../../../../types/dimension';

export const mole = 'mol' as UnitRef< AmountOfSubstanceDim, 'mol' >;

export default ( {
  id: mole,
  dim: AmountOfSubstanceDim,
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [
    'mole',
    'moles'
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
      id: 'mol',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'mol',
        [ Format.LATEX ]: '\\mathrm{mol}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'mole', 'moles' ],
      [ Lang.DE ]: [ 'Mol' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of amount of substance',
      [ Lang.DE ]: 'SI-Basiseinheit der Stoffmenge'
    }
  }
} ) as const satisfies UnitDef< AmountOfSubstanceDim, typeof mole >;
