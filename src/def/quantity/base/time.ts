import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { TimeDim } from '../../../types/dimension';

import { galacticYear } from '../../unit/astronomical/galacticYear';
import { siderealDay } from '../../unit/astronomical/siderealDay';
import { siderealYear } from '../../unit/astronomical/siderealYear';
import { day } from '../../unit/common/time/day';
import { hour } from '../../unit/common/time/hour';
import { julianYear } from '../../unit/common/time/julianYear';
import { minute } from '../../unit/common/time/minute';
import { shake } from '../../unit/common/time/shake';
import { svedberg } from '../../unit/common/time/svedberg';
import { tropicalYear } from '../../unit/common/time/tropicalYear';
import { week } from '../../unit/common/time/week';
import { year } from '../../unit/common/time/year';
import { fortnight } from '../../unit/imperial/fortnight';
import { atomicTime } from '../../unit/natural/atomic/atomicTime';
import { planckTime } from '../../unit/natural/planck/planckTime';
import { second } from '../../unit/si/base/second';

export const time = 'time' as QuantityRef< TimeDim >;

export default ( {
  id: time,
  dim: TimeDim,
  units: [
    atomicTime,
    day,
    hour,
    fortnight,
    galacticYear,
    julianYear,
    minute,
    planckTime,
    second,
    shake,
    siderealDay,
    siderealYear,
    svedberg,
    tropicalYear,
    week,
    year
  ],
  baseUnit: second,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 't',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 't',
        [ Format.LATEX ]: 't'
      }
    } ],
    name: {
      [ Lang.EN ]: 'time',
      [ Lang.DE ]: 'Zeit'
    },
    description: {
      [ Lang.EN ]: 'dimension in which events can be ordered from the past through the present into the future',
      [ Lang.DE ]: 'Dimension, die Ereignisse von der Vergangenheit in die Zukunft ordnet'
    }
  }
} ) as const satisfies QuantityDef< TimeDim, typeof time >;
