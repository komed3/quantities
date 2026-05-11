import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { astronomicalUnit } from './astronomicalUnit';

export const parsec = 'pc' as UnitRef< LengthDim, 'pc' >;

export default ( {
  id: parsec,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: astronomicalUnit,
    factor: 6.48e5 / Math.PI
  },
  prefixable: true,
  aliases: [
    'parsec',
    'parsecs'
  ],
  context: {
    system: [
      UnitSystem.ASTRO
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'pc',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'pc',
        [ Format.LATEX ]: '\\mathrm{pc}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'parsec', 'parsecs' ],
      [ Lang.DE ]: [ 'Parsec' ]
    },
    description: {
      [ Lang.EN ]: 'astronomical unit of length, defined as the distance at which one astronomical unit subtends an angle of one arcsecond',
      [ Lang.DE ]: 'astronomische Längeneinheit, definiert als die Entfernung, bei der eine Astronomische Einheit einen Winkel von einer Bogensekunde unterspannt'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof parsec >;
