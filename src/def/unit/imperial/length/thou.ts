import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const thou = 'thou' as UnitRef< LengthDim, 'thou' >;

export default ( {
  id: thou,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 2.54e-5
  },
  prefixable: false,
  aliases: [
    'thousandth of an inch',
    'thousandths of an inch',
    'mil',
    'mils'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'thou',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'thou',
        [ Format.LATEX ]: '\\mathrm{thou}'
      }
    }, {
      id: 'mil',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'mil',
        [ Format.LATEX ]: '\\mathrm{mil}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'thou' ],
      [ Lang.DE ]: [ 'Thou' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length equal to one thousandth of an inch',
      [ Lang.DE ]: 'imperiale Längeneinheit, die einem Tausendstel Zoll entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof thou >;
