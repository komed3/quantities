import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const electronRadius = 'rElecton' as UnitRef< LengthDim, 'rElecton' >;

export default ( {
  type: UnitType.NAMED,
  id: electronRadius,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 2.81794028531e-15,
    uncertainty: 4.7e-10
  },
  prefixable: false,
  aliases: [
    'electron radius',
    'electron radii',
    'electron radien',
    'classical electron radius',
    'classical electron radii',
    'classical electron radien'
  ],
  context: {
    system: [
      UnitSystem.NATURAL,
      UnitSystem.ATOMIC
    ],
    status: UnitStatus.ACTIVE,
    constant: true
  },
  meta: {
    symbol: [ {
      id: 'rElectron',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'rE',
        [ Format.UNICODE ]: 'rₑ',
        [ Format.LATEX ]: 'r_{\\mathrm{e}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: '(1/(4*pi*epsilon0))*(e^2/(mE*c^2))',
        [ Format.UNICODE ]: '(1/(4π·ε₀))·(e²/(mₑ·c²))',
        [ Format.LATEX ]: '\\frac{1}{4\\pi\\varepsilon_{0}}\\,\\frac{e^{2}}{m_{\\mathrm{e}}c^{2}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'classical electron radius', 'classical electron radii' ],
      [ Lang.DE ]: [ 'klassischer Elektronenradius', 'klassische Elektronenradien' ]
    },
    description: {
      [ Lang.EN ]: 'unit of length equal to the classical electron radius',
      [ Lang.DE ]: 'Längeneinheit gleich dem klassischen Elektronenradius'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof electronRadius >;
