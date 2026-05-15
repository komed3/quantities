import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { AngleDim } from '../../../../types/dimension';

import { radian } from '../../si/derived/radian';

export const degree = 'deg' as UnitRef< AngleDim, 'deg' >;

export default ( {
  id: degree,
  dim: AngleDim,
  structure: [],
  conversion: {
    base: radian,
    factor: Math.PI / 180
  },
  prefixable: false,
  aliases: [
    'degree',
    'degrees'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'deg',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'deg',
        [ Format.UNICODE ]: '°',
        [ Format.LATEX ]: '^{\\circ}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'degree', 'degrees' ],
      [ Lang.DE ]: [ 'Grad' ]
    },
    description: {
      [ Lang.EN ]: 'common unit of angle, defined as 1/360 of a full rotation',
      [ Lang.DE ]: 'gebräuchliche Winkeleinheit, definiert als 1/360 einer vollen Umdrehung'
    }
  }
} ) as const satisfies UnitDef< AngleDim, typeof degree >;
