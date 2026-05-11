import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { ElectricCurrentDim } from '../../../types/dimension';

import { biot } from '../../unit/cgs/emu/biot';
import { statampere } from '../../unit/cgs/esu/statampere';
import { atomicCurrent } from '../../unit/natural/atomic/atomicCurrent';
import { planckCurrent } from '../../unit/natural/planck/planckCurrent';
import { ampere } from '../../unit/si/base/ampere';

export const electricCurrent = 'electricCurrent' as QuantityRef< ElectricCurrentDim >;

export default ( {
  id: electricCurrent,
  dim: ElectricCurrentDim,
  units: [
    ampere,
    atomicCurrent,
    biot,
    planckCurrent,
    statampere
  ],
  baseUnit: ampere,
  branch: Branch.ELECTROMAGNETISM,
  meta: {
    symbol: [ {
      id: 'I',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'I',
        [ Format.LATEX ]: 'I'
      }
    } ],
    name: {
      [ Lang.EN ]: 'electric current',
      [ Lang.DE ]: 'Elektrische Stromstärke'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the flow of electric charge, defined as the amount of charge passing through a surface per unit time',
      [ Lang.DE ]: 'Größe, die den Fluss von elektrischem Ladung ausdrückt, definiert als die Menge an Ladung, die pro Zeiteinheit durch eine Fläche hindurchgeht'
    }
  }
} ) as const satisfies QuantityDef< ElectricCurrentDim, typeof electricCurrent >;
