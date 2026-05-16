import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { ForceDim } from '../../../../types/dimension';

import { kilo } from '../../../prefix';
import { gram } from '../base/gram';
import { meter } from '../base/meter';
import { second } from '../base/second';

export const newton = 'N' as UnitRef< ForceDim, 'N' >;

export default ( {
  type: UnitType.NAMED,
  id: newton,
  dim: ForceDim,
  structure: [ {
    unit: gram,
    exp: 1,
    prefix: kilo
  }, {
    unit: meter,
    exp: 1
  }, {
    unit: second,
    exp: -2
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [
    'newton',
    'newtons'
  ],
  context: {
    system: [
      UnitSystem.SI
    ],
    status: UnitStatus.ACTIVE,
    si: SIType.DERIVED
  },
  meta: {
    symbol: [ {
      id: 'N',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'N',
        [ Format.LATEX ]: '\\mathrm{N}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'newton', 'newtons' ],
      [ Lang.DE ]: [ 'Newton' ]
    },
    description: {
      [ Lang.EN ]: 'derived SI unit of force',
      [ Lang.DE ]: 'abgeleitete SI-Einheit der Kraft'
    }
  }
} ) as const satisfies UnitDef< ForceDim, UnitType.NAMED, typeof newton >;
