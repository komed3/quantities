import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { pascal } from '../../si/derived/pascal';

export const inchMercury = 'inHg' as UnitRef< PressureDim, 'inHg' >;

export default ( {
  id: inchMercury,
  dim: PressureDim,
  structure: [],
  conversion: {
    base: pascal,
    factor: 3.38639e3
  },
  prefixable: false,
  aliases: [
    'inch of mercury',
    'inches of mercury',
    '″Hg',
    '\'\'Hg'
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
      id: 'inHg',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'inHg',
        [ Format.LATEX ]: '\\mathrm{inHg}'
      }
    }, {
      id: 'prime',
      canonical: true,
      format: {
        [ Format.PLAIN ]: '″Hg',
        [ Format.LATEX ]: '\\mathrm{^{\\prime\\prime}Hg}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'inch of mercury', 'inch of mercury' ],
      [ Lang.DE ]: [ 'Zoll Quecksilber' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of pressure, defined as the pressure exerted by a column of mercury 1 inch high at the standard acceleration of gravity, approximately equal to 3.38639 kPa',
      [ Lang.DE ]: 'imperiale Druckeinheit, definiert als der Druck, der von einer Quecksilbersäule von 1 Zoll Höhe bei der Standardbeschleunigung der Schwerkraft ausgeübt wird, ungefähr gleich 3,38639 kPa'
    }
  }
} ) as const satisfies UnitDef< PressureDim, typeof inchMercury >;
