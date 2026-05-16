import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { pascal } from '../../si/derived/pascal';

export const torr = 'Torr' as UnitRef< PressureDim, 'Torr' >;

export default ( {
  type: UnitType.NAMED,
  id: torr,
  dim: PressureDim,
  structure: [],
  conversion: {
    base: pascal,
    factor: 1.01356e5 / 760
  },
  prefixable: false,
  aliases: [
    'torr',
    'torrs'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.OBSOLETE
  },
  deprecated: {
    replacement: pascal
  },
  meta: {
    symbol: [ {
      id: 'Torr',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Torr',
        [ Format.LATEX ]: '\\mathrm{Torr}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'torr', 'torrs' ],
      [ Lang.DE ]: [ 'Torr' ]
    },
    description: {
      [ Lang.EN ]: 'obsolete unit of pressure, defined as 1/760 of a standard atmosphere, approximately equal to 133.322 Pa',
      [ Lang.DE ]: 'veraltete Druckeinheit, definiert als 1/760 eines Standardatmosphäre, ungefähr gleich 133,322 Pa'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof torr >;
