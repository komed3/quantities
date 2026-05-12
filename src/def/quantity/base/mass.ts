import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { MassDim } from '../../../types/dimension';

import { earthMass } from '../../unit/astronomical/mass/earthMass';
import { solarMass } from '../../unit/astronomical/mass/solarMass';
import { carat } from '../../unit/common/mass/carat';
import { ton } from '../../unit/common/mass/ton';
import { dram } from '../../unit/imperial/mass/dram';
import { grain } from '../../unit/imperial/mass/grain';
import { longCwt } from '../../unit/imperial/mass/longCwt';
import { longTon } from '../../unit/imperial/mass/longTon';
import { ounce } from '../../unit/imperial/mass/ounce';
import { pennyweight } from '../../unit/imperial/mass/pennyweight';
import { pound } from '../../unit/imperial/mass/pound';
import { stone } from '../../unit/imperial/mass/stone';
import { troyOunce } from '../../unit/imperial/mass/troyOunce';
import { troyPound } from '../../unit/imperial/mass/troyPound';
import { atomicMass } from '../../unit/natural/atomic/atomicMass';
import { planckMass } from '../../unit/natural/planck/planckMass';
import { gram } from '../../unit/si/base/gram';
import { shortCwt } from '../../unit/usc/mass/shortCwt';
import { shortTon } from '../../unit/usc/mass/shortTon';

export const mass = 'mass' as QuantityRef< MassDim >;

export default ( {
  id: mass,
  dim: MassDim,
  units: [
    atomicMass,
    carat,
    dram,
    earthMass,
    grain,
    gram,
    longCwt,
    longTon,
    ounce,
    pennyweight,
    planckMass,
    pound,
    shortCwt,
    shortTon,
    solarMass,
    stone,
    ton,
    troyOunce,
    troyPound
  ],
  baseUnit: gram,
  branch: Branch.COMMON,
  meta: {
    symbol: [ {
      id: 'm',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'm',
        [ Format.LATEX ]: 'm'
      }
    } ],
    name: {
      [ Lang.EN ]: 'mass',
      [ Lang.DE ]: 'Masse'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the amount of matter in a physical body',
      [ Lang.DE ]: 'Größe, die die Menge an Materie in einem physischen Körper ausdrückt'
    }
  }
} ) as const satisfies QuantityDef< MassDim, typeof mass >;
