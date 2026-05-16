import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { FrequencyDim } from '../../../types/dimension';

import { planckFrequency } from '../../unit/natural/planck/planckFrequency';
import { hertz } from '../../unit/si/derived/hertz';

export const frequency = 'frequency' as QuantityRef< FrequencyDim >;

export default ( {
  id: frequency,
  dim: FrequencyDim,
  units: [
    hertz,
    planckFrequency
  ],
  baseUnit: hertz,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 'f',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'f',
        [ Format.LATEX ]: 'f'
      }
    }, {
      id: 'nu',
      format: {
        [ Format.PLAIN ]: 'v',
        [ Format.UNICODE ]: 'ν',
        [ Format.LATEX ]: '\\nu'
      }
    } ],
    name: {
      [ Lang.EN ]: 'frequency',
      [ Lang.DE ]: 'Frequenz'
    },
    description: {
      [ Lang.EN ]: 'number of occurrences of a repeating event per unit of time',
      [ Lang.DE ]: 'Anzahl der Wiederholungen eines Vorgangs pro Zeiteinheit'
    }
  }
} ) as const satisfies QuantityDef< FrequencyDim, typeof frequency >;
