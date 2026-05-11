import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const lightYear = 'ly' as UnitRef< LengthDim, 'ly' >;

export default ( {
  id: lightYear,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 9.4607304725808e15
  },
  prefixable: false,
  aliases: [
    'light year',
    'light years',
    'lyr'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'ly',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'ly',
        [ Format.LATEX ]: '\\mathrm{ly}'
      }
    }, {
      id: 'lyr',
      format: {
        [ Format.PLAIN ]: 'lyr',
        [ Format.LATEX ]: '\\mathrm{lyr}'
      }
    }, {
      id: 'Lj',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'Lj',
        [ Format.LATEX ]: '\\mathrm{Lj}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'light year', 'light years' ],
      [ Lang.DE ]: [ 'Lichtjahr', 'Lichtjahre' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of length equivalent to the distance that light travels in a vacuum in one Julian year (365.25 days)',
      [ Lang.DE ]: 'astronomische Längeneinheit, die der Entfernung entspricht, die Licht in einem Vakuum in einem julianischen Jahr (365,25 Tage) zurücklegt'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof lightYear >;
