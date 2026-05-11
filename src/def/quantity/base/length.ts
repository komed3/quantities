import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { LengthDim } from '../../../types/dimension';

import { astronomicalUnit } from '../../unit/astronomical/length/astronomicalUnit';
import { earthRadius } from '../../unit/astronomical/length/earthRadius';
import { lightSecond } from '../../unit/astronomical/length/lightSecond';
import { lightYear } from '../../unit/astronomical/length/lightYear';
import { lunarDistance } from '../../unit/astronomical/length/lunarDistance';
import { nominalEarthRadius } from '../../unit/astronomical/length/nominalEarthRadius';
import { parsec } from '../../unit/astronomical/length/parsec';
import { solarRadius } from '../../unit/astronomical/length/solarRadius';
import { angstrom } from '../../unit/common/length/angstrom';
import { cable } from '../../unit/common/length/cable';
import { nauticalMile } from '../../unit/common/length/nauticalMile';
import { foot } from '../../unit/imperial/length/foot';
import { inch } from '../../unit/imperial/length/inch';
import { mile } from '../../unit/imperial/length/mile';
import { thou } from '../../unit/imperial/length/thou';
import { yard } from '../../unit/imperial/length/yard';
import { planckLength } from '../../unit/natural/planck/planckLength';
import { meter } from '../../unit/si/base/meter';

export const length = 'length' as QuantityRef< LengthDim >;

export default ( {
  id: length,
  dim: LengthDim,
  units: [
    angstrom,
    astronomicalUnit,
    cable,
    earthRadius,
    foot,
    inch,
    lightSecond,
    lightYear,
    lunarDistance,
    meter,
    mile,
    nauticalMile,
    nominalEarthRadius,
    parsec,
    planckLength,
    solarRadius,
    thou,
    yard
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
