import type { UnitDef, UnitRef } from '../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../types/dict';
import { ForceDim } from '../../../types/dimension';

import { centi } from '../../prefix';
import { gram } from '../si/base/gram';
import { meter } from '../si/base/meter';
import { second } from '../si/base/second';
import { newton } from '../si/derived/newton';

export const dyne = 'dyn' as UnitRef< ForceDim, 'dyn' >;

export default ( {
  id: dyne,
  dim: ForceDim,
  structure: [ {
    unit: gram,
    exp: 1
  }, {
    unit: meter,
    exp: 1,
    prefix: centi
  }, {
    unit: second,
    exp: -2
  } ],
  conversion: {
    base: newton,
    factor: 1e-5
  },
  prefixable: false,
  aliases: [
    'dyne',
    'dynes'
  ],
  context: {
    system: [
      UnitSystem.CGS
    ],
    status: UnitStatus.OBSOLETE
  },
  deprecated: {
    replacement: newton
  },
  meta: {
    symbol: [ {
      id: 'dyn',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'dyn',
        [ Format.LATEX ]: '\\mathrm{dyn}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'dyne', 'dynes' ],
      [ Lang.DE ]: [ 'Dyn' ]
    },
    description: {
      [ Lang.EN ]: 'CGS unit of force, equal to 10 µN',
      [ Lang.DE ]: 'CGS-Einheit der Kraft, gleich 10 µN'
    }
  }
} ) as const satisfies UnitDef< ForceDim, typeof dyne >;
