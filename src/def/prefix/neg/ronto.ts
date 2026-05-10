import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const ronto = 'r' as PrefixRef< 'r' >;

export default ( {
  id: ronto,
  factor: 1e-27,
  aliases: [ 'ronto' ],
  meta: {
    symbol: [ {
      id: 'r',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'r',
        [ Format.LATEX ]: '\\mathrm{r}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'ronto',
      [ Lang.DE ]: 'Ronto'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e-27',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e-27'
    }
  }
} ) as const satisfies PrefixDef< typeof ronto >;
