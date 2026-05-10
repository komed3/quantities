import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const shake = 'shake' as UnitRef< TimeDim, 'shake' >;

export default ( {
  id: shake,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 10e-8
  },
  prefixable: false,
  aliases: [
    'shakes'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'shake',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'shake',
        [ Format.LATEX ]: '\\mathrm{shake}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'shake', 'shakes' ],
      [ Lang.DE ]: [ 'Shake' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of time used in nuclear physics, equal to 10 nanoseconds',
      [ Lang.DE ]: 'historische Zeiteinheit, die in der Kernphysik verwendet wird, entspricht 10 Nanosekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof shake >;
