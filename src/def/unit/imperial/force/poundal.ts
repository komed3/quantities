import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { ForceDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';
import { newton } from '../../si/derived/newton';
import { foot } from '../length/foot';
import { pound } from '../mass/pound';

export const poundal = 'pdl' as UnitRef< ForceDim, 'pdl' >;

export default ( {
  id: poundal,
  dim: ForceDim,
  structure: [ {
    unit: pound,
    exp: 1
  }, {
    unit: foot,
    exp: 1
  }, {
    unit: second,
    exp: -2
  } ],
  conversion: {
    base: newton,
    factor: 0.138254954376
  },
  prefixable: false,
  aliases: [
    'poundal',
    'poundals'
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
      id: 'pdl',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'pdl',
        [ Format.LATEX ]: '\\mathrm{pdl}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'poundal', 'poundals' ],
      [ Lang.DE ]: [ 'Poundal' ]
    },
    description: {
      [ Lang.EN ]: 'imperical unit of force',
      [ Lang.DE ]: 'imperiale Kraft-Einheit'
    }
  }
} ) as const satisfies UnitDef< ForceDim, typeof poundal >;
