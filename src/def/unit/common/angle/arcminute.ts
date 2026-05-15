import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { AngleDim } from '../../../../types/dimension';

import { degree } from './degree';

export const arcminute = 'arcmin' as UnitRef< AngleDim, 'arcmin' >;

export default ( {
  id: arcminute,
  dim: AngleDim,
  structure: [],
  conversion: {
    base: degree,
    factor: 1 / 60
  },
  prefixable: false,
  aliases: [
    'arcminute',
    'arcminutes',
    'minute of arc',
    'minutes of arc',
    'arc minute',
    'arc minutes',
    'minute arc',
    'minute arcs',
    '′'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'arcmin',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'arcmin',
        [ Format.UNICODE ]: 'arcmin',
        [ Format.LATEX ]: '\\mathrm{arcmin}'
      }
    }, {
      id: 'prime',
      format: {
        [ Format.PLAIN ]: '\'',
        [ Format.UNICODE ]: '′',
        [ Format.LATEX ]: '^{\\prime}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'arcminute', 'arcminutes' ],
      [ Lang.DE ]: [ 'Winkelminute', 'Winkelminuten' ]
    },
    description: {
      [ Lang.EN ]: 'unit of angle, defined as 1/60 of a degree',
      [ Lang.DE ]: 'Winkeleinheit, definiert als 1/60 eines Grades'
    }
  }
} ) as const satisfies UnitDef< AngleDim, typeof arcminute >;
