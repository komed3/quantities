import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { AngleDim } from '../../../../types/dimension';

import { arcminute } from './arcminute';

export const arcsecond = 'arcsec' as UnitRef< AngleDim, 'arcsec' >;

export default ( {
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
    status: UnitStatus.ACTIVE
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
} ) as const satisfies UnitDef< AngleDim, typeof arcsecond >;
