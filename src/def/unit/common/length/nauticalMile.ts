import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const nauticalMile = 'nmi' as UnitRef< LengthDim, 'nmi' >;

export default ( {
  type: UnitType.NAMED,
  id: nauticalMile,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 1852
  },
  prefixable: false,
  aliases: [
    'nautical mile',
    'nautical miles',
    'NM'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'nmi',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'nmi',
        [ Format.LATEX ]: '\\mathrm{nmi}'
      }
    }, {
      id: 'NM',
      format: {
        [ Format.PLAIN ]: 'NM',
        [ Format.LATEX ]: '\\mathrm{NM}'
      }
    }, {
      id: 'M',
      deprecated: true,
      format: {
        [ Format.PLAIN ]: 'M',
        [ Format.LATEX ]: '\\mathrm{M}'
      }
    }, {
      id: 'nm',
      deprecated: true,
      format: {
        [ Format.PLAIN ]: 'nm',
        [ Format.LATEX ]: '\\mathrm{nm}'
      }
    }, {
      id: 'sm',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'sm',
        [ Format.LATEX ]: '\\mathrm{sm}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'nautical mile', 'nautical miles' ],
      [ Lang.DE ]: [ 'Seemeile', 'Seemeilen' ]
    },
    description: {
      [ Lang.EN ]: 'nautical unit of length equal to 1,852 meters or approximately 1.15078 miles',
      [ Lang.DE ]: 'nautische Längeneinheit, die 1.852 Meter oder ungefähr 1,15078 Meilen entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof nauticalMile >;
