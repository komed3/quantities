import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { pascal } from '../../si/derived/pascal';

export const planckPressure = 'pP' as UnitRef< PressureDim, 'pP' >;

export default ( {
  type: UnitType.NAMED,
  id: planckPressure,
  dim: PressureDim,
  structure: [],
  conversion: {
    base: pascal,
    factor: 4.633e113
  },
  prefixable: false,
  aliases: [
    'planck pressure',
    'planck pressures'
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
      id: 'pP',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'pP',
        [ Format.UNICODE ]: 'pₚ',
        [ Format.LATEX ]: 'p_{\\mathrm{P}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'sqrt(c^7/hBar*G^2)',
        [ Format.UNICODE ]: '√(c⁷/ħ·G²)',
        [ Format.LATEX ]: '\\frac{c^{7}}{\\hbar G^{2}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'planck pressure', 'planck pressures' ],
      [ Lang.DE ]: [ 'Planck-Druck', 'Planck-Drücke' ]
    },
    description: {
      [ Lang.EN ]: 'Planck unit of pressure in the system of natural units; pressure at which quantum effects of gravity become significant',
      [ Lang.DE ]: 'Planck-Einheit des Drucks im System der natürlichen Einheiten; Druck, bei dem Quanteneffekte der Gravitation signifikant werden'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof planckPressure >;
