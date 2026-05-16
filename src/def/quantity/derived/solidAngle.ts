import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { SolidAngleDim } from '../../../types/dimension';

import { squareDegree } from '../../unit/common/solidAngle/squareDegree';
import { steradian } from '../../unit/si/derived/steradian';

export const solidAngle = 'solidAngle' as QuantityRef< SolidAngleDim >;

export default ( {
  id: solidAngle,
  dim: SolidAngleDim,
  units: [
    squareDegree,
    steradian
  ],
  baseUnit: steradian,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 'omega',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Omega',
        [ Format.UNICODE ]: 'Ω',
        [ Format.LATEX ]: '\\Omega'
      }
    }, {
      id: 'omega_lower',
      format: {
        [ Format.PLAIN ]: 'w',
        [ Format.UNICODE ]: 'ω',
        [ Format.LATEX ]: '\\omega'
      }
    }, {
      id: 'angle',
      format: {
        [ Format.PLAIN ]: 'angle',
        [ Format.UNICODE ]: '∢',
        [ Format.LATEX ]: '\\sphericalangle'
      }
    } ],
    name: {
      [ Lang.EN ]: 'solid angle',
      [ Lang.DE ]: 'Raumwinkel'
    },
    description: {
      [ Lang.EN ]: 'two-dimensional angle in three-dimensional space that an object subtends at a point',
      [ Lang.DE ]: 'zweidimensionaler Winkel im dreidimensionalen Raum, den ein Objekt an einem Punkt einschließt'
    }
  }
} ) as const satisfies QuantityDef< SolidAngleDim, typeof solidAngle >;
