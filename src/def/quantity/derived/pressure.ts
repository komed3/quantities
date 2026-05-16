import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { PressureDim } from '../../../types/dimension';

import { barye } from '../../unit/cgs/barye';
import { bar } from '../../unit/common/pressure/bar';
import { meterWater } from '../../unit/common/pressure/meterWater';
import { millimeterMercury } from '../../unit/common/pressure/millimeterMercury';
import { standardAtmosphere } from '../../unit/common/pressure/standardAtmosphere';
import { technicalAtmosphere } from '../../unit/common/pressure/technicalAtmosphere';
import { torr } from '../../unit/common/pressure/torr';
import { inchMercury } from '../../unit/imperial/pressure/inchMercury';
import { poundForcePerSquareInch } from '../../unit/imperial/pressure/poundForcePerSquareInch';
import { planckPressure } from '../../unit/natural/planck/planckPressure';
import { pascal } from '../../unit/si/derived/pascal';

export const pressure = 'pressure' as QuantityRef< PressureDim >;

export default ( {
  id: pressure,
  dim: PressureDim,
  units: [
    bar,
    barye,
    inchMercury,
    meterWater,
    millimeterMercury,
    pascal,
    planckPressure,
    poundForcePerSquareInch,
    standardAtmosphere,
    technicalAtmosphere,
    torr
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
    }, {
      id: 'P',
      format: {
        [ Format.PLAIN ]: 'P',
        [ Format.LATEX ]: 'P'
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
