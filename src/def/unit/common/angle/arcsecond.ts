import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { AngleDim } from '../../../../types/dimension';

import { arcminute } from './arcminute';

export const arcsecond = 'arcsec' as UnitRef< AngleDim, 'arcsec' >;

export default ( {
  type: UnitType.NAMED,
  id: arcsecond,
  dim: AngleDim,
  structure: [],
  conversion: {
    base: arcminute,
    factor: 1 / 60
  },
  prefixable: false,
  aliases: [
    'arcsecond',
    'arcseconds',
    'second of arc',
    'seconds of arc',
    'arc second',
    'arc seconds',
    'second arc',
    'second arcs',
    'arc sec',
    '″'
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
      id: 'arcsec',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'arcsec',
        [ Format.UNICODE ]: '″',
        [ Format.LATEX ]: '\\mathrm{arcsec}'
      }
    }, {
      id: 'prime',
      format: {
        [ Format.PLAIN ]: '"',
        [ Format.UNICODE ]: '″',
        [ Format.LATEX ]: '^{\\prime\\prime}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'arcsecond', 'arcseconds' ],
      [ Lang.DE ]: [ 'Bogensekunde', 'Bogensekunde' ]
    },
    description: {
      [ Lang.EN ]: 'unit of angle, defined as 1/60 of an arcminute',
      [ Lang.DE ]: 'Winkeleinheit, definiert als 1/60 einer Bogenminute'
    }
  }
} ) as const satisfies UnitDef< AngleDim, UnitType.NAMED, typeof arcsecond >;
