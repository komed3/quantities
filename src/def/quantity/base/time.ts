import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';

import { Branch } from '../../../types/common';
import { TimeDim } from '../../../types/dimension';

import { second } from '../../unit/si/base/second';

export const time = 'time' as QuantityRef< TimeDim >;

export default ( {
  id: time,
  dim: TimeDim,
  units: [
    second
  ],
  baseUnit: second,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 't',
      canonical: true,
      format: {
        plain: 't',
        latex: 't'
      }
    } ],
    name: {
      en: 'time',
      de: 'Zeit'
    },
    description: {
      en: 'dimension in which events can be ordered from the past through the present into the future',
      de: 'Dimension, die Ereignisse von der Vergangenheit in die Zukunft ordnet'
    }
  }
} ) as const satisfies QuantityDef< TimeDim, typeof time >;
