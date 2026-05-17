import type { QuantityDef, QuantityRef } from '../../../types/def/quantity';
import { Branch, Format, Lang } from '../../../types/dict';
import { EnergyDim } from '../../../types/dimension';
import { joule } from '../../unit/si/derived/joule';

export const energy = 'energy' as QuantityRef< EnergyDim >;

export default ( {
  id: energy,
  dim: EnergyDim,
  units: [
    joule
  ],
  baseUnit: joule,
  branch: Branch.THERMODYNAMICS,
  meta: {
    symbol: [ {
      id: 'E',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'E',
        [ Format.LATEX ]: 'E'
      }
    } ],
    name: {
      [ Lang.EN ]: 'energy',
      [ Lang.DE ]: 'Energie'
    },
    description: {
      [ Lang.EN ]: 'quantity expressing the capacity of a physical system to perform work',
      [ Lang.DE ]: 'Größe, die die Fähigkeit eines physikalischen Systems ausdrückt, Arbeit zu verrichten'
    }
  }
} ) as const satisfies QuantityDef< EnergyDim, typeof energy >;
