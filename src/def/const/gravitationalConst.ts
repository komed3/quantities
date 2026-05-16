import type { ConstDef, ConstRef } from '../../types/def/constant';
import { Format, Lang } from '../../types/dict';

import { kilo } from '../prefix';
import { gram } from '../unit/si/base/gram';
import { meter } from '../unit/si/base/meter';
import { second } from '../unit/si/base/second';

export const gravitationalConst = 'G' as ConstRef< [ -2, 3, -1, 0, 0, 0, 0 ], 'G' >;

export default ( {
  id: gravitationalConst,
  dim: [ -2, 3, -1, 0, 0, 0, 0 ],
  value: 6.6743015e-11,
  uncertainty: 2.2e-5,
  structure: [ {
    unit: meter,
    exp: 3
  }, {
    unit: gram,
    exp: -1,
    prefix: kilo
  }, {
    unit: second,
    exp: -2
  } ],
  aliases: [
    'gravitational constant'
  ],
  meta: {
    symbol: [ {
      id: 'G',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'G',
        [ Format.LATEX ]: 'G'
      }
    }, {
      id: 'gamma',
      format: {
        [ Format.PLAIN ]: 'gamma',
        [ Format.UNICODE ]: 'γ',
        [ Format.LATEX ]: '\\gamma'
      }
    } ],
    name: {
      [ Lang.EN ]: 'gravitational constant',
      [ Lang.DE ]: 'Gravitationskonstante'
    },
    description: {
      [ Lang.EN ]: 'universal constant used in the calculation of gravitational force between two bodies',
      [ Lang.DE ]: 'universelle Konstante, die in der Berechnung der Gravitationskraft zwischen zwei Körpern verwendet wird'
    }
  }
} ) as const satisfies ConstDef< [ -2, 3, -1, 0, 0, 0, 0 ], typeof gravitationalConst >;
