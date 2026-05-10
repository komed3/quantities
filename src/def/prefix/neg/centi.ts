import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const centi = 'c' as PrefixRef< 'c' >;

export default ( {
  id: centi,
  factor: 0.01,
  aliases: [ 'centi' ],
  meta: {
    symbol: [ {
      id: 'c',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'c',
        [ Format.LATEX ]: '\\mathrm{c}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'centi',
      [ Lang.DE ]: 'Zenti'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 0.01',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 0.01'
    }
  }
} ) as const satisfies PrefixDef< typeof centi >;
