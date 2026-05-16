import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const fortnight = 'fortnight' as UnitRef< TimeDim, 'fortnight' >;

export default ( {
  type: UnitType.NAMED,
  id: fortnight,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 1.2096e6
  },
  prefixable: false,
  aliases: [
    'fortnights'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'fortnight',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'fortnight',
        [ Format.LATEX ]: '\\mathrm{fortnight}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'fortnight', 'fortnights' ]
    },
    description: {
      [ Lang.EN ]: 'unit of time equal to 14 days, used in the imperial system and formerly in the UK',
      [ Lang.DE ]: 'Zeiteinheit, die 14 Tage entspricht, im imperialen System verwendet und früher im Vereinigten Königreich'
    }
  }
} ) as const satisfies UnitDef< TimeDim, UnitType.NAMED, typeof fortnight >;
