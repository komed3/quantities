import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const pound = 'lb' as UnitRef< MassDim, 'lb' >;

export default ( {
  type: UnitType.NAMED,
  id: pound,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 453.59237
  },
  prefixable: false,
  aliases: [
    'pound',
    'pounds',
    'lbs'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'lb',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'lb',
        [ Format.UNICODE ]: '℔',
        [ Format.LATEX ]: '\\mathrm{lb}'
      }
    }, {
      id: 'pd',
      format: {
        [ Format.PLAIN ]: 'pd',
        [ Format.LATEX ]: '\\mathrm{pd}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'pound', 'pounds' ],
      [ Lang.DE ]: [ 'Pfund' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass, equal to 0.45359237 kilograms',
      [ Lang.DE ]: 'imperiale Masseeinheit, die 0,45359237 Kilogramm entspricht'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof pound >;
