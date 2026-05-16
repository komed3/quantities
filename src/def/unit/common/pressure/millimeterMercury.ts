import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { pascal } from '../../si/derived/pascal';

export const millimeterMercury = 'mmHg' as UnitRef< PressureDim, 'mmHg' >;

export default ( {
  type: UnitType.NAMED,
  id: millimeterMercury,
  dim: PressureDim,
  structure: [],
  conversion: {
    base: pascal,
    factor: 133.322
  },
  prefixable: false,
  aliases: [
    'millimeter of mercury',
    'millimeters of mercury',
    'mm Hg'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'mmHg',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'mmHg',
        [ Format.LATEX ]: '\\mathrm{mmHg}'
      }
    }, {
      id: 'mm_Hg',
      format: {
        [ Format.PLAIN ]: 'mm Hg',
        [ Format.LATEX ]: '\\mathrm{mm\\,Hg}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'millimeter of mercury', 'millimeters of mercury' ],
      [ Lang.DE ]: [ 'Millimeter Quecksilbersäule' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of pressure, defined as the pressure exerted by a column of mercury 1 millimeter high at the standard acceleration of gravity, approximately equal to 133.322 Pa',
      [ Lang.DE ]: 'historische Druckeinheit, definiert als der Druck, der von einer Quecksilbersäule von 1 Millimeter Höhe bei der Standardbeschleunigung der Schwerkraft ausgeübt wird, ungefähr gleich 133,322 Pa'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof millimeterMercury >;
