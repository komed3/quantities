import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const tropicalYear = 'aTrop' as UnitRef< TimeDim, 'aTrop' >;

export default ( {
  type: UnitType.NAMED,
  id: tropicalYear,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 3.1556925216e7
  },
  prefixable: false,
  aliases: [
    'tropical year',
    'tropical years'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'aTrop',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'a',
        [ Format.LATEX ]: '\\mathrm{a_{trop}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'tropical year', 'tropical years' ],
      [ Lang.DE ]: [ 'tropisches Jahr', 'tropische Jahre' ]
    },
    description: {
      [ Lang.EN ]: 'common unit of time as one cycle of the seasons, equal to 365.24219 days',
      [ Lang.DE ]: 'übliche Zeiteinheit als ein Zyklus der Jahreszeiten, entspricht 365,24219 Tage'
    }
  }
} ) as const satisfies UnitDef< TimeDim, UnitType.NAMED, typeof tropicalYear >;
