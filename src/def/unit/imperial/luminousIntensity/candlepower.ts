import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LuminousIntensityDim } from '../../../../types/dimension';

import { candela } from '../../si/base/candela';

export const candlepower = 'cp' as UnitRef< LuminousIntensityDim, 'cp' >;

export default ( {
  type: UnitType.NAMED,
  id: candlepower,
  dim: LuminousIntensityDim,
  structure: [],
  conversion: {
    base: candela,
    factor: 0.981
  },
  prefixable: false,
  aliases: [
    'CP',
    'candlepower',
    'candlepowers'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'cp',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'cp',
        [ Format.LATEX ]: '\\mathrm{cp}'
      }
    }, {
      id: 'CP',
      format: {
        [ Format.PLAIN ]: 'CP',
        [ Format.LATEX ]: '\\mathrm{CP}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'candlepower', 'candlepowers' ],
      [ Lang.DE ]: [ 'Kerzenstärke', 'Kerzenstärken' ]
    },
    description: {
      [ Lang.EN ]: 'historical imperial unit of luminous intensity equal to 0.981 candela',
      [ Lang.DE ]: 'historische imperiale Einheit der Lichtstärke, die 0,981 Candela entspricht'
    }
  }
} ) as const satisfies UnitDef< LuminousIntensityDim, UnitType.NAMED, typeof candlepower >;
