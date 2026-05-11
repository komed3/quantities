import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const lunarDistance = 'LD' as UnitRef< LengthDim, 'LD' >;

export default ( {
  id: lunarDistance,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 3.84399e8
  },
  prefixable: false,
  aliases: [
    'lunar distance',
    'lunar distances',
    'earth moon distance',
    'earth moon distances',
    'distance to the moon',
    'distances to the moon'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'LD',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'LD',
        [ Format.LATEX ]: '\\mathrm{LD}'
      }
    }, {
      id: 'deltaEL',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'delta EL',
        [ Format.UNICODE ]: 'Δ🜨L',
        [ Format.LATEX ]: '\\Delta_{\\oplus L}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'lunar distance', 'lunar distances' ],
      [ Lang.DE ]: [ 'Monddistanz', 'Monddistanzen' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of length, defined as the average distance from the Earth to the Moon, used as a standard unit of measurement in astronomy',
      [ Lang.DE ]: 'astronomische Längeneinheit, definiert als die durchschnittliche Entfernung von der Erde zum Mond, verwendet als Standardmaßeinheit in der Astronomie'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof lunarDistance >;
