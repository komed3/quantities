import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { PressureDim } from '../../../types/dimension';

import { bar } from '../../unit/common/pressure/bar';
import { poundForcePerSquareInch } from '../../unit/imperial/pressure/poundForcePerSquareInch';
import { pascal } from '../../unit/si/derived/pascal';

export const stress = 'stress' as QuantityRef< PressureDim >;

export default ( {
  id: stress,
  dim: PressureDim,
  units: [
    bar,
    pascal,
    poundForcePerSquareInch
  ],
  baseUnit: pascal,
  branch: Branch.MECHANICS,
  meta: {
    symbol: [ {
      id: 'sigma',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'sigma',
        [ Format.UNICODE ]: 'σ',
        [ Format.LATEX ]: '\\sigma'
      }
    }, {
      id: 'tau',
      format: {
        [ Format.PLAIN ]: 't',
        [ Format.UNICODE ]: 'τ',
        [ Format.LATEX ]: '\\tau'
      }
    } ],
    name: {
      [ Lang.EN ]: 'stress',
      [ Lang.DE ]: 'Mechanische Spannung'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the internal forces that neighboring particles of a continuous material exert on each other',
      [ Lang.DE ]: 'Größe, die die inneren Kräfte angibt, die benachbarte Partikel eines kontinuierlichen Materials aufeinander ausüben'
    }
  }
} ) as const satisfies QuantityDef< PressureDim, typeof stress >;
