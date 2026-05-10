import type { TimeDim } from '../../../types/dimension';
import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';

export const time = 'time' as QuantityRef< TimeDim >;

export default ( {
  id: time,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  units: [],
  baseUnit: undefined,
  branch: 'common',
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
