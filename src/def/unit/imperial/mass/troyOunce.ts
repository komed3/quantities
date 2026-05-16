import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const troyOunce = 'ozT' as UnitRef< MassDim, 'ozT' >;

export default ( {
  type: UnitType.NAMED,
  id: troyOunce,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 31.1034768
  },
  prefixable: false,
  aliases: [
    'troy ounce',
    'troy ounces',
    'oz t',
    'oz troy'
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
      id: 'ozT',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'oz t',
        [ Format.LATEX ]: '\\mathrm{oz\\,t}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'troy ounce', 'troy ounces' ],
      [ Lang.DE ]: [ 'Troy-Unze', 'Troy-Unzen' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass in the troy system, equal to 480 grains',
      [ Lang.DE ]: 'imperiale Masseeinheit im Troy-System, gleich 480 Grains'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof troyOunce >;
