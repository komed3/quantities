import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { LuminousIntensityDim } from '../../../types/dimension';

import { carcel } from '../../unit/common/luminousIntensity/carcel';
import { hefnerLamp } from '../../unit/common/luminousIntensity/hefnerLamp';
import { candlepower } from '../../unit/imperial/luminousIntensity/candlepower';
import { candela } from '../../unit/si/base/candela';

export const luminousIntensity = 'luminousIntensity' as QuantityRef< LuminousIntensityDim >;

export default ( {
  id: luminousIntensity,
  dim: LuminousIntensityDim,
  units: [
    candela,
    candlepower,
    carcel,
    hefnerLamp
  ],
  baseUnit: candela,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 'Iv',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Iv',
        [ Format.LATEX ]: 'I_{\\mathrm{v}}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'luminous intensity',
      [ Lang.DE ]: 'Lichtstärke'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the amount of light emitted by a source in a particular direction, measured in candelas',
      [ Lang.DE ]: 'Größe, die die Menge an Licht ausdrückt, die von einer Quelle in eine bestimmte Richtung emittiert wird, gemessen in Candela'
    }
  }
} ) as const satisfies QuantityDef< LuminousIntensityDim, typeof luminousIntensity >;
