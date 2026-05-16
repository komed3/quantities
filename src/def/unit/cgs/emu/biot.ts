import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { ElectricCurrentDim } from '../../../../types/dimension';

import { ampere } from '../../si/base/ampere';

export const biot = 'Bi' as UnitRef< ElectricCurrentDim, 'Bi' >;

export default ( {
  type: UnitType.NAMED,
  id: biot,
  dim: ElectricCurrentDim,
  structure: [],
  conversion: {
    base: ampere,
    factor: 10
  },
  prefixable: false,
  aliases: [
    'biot',
    'biots',
    'abA',
    'abampere',
    'abamperes'
  ],
  context: {
    system: [
      UnitSystem.CGS,
      UnitSystem.EMU
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'Bi',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Bi',
        [ Format.LATEX ]: '\\mathrm{Bi}'
      }
    }, {
      id: 'abA',
      format: {
        [ Format.PLAIN ]: 'abA',
        [ Format.LATEX ]: '\\mathrm{abA}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'abampere', 'abamperes' ],
      [ Lang.DE ]: [ 'Biot' ]
    },
    description: {
      [ Lang.EN ]: 'CGS-EMU unit of electric current, equal to 10 amperes.',
      [ Lang.DE ]: 'CGS-EMU-Einheit der elektrischen Stromstärke, gleich 10 Ampere.'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, UnitType.NAMED, typeof biot >;
