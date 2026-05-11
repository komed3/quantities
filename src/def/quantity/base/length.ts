import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { LengthDim } from '../../../types/dimension';

import { astronomicalUnit } from '../../unit/astronomical/length/astronomicalUnit';
import { earthRadius } from '../../unit/astronomical/length/earthRadius';
import { lightSecond } from '../../unit/astronomical/length/lightSecond';
import { lightYear } from '../../unit/astronomical/length/lightYear';
import { nominalEarthRadius } from '../../unit/astronomical/length/nominalEarthRadius';
import { parsec } from '../../unit/astronomical/length/parsec';
import { solarRadius } from '../../unit/astronomical/length/solarRadius';
import { planckLength } from '../../unit/natural/planck/planckLength';
import { meter } from '../../unit/si/base/meter';

export const length = 'length' as QuantityRef< LengthDim >;

export default ( {
  id: length,
  dim: LengthDim,
  units: [
    astronomicalUnit,
    earthRadius,
    lightSecond,
    lightYear,
    meter,
    nominalEarthRadius,
    parsec,
    planckLength,
    solarRadius
  ],
  baseUnit: meter,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 'l',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'l',
        [ Format.LATEX ]: 'l'
      }
    }, {
      id: 's',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 's',
        [ Format.LATEX ]: 's'
      }
    } ],
    name: {
      [ Lang.EN ]: 'length',
      [ Lang.DE ]: 'Länge'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the extent of an object or the distance between two points',
      [ Lang.DE ]: 'Größe, die das Ausmaß eines Objekts oder die Entfernung zwischen zwei Punkten ausdrückt'
    }
  }
} ) as const satisfies QuantityDef< LengthDim, typeof length >;
