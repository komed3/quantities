import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { PressureDim } from '../../../types/dimension';

import { barye } from '../../unit/cgs/barye';
import { pascal } from '../../unit/si/derived/pascal';

export const pressure = 'pressure' as QuantityRef< PressureDim >;

export default ( {
  id: pressure,
  dim: PressureDim,
  units: [
    pascal,
    barye
  ],
  baseUnit: pascal,
  branch: Branch.MECHANICS,
  meta: {
    symbol: [ {
      id: 'p',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'p',
        [ Format.LATEX ]: 'p'
      }
    } ],
    name: {
      [ Lang.EN ]: 'pressure',
      [ Lang.DE ]: 'Druck'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the force applied perpendicular to the surface of an object per unit area',
      [ Lang.DE ]: 'Größe, die die auf eine Oberfläche senkrecht wirkende Kraft pro Flächeneinheit angibt'
    }
  }
} ) as const satisfies QuantityDef< PressureDim, typeof pressure >;
