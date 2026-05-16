import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const siderealYear = 'aSid' as UnitRef< TimeDim, 'aSid' >;

export default ( {
  type: UnitType.NAMED,
  id: siderealYear,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 3.155814954e7
  },
  prefixable: false,
  aliases: [
    'sidereal year',
    'sidereal years',
    'sidereal orbital period',
    'sidereal orbital periods'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'aSid',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'a',
        [ Format.LATEX ]: '\\mathrm{a_{sid}}'
      }
    }, {
      id: 'yr',
      format: {
        [ Format.PLAIN ]: 'yr',
        [ Format.LATEX ]: '\\mathrm{yr}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'sidereal year', 'sidereal years' ],
      [ Lang.DE ]: [ 'siderisches Jahr', 'siderische Jahre' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of time, time of one Earth orbit around the Sun',
      [ Lang.DE ]: 'astronomische Einheit der Zeit, Zeit eines Erdumlaufs um die Sonne'
    }
  }
} ) as const satisfies UnitDef< TimeDim, UnitType.NAMED, typeof siderealYear >;
