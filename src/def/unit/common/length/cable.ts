import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const cable = 'kbl' as UnitRef< LengthDim, 'kbl' >;

export default ( {
  type: UnitType.NAMED,
  id: cable,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 185.2
  },
  prefixable: false,
  aliases: [
    'cable',
    'cables',
    'cable length',
    'cable lengths'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'kbl',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'kbl',
        [ Format.LATEX ]: '\\mathrm{kbl}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'cable', 'cables' ],
      [ Lang.DE ]: [ 'Kabel' ]
    },
    description: {
      [ Lang.EN ]: 'nautical unit of length equal to one tenth of a nautical mile, approximately 185.2 meters',
      [ Lang.DE ]: 'nautische Längeneinheit, die einem Zehntel einer Seemeile entspricht, ungefähr 185,2 Meter'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof cable >;
