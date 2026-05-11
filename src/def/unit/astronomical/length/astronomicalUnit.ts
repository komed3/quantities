import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const astronomicalUnit = 'au' as UnitRef< LengthDim, 'au' >;

export default ( {
  id: astronomicalUnit,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 1.495978707e11
  },
  prefixable: false,
  aliases: [
    'astronomical unit',
    'astronomical units',
    'AU'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE,
    si: UnitSIType.ACCEPTED
  },
  meta: {
    symbol: [ {
      id: 'au',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'au',
        [ Format.LATEX ]: '\\mathrm{au}'
      }
    }, {
      id: 'AU',
      format: {
        [ Format.PLAIN ]: 'AU',
        [ Format.LATEX ]: '\\mathrm{AU}'
      }
    }, {
      id: 'AE',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'AE',
        [ Format.LATEX ]: '\\mathrm{AE}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'astronomical unit', 'astronomical units' ],
      [ Lang.DE ]: [ 'Astronomische Einheit', 'Astronomische Einheiten' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of length equivalent to the average distance between the Earth and the Sun',
      [ Lang.DE ]: 'astronomische Längeneinheit, die der durchschnittlichen Entfernung zwischen Erde und Sonne entspricht'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof astronomicalUnit >;
