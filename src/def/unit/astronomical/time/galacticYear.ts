import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const galacticYear = 'gal' as UnitRef< TimeDim, 'gal' >;

export default ( {
  type: UnitType.NAMED,
  id: galacticYear,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 7.25328e15
  },
  prefixable: false,
  aliases: [
    'galactic year',
    'galactic years',
    'cosmic year',
    'cosmic years'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'gal',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'gal',
        [ Format.LATEX ]: '\\mathrm{gal}'
      }
    }, {
      id: 'GJ',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'GJ',
        [ Format.LATEX ]: '\\mathrm{GJ}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'galactic year', 'galactic years' ],
      [ Lang.DE ]: [ 'galaktisches Jahr', 'galaktische Jahre' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of time corresponding to the duration of a complete orbit of the Sun around the center of the Milky Way',
      [ Lang.DE ]: 'astronomische Einheit der Zeit, ensprechend der Dauer einer vollständigen Umrundung der Sonne um das Zentrum der Milchstraße'
    }
  }
} ) as const satisfies UnitDef< TimeDim, UnitType.NAMED, typeof galacticYear >;
