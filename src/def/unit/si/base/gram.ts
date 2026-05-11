import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

export const gram = 'g' as UnitRef< MassDim, 'g' >;

export default ( {
  id: gram,
  dim: MassDim,
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [
    'gram',
    'grams'
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
      id: 'g',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'g',
        [ Format.LATEX ]: '\\mathrm{g}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'gram', 'grams' ],
      [ Lang.DE ]: [ 'Gramm' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of mass, declared as gram for arithmetic reasons',
      [ Lang.DE ]: 'SI-Basiseinheit der Masse, aus arithmetischen Gründen als Gramm deklariert'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof gram >;
