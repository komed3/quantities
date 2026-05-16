import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { ForceDim } from '../../../../types/dimension';

import { poundForce } from '../../imperial/force/poundForce';

export const kilopound = 'kip' as UnitRef< ForceDim, 'kip' >;

export default ( {
  type: UnitType.NAMED,
  id: kilopound,
  dim: ForceDim,
  structure: [],
  conversion: {
    base: poundForce,
    factor: 1e3
  },
  prefixable: false,
  aliases: [
    'kilo pound',
    'kilo pounds',
    'kilopound',
    'kilopounds'
  ],
  context: {
    system: [
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'kip',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'kip',
        [ Format.LATEX ]: '\\mathrm{kip}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'kilo-pound', 'kilo-pounds' ],
      [ Lang.DE ]: [ 'Kilopfund', 'Kilopfunde' ]
    },
    description: {
      [ Lang.EN ]: 'in the US used unit of force, equal to 1000 pounds-force',
      [ Lang.DE ]: 'in den USA verwendete Kraft-Einheit, gleich 1000 Kraftpfunde'
    }
  }
} ) as const satisfies UnitDef< ForceDim, UnitType.NAMED, typeof kilopound >;
