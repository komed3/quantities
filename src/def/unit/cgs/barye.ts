import type { UnitDef, UnitRef } from '../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../types/dict';
import { PressureDim } from '../../../types/dimension';

import { centi } from '../../prefix';
import { meter } from '../si/base/meter';
import { pascal } from '../si/derived/pascal';
import { dyne } from './dyne';

export const barye = 'b' as UnitRef< PressureDim, 'b' >;

export default ( {
  type: UnitType.NAMED,
  id: barye,
  dim: PressureDim,
  structure: [ {
    unit: dyne,
    exp: 1
  }, {
    unit: meter,
    exp: -2,
    prefix: centi
  } ],
  conversion: {
    base: pascal,
    factor: 0.1
  },
  prefixable: false,
  aliases: [
    'barye',
    'baryes'
  ],
  context: {
    system: [
      UnitSystem.CGS
    ],
    status: UnitStatus.OBSOLETE
  },
  deprecated: {
    replacement: pascal
  },
  meta: {
    symbol: [ {
      id: 'b',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'b',
        [ Format.LATEX ]: '\\mathrm{b}'
      }
    }, {
      id: 'Ba',
      format: {
        [ Format.PLAIN ]: 'Ba',
        [ Format.LATEX ]: '\\mathrm{Ba}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'barye', 'baryes' ],
      [ Lang.DE ]: [ 'Barye' ]
    },
    description: {
      [ Lang.EN ]: 'obsolete CGS unit of pressure, equal to 0.1 Pa',
      [ Lang.DE ]: 'veraltete CGS-Einheit des Drucks, gleich 0,1 Pa'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof barye >;
