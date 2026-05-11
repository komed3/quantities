import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { LengthDim } from '../../../types/dimension';

import { meter } from '../../unit/si/base/meter';

export const length = 'length' as QuantityRef< LengthDim >;

export default ( {
  id: length,
  dim: LengthDim,
  units: [
    meter
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
