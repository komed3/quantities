import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const troyPound = 'lbT' as UnitRef< MassDim, 'lbT' >;

export default ( {
  type: UnitType.NAMED,
  id: troyPound,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 453.59237
  },
  prefixable: false,
  aliases: [
    'troy pound',
    'troy pounds',
    'lb t',
    'lb troy'
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
      id: 'lbT',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'lb t',
        [ Format.LATEX ]: '\\mathrm{lb\\,t}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'troy pound', 'troy pounds' ],
      [ Lang.DE ]: [ 'Troy-Pfund' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass in the troy system, equal to 12 troy ounces',
      [ Lang.DE ]: 'imperiale Masseeinheit im Troy-System, gleich 12 Troy-Unzen'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof troyPound >;
