import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const chain = 'chain' as UnitRef< LengthDim, 'chain' >;

export default ( {
  type: UnitType.NAMED,
  id: chain,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 20.1168
  },
  prefixable: false,
  aliases: [
    'chains',
    'ch.'
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
      id: 'ch.',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'ch.',
        [ Format.LATEX ]: '\\mathrm{ch.}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'chain', 'chains' ],
      [ Lang.DE ]: [ 'Kette', 'Ketten' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length equal to 66 feet or 20.1168 meters',
      [ Lang.DE ]: 'imperiale Längeneinheit, die 66 Fuß oder 20,1168 Meter entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof chain >;
