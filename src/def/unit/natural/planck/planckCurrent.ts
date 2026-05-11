import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { ElectricCurrentDim } from '../../../../types/dimension';

import { ampere } from '../../si/base/ampere';

export const planckCurrent = 'IP' as UnitRef< ElectricCurrentDim, 'IP' >;

export default ( {
  id: planckCurrent,
  dim: ElectricCurrentDim,
  structure: [],
  conversion: {
    base: ampere,
    factor: 3.479e25
  },
  prefixable: false,
  aliases: [
    'planck current',
    'planck currents'
  ],
  context: {
    system: [
      UnitSystem.NATURAL,
      UnitSystem.PLANCK
    ],
    status: UnitStatus.ACTIVE,
    constant: true
  },
  meta: {
    symbol: [ {
      id: 'IP',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'IP',
        [ Format.UNICODE ]: 'Iₚ',
        [ Format.LATEX ]: 'I_{\\mathrm{P}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'sqrt(c^6*4*pi*epsilon0/G)',
        [ Format.UNICODE ]: '√(c⁶·4π·ε₀/G)',
        [ Format.LATEX ]: '\\sqrt{\\frac{c^{6}4\\pi\\varepsilon_{0}}{G}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'planck current', 'planck currents' ],
      [ Lang.DE ]: [ 'Planck-Strom', 'Planck-Ströme' ]
    },
    description: {
      [ Lang.EN ]: 'Planck unit of electric current in the system of natural units, highest meaningful electric current',
      [ Lang.DE ]: 'Planck-Einheit des elektrischen Stroms im System der natürlichen Einheiten, höchste sinnvolle elektrische Stromstärke'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof planckCurrent >;
