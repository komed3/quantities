import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { ForceDim } from '../../../types/dimension';

import { dyne } from '../../unit/cgs/dyne';
import { kilopond } from '../../unit/common/force/kilopond';
import { poundal } from '../../unit/imperial/force/poundal';
import { poundForce } from '../../unit/imperial/force/poundForce';
import { atomicForce } from '../../unit/natural/atomic/atomicForce';
import { planckForce } from '../../unit/natural/planck/planckForce';
import { newton } from '../../unit/si/derived/newton';
import { kilopound } from '../../unit/usc/force/kilopound';

export const force = 'force' as QuantityRef< ForceDim >;

export default ( {
  id: force,
  dim: ForceDim,
  units: [
    atomicForce,
    dyne,
    kilopond,
    kilopound,
    newton,
    planckForce,
    poundal,
    poundForce
  ],
  baseUnit: newton,
  branch: Branch.MECHANICS,
  meta: {
    symbol: [ {
      id: 'F',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'F',
        [ Format.LATEX ]: 'F'
      }
    }, {
      id: 'K',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'K',
        [ Format.LATEX ]: 'K'
      }
    } ],
    name: {
      [ Lang.EN ]: 'force',
      [ Lang.DE ]: 'Kraft'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the interaction between objects that causes a change in motion or shape',
      [ Lang.DE ]: 'Größe, die die Wechselwirkung zwischen Objekten ausdrückt, die eine Änderung der Bewegung oder Form verursacht'
    }
  }
} ) as const satisfies QuantityDef< ForceDim, typeof force >;
