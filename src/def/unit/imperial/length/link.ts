import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const link = 'link' as UnitRef< LengthDim, 'link' >;

export default ( {
  type: UnitType.NAMED,
  id: link,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 0.201168,
  },
  prefixable: false,
  aliases: [
    'links',
    'li.',
    'l.',
    'lnk.'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'li.',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'li.',
        [ Format.LATEX ]: '\\mathrm{li.}'
      }
    }, {
      id: 'l.',
      format: {
        [ Format.PLAIN ]: 'l.',
        [ Format.LATEX ]: '\\mathrm{l.}'
      }
    }, {
      id: 'lnk.',
      format: {
        [ Format.PLAIN ]: 'lnk.',
        [ Format.LATEX ]: '\\mathrm{lnk.}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'link', 'links' ],
      [ Lang.DE ]: [ 'Link', 'Links' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length, defined as 1/100th of a chain',
      [ Lang.DE ]: 'imperiale Längeneinheit, definiert als 1/100 einer Kette'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof link >;
