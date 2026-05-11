import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { MassDim } from '../../../types/dimension';

import { ton } from '../../unit/common/mass/ton';
import { longTon } from '../../unit/imperial/mass/longTon';
import { shortTon } from '../../unit/imperial/mass/shortTon';
import { planckMass } from '../../unit/natural/planck/planckMass';
import { gram } from '../../unit/si/base/gram';

export const mass = 'mass' as QuantityRef< MassDim >;

export default ( {
  id: mass,
  dim: MassDim,
  units: [
    gram,
    longTon,
    planckMass,
    shortTon,
    ton
  ],
  baseUnit: gram,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 'm',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'm',
        [ Format.LATEX ]: 'm'
      }
    } ],
    name: {
      [ Lang.EN ]: 'mass',
      [ Lang.DE ]: 'Masse'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the amount of matter in a physical body',
      [ Lang.DE ]: 'Größe, die die Menge an Materie in einem physischen Körper ausdrückt'
    }
  }
} ) as const satisfies QuantityDef< MassDim, typeof mass >;
