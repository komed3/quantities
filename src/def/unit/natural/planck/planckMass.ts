import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const planckMass = 'mP' as UnitRef< MassDim, 'mP' >;

export default ( {
  type: UnitType.NAMED,
  id: planckMass,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 2.17643424e-5,
    uncertainty: 1.1e-5
  },
  prefixable: false,
  aliases: [
    'planck mass',
    'planck masses'
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
      id: 'mP',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'mP',
        [ Format.UNICODE ]: 'mₚ',
        [ Format.LATEX ]: 'm_{\\mathrm{P}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'sqrt(hBar*c/G)',
        [ Format.UNICODE ]: '√(ħ·c/G)',
        [ Format.LATEX ]: '\\sqrt{\\frac{\\hbar\\,c}{G}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'planck mass', 'planck masses' ],
      [ Lang.DE ]: [ 'Planck-Mass', 'Planck-Massen' ]
    },
    description: {
      [ Lang.EN ]: 'Planck unit of mass in the system of natural units; mass at which quantum effects of gravity become significant',
      [ Lang.DE ]: 'Planck-Einheit der Masse im System der natürlichen Einheiten; Masse, bei der Quanteneffekte der Gravitation signifikant werden'
    }
  }
} ) as const satisfies UnitDef< MassDim, UnitType.NAMED, typeof planckMass >;
