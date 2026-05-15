import type { ConstDef, ConstRef } from '../../types/def/constant';
import { Format, Lang } from '../../types/dict';

export const gravitationalConst = 'G' as ConstRef< [ -2, 3, -1, 0, 0, 0, 0 ], 'G' >;

export default ( {
  id: gravitationalConst,
  dim: [ -2, 3, -1, 0, 0, 0, 0 ],
  value: 6.6743015e-11,
  uncertainty: 2.2e-5,
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
      [ Lang.EN ]: 'impirtial constant used in the calculation of gravitational force between two bodies',
      [ Lang.DE ]: 'universelle Konstante, die in der Berechnung der Gravitationskraft zwischen zwei Körpern verwendet wird'
    }
  }
} ) as const satisfies ConstDef< [ -2, 3, -1, 0, 0, 0, 0 ], typeof gravitationalConst >;
