import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const svedberg = 'svedberg' as UnitRef< TimeDim, 'svedberg' >;

export default ( {
  id: svedberg,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 10e-13
  },
  prefixable: false,
  aliases: [
    'svedbergs'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'Sv',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Sv',
        [ Format.LATEX ]: '\\mathrm{Sv}'
      }
    }, {
      id: 'S',
      format: {
        [ Format.PLAIN ]: 'S',
        [ Format.LATEX ]: '\\mathrm{S}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'svedberg', 'svedbergs' ],
      [ Lang.DE ]: [ 'Svedberg' ]
    },
    description: {
      [ Lang.EN ]: 'unit of time used in ultracentrifugation to characterize sedimentation rates, equal to 100 femtoseconds',
      [ Lang.DE ]: 'Einheit der Zeit, die in der Ultrazentrifugation zur Charakterisierung von Sedimentationsraten verwendet wird, entspricht 100 Femtosekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof svedberg >;
