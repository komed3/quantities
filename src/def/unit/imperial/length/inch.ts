import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const inch = 'in' as UnitRef< LengthDim, 'in' >;

export default ( {
  type: UnitType.NAMED,
  id: inch,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 0.0254
  },
  prefixable: false,
  aliases: [
    'inch',
    'inches'
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
      id: 'in',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'in',
        [ Format.LATEX ]: '\\mathrm{in}'
      }
    }, {
      id: 'prime',
      format: {
        [ Format.PLAIN ]: '\'\'',
        [ Format.UNICODE ]: '″',
        [ Format.LATEX ]: '^{\\prime\\prime}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'inch', 'inches' ],
      [ Lang.DE ]: [ 'Zoll' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of length equal to 0.0254 meters',
      [ Lang.DE ]: 'imperiale Längeneinheit, die 0,0254 Meter entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof inch >;
