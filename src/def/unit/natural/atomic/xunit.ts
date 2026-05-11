import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const xunit = 'xu' as UnitRef< LengthDim, 'xu' >;

export default ( {
  id: xunit,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 1.0021e-13
  },
  prefixable: false,
  aliases: [
    'x unit',
    'x units'
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
      id: 'xu',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'xu',
        [ Format.LATEX ]: '\\mathrm{xu}'
      }
    }, {
      id: 'XE',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'XE',
        [ Format.LATEX ]: '\\mathrm{XE}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'x unit', 'x units' ],
      [ Lang.DE ]: [ 'X-Einheit', 'X-Einheiten' ]
    },
    description: {
      [ Lang.EN ]: 'unit of length used in X-ray crystallography, also known as Siegbahn unit, defined as 1/100 of the wavelength of the Kα line of copper (1.54056 Å)',
      [ Lang.DE ]: 'Längeneinheit, die in der Röntgenkristallographie verwendet wird, auch als Siegbahn-Einheit bekannt, definiert als 1/100 der Wellenlänge der Kα-Linie von Kupfer (1,54056 Å)'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof xunit >;
