import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { ForceDim } from '../../../../types/dimension';

import { newton } from '../../si/derived/newton';

export const poundForce = 'lbf' as UnitRef< ForceDim, 'lbf' >;

export default ( {
  id: poundForce,
  dim: ForceDim,
  structure: [],
  conversion: {
    base: newton,
    factor: 4.4482216152605
  },
  prefixable: false,
  aliases: [
    'pound of force',
    'pounds of force',
    'pound force'
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
      id: 'lbf',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'lbf',
        [ Format.LATEX ]: '\\mathrm{lbf}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'pound of force', 'pounds of force' ],
      [ Lang.DE ]: [ 'Kraftpfund' ]
    },
    description: {
      [ Lang.EN ]: 'imperical unit of force, used in the US by engineerers',
      [ Lang.DE ]: 'imperiale Kraft-Einheit, die in den USA von Ingenieuren verwendet wird'
    }
  }
} ) as const satisfies UnitDef< ForceDim, typeof poundForce >;
