import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { AmountOfSubstanceDim } from '../../../types/dimension';

import { mole } from '../../unit/si/base/mole';

export const amountOfSubstance = 'amountOfSubstance' as QuantityRef< AmountOfSubstanceDim >;

export default ( {
  id: amountOfSubstance,
  dim: AmountOfSubstanceDim,
  units: [
    mole
  ],
  baseUnit: mole,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 'n',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'n',
        [ Format.LATEX ]: 'n'
      }
    } ],
    name: {
      [ Lang.EN ]: 'amount of substance',
      [ Lang.DE ]: 'Stoffmenge'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the amount of substance, defined as the number of elementary entities (atoms, molecules, ions, etc.) in a sample',
      [ Lang.DE ]: 'Größe, die die Stoffmenge ausdrückt, definiert als die Anzahl der Elementarteilchen (Atome, Moleküle, Ionen usw.) in einer Probe'
    }
  }
} ) as const satisfies QuantityDef< AmountOfSubstanceDim, typeof amountOfSubstance >;
