import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { FrequencyDim } from '../../../../types/dimension';

import { hertz } from '../../si/derived/hertz';

export const planckFrequency = 'fP' as UnitRef< FrequencyDim, 'fP' >;

export default ( {
  type: UnitType.NAMED,
  id: planckFrequency,
  dim: FrequencyDim,
  structure: [],
  conversion: {
    base: hertz,
    factor: 2.952e42
  },
  prefixable: false,
  aliases: [
    'planck frequency',
    'planck frequencies'
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
      id: 'fP',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'fP',
        [ Format.UNICODE ]: 'fₚ',
        [ Format.LATEX ]: 'f_{\\mathrm{P}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'c/(2*pi*lP)',
        [ Format.UNICODE ]: 'c/(2π·lₚ)',
        [ Format.LATEX ]: '\\frac{c}{2\\pi l_{\\text{P}}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'planck frequency', 'planck frequencies' ],
      [ Lang.DE ]: [ 'Planck-Frequenz', 'Planck-Frequenzen' ]
    },
    description: {
      [ Lang.EN ]: 'Planck unit of frequency in the system of natural units; frequency at which quantum effects of gravity become significant',
      [ Lang.DE ]: 'Planck-Einheit der Frequenz im System der natürlichen Einheiten; Frequenz, bei der Quanteneffekte der Gravitation signifikant werden'
    }
  }
} ) as const satisfies UnitDef< FrequencyDim, UnitType.NAMED, typeof planckFrequency >;
