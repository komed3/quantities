import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { ElectricCurrentDim } from '../../../../types/dimension';

import { ampere } from '../../si/base/ampere';

export const statampere = 'statA' as UnitRef< ElectricCurrentDim, 'statA' >;

export default ( {
  id: statampere,
  dim: ElectricCurrentDim,
  structure: [],
  conversion: {
    base: ampere,
    factor: 10 / 2.99792458e10
  },
  prefixable: false,
  aliases: [
    'statampere',
    'statamperes'
  ],
  context: {
    system: [
      UnitSystem.CGS,
      UnitSystem.ESU,
      UnitSystem.GAUSSIAN
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'statA',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'statA',
        [ Format.LATEX ]: '\\mathrm{statA}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'statampere', 'statamperes' ],
      [ Lang.DE ]: [ 'Statampere' ]
    },
    description: {
      [ Lang.EN ]: 'CGS-ESU and Gaussian unit of electric current',
      [ Lang.DE ]: 'CGS-ESU- / Gaußsche Einheit der Stromstärke'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof statampere >;
