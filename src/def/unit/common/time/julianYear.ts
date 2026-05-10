import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const julianYear = 'julianYear' as UnitRef< TimeDim, 'julianYear' >;

export default ( {
  id: julianYear,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 3.15576e7
  },
  prefixable: false,
  aliases: [
    'julian years'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'aJul',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'a',
        [ Format.LATEX ]: '\\mathrm{a_{jul}}'
      }
    }, {
      id: 'yJul',
      format: {
        [ Format.PLAIN ]: 'y',
        [ Format.LATEX ]: '\\mathrm{y_{jul}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'julian year', 'julian years' ],
      [ Lang.DE ]: [ 'julianisches Jahr', 'julianische Jahre' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of time, equal to 365.25 days',
      [ Lang.DE ]: 'historische Einheit der Zeit, entspricht 365,25 Tage'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof julianYear >;
