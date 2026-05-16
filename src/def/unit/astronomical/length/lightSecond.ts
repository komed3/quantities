import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const lightSecond = 'ls' as UnitRef< LengthDim, 'ls' >;

export default ( {
  type: UnitType.NAMED,
  id: lightSecond,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 2.99792458e8
  },
  prefixable: false,
  aliases: [
    'light second',
    'light seconds'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'ls',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'ls',
        [ Format.LATEX ]: '\\mathrm{ls}'
      }
    }, {
      id: 'Ls',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'Ls',
        [ Format.LATEX ]: '\\mathrm{Ls}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'light second', 'light seconds' ],
      [ Lang.DE ]: [ 'Lichtsekunde', 'Lichtsekunden' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of length equivalent to the distance that light travels in a vacuum in one secons',
      [ Lang.DE ]: 'astronomische Längeneinheit, die der Entfernung entspricht, die Licht in einem Vakuum in einer Sekunde zurücklegt'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof lightSecond >;
