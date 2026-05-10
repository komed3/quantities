import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const yotta = 'Y' as PrefixRef< 'Y' >;

export default ( {
  id: yotta,
  factor: 1e24,
  aliases: [ 'yotta' ],
  meta: {
    symbol: [ {
      id: 'Y',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Y',
        [ Format.LATEX ]: '\\mathrm{Y}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'yotta',
      [ Lang.DE ]: 'Yotta'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e24',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e24'
    }
  }
} ) as const satisfies PrefixDef< typeof yotta >;
