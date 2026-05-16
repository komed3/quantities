import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const ounce = 'oz' as UnitRef< MassDim, 'oz' >;

export default ( {
  type: UnitType.NAMED,
  id: ounce,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 28.349523125
  },
  prefixable: false,
  aliases: [
    'ounce',
    'ounces'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'oz',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'oz',
        [ Format.LATEX ]: '\\mathrm{oz}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'ounce', 'ounces' ],
      [ Lang.DE ]: [ 'Unze', 'Unzen' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass, equal to 1/16 of a pound (approx. 28.35 g)',
      [ Lang.DE ]: 'imperiale Masseeinheit, gleich 1/16 Pfund (ca. 28,35 g)'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof ounce >;
