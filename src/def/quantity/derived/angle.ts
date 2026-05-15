import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { AngleDim } from '../../../types/dimension';

import { arcminute } from '../../unit/common/angle/arcminute';
import { arcsecond } from '../../unit/common/angle/arcsecond';
import { degree } from '../../unit/common/angle/degree';
import { gon } from '../../unit/common/angle/gon';
import { radian } from '../../unit/si/derived/radian';

export const angle = 'angle' as QuantityRef< AngleDim >;

export default ( {
  id: angle,
  dim: AngleDim,
  units: [
    arcminute,
    arcsecond,
    degree,
    gon,
    radian
  ],
  baseUnit: radian,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 'alpha',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'alpha',
        [ Format.UNICODE ]: 'α',
        [ Format.LATEX ]: '\\alpha'
      }
    }, {
      id: 'beta',
      format: {
        [ Format.PLAIN ]: 'beta',
        [ Format.UNICODE ]: 'β',
        [ Format.LATEX ]: '\\beta'
      }
    }, {
      id: 'gamma',
      format: {
        [ Format.PLAIN ]: 'gamma',
        [ Format.UNICODE ]: 'γ',
        [ Format.LATEX ]: '\\gamma'
      }
    }, {
      id: 'theta',
      format: {
        [ Format.PLAIN ]: 'theta',
        [ Format.UNICODE ]: 'θ',
        [ Format.LATEX ]: '\\theta'
      }
    }, {
      id: 'phi',
      format: {
        [ Format.PLAIN ]: 'phi',
        [ Format.UNICODE ]: 'φ',
        [ Format.LATEX ]: '\\varphi'
      }
    }, {
      id: 'angle',
      format: {
        [ Format.PLAIN ]: 'angle',
        [ Format.UNICODE ]: '∠',
        [ Format.LATEX ]: '\\angle'
      }
    } ],
    name: {
      [ Lang.EN ]: 'angle',
      [ Lang.DE ]: 'Winkel'
    },
    description: {
      [ Lang.EN ]: 'figure formed by two rays, called the sides of the angle, sharing a common endpoint, called the vertex of the angle',
      [ Lang.DE ]: 'Figur, die durch zwei Strahlen gebildet wird, die als Seiten des Winkels bezeichnet werden und einen gemeinsamen Endpunkt, den Scheitelpunkt des Winkels, haben'
    }
  }
} ) as const satisfies QuantityDef< AngleDim, typeof angle >;
