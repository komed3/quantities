import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

export const gram = 'g' as UnitRef< MassDim, 'g' >;

export default ( {
  type: UnitType.NAMED,
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
    si: SIType.BASE
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
      [ Lang.EN ]: 'common unit of mass, used as reference unit; the actual SI base unit is the kilogram',
      [ Lang.DE ]: 'gebräuchliche Masseeinheit, die als Referenz verwendet wird; die eigentliche SI-Basiseinheit ist das Kilogramm'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof gram >;
