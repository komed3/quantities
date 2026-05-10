import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const year = 'year' as UnitRef< TimeDim, 'year' >;

export default ( {
  id: year,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 3.1556952e7
  },
  prefixable: false,
  aliases: [
    'years',
    'gregorian year',
    'gregorian years'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE,
    si: UnitSIType.ACCEPTED
  },
  meta: {
    symbol: [ {
      id: 'a',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'a',
        [ Format.LATEX ]: '\\mathrm{a}'
      }
    }, {
      id: 'yr',
      format: {
        [ Format.PLAIN ]: 'yr',
        [ Format.LATEX ]: '\\mathrm{yr}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'year', 'years' ],
      [ Lang.DE ]: [ 'Jahr', 'Jahre' ]
    },
    description: {
      [ Lang.EN ]: 'SI accepted unit of time, equal to 365.2425 days',
      [ Lang.DE ]: 'SI zugelassene Einheit der Zeit, entspricht 365,2425 Tage'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof year >;
