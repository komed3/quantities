import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { SolidAngleDim } from '../../../../types/dimension';

import { steradian } from '../../si/derived/steradian';

export const squareDegree = 'sqDeg' as UnitRef< SolidAngleDim, 'sqDeg' >;

export default ( {
  type: UnitType.NAMED,
  id: squareDegree,
  dim: SolidAngleDim,
  structure: [],
  conversion: {
    base: steradian,
    factor: ( Math.PI / 180 ) ** 2
  },
  prefixable: false,
  aliases: [
    'square degree',
    'square degrees',
    'deg2',
    'sq deg'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'deg2',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'deg^2',
        [ Format.UNICODE ]: 'deg²',
        [ Format.LATEX ]: '\\mathrm{deg^{2}}'
      }
    }, {
      id: 'sqDeg',
      format: {
        [ Format.PLAIN ]: 'sq. deg.',
        [ Format.LATEX ]: '\\mathrm{sq.\\,deg.}'
      }
    }, {
      id: 'circ',
      format: {
        [ Format.PLAIN ]: '°2',
        [ Format.UNICODE ]: '(°)²',
        [ Format.LATEX ]: '(^\\circ)^{2}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'square degree', 'square degrees' ],
      [ Lang.DE ]: [ 'Quadratgrad' ]
    },
    description: {
      [ Lang.EN ]: 'non-SI unit of solid angle, defined as the solid angle subtended by a square of side one degree',
      [ Lang.DE ]: 'Nicht-SI-Einheit des Raumwinkels, definiert als der Raumwinkel, der von einem Quadrat mit einer Seitenlänge von einem Grad eingeschlossen wird'
    }
  }
} ) as const satisfies UnitDef< SolidAngleDim, UnitType.NAMED, typeof squareDegree >;
