import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { AngleDim } from '../../../../types/dimension';

import { degree } from './degree';

export const arcminute = 'arcmin' as UnitRef< AngleDim, 'arcmin' >;

export default ( {
  type: UnitType.NAMED,
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
    'arc min',
    '′'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE,
    si: SIType.ACCEPTED
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
      [ Lang.DE ]: [ 'Bogenminute', 'Bogenminuten' ]
    },
    description: {
      [ Lang.EN ]: 'unit of angle, defined as 1/60 of a degree',
      [ Lang.DE ]: 'Winkeleinheit, definiert als 1/60 eines Grades'
    }
  }
} ) as const satisfies UnitDef< AngleDim, UnitType.NAMED, typeof arcminute >;
