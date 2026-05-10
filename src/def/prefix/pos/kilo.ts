import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const kilo = 'k' as PrefixRef< 'k' >;

export default ( {
  id: kilo,
  factor: 1000,
  aliases: [ 'kilo' ],
  meta: {
    symbol: [ {
      id: 'k',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'k',
        [ Format.LATEX ]: '\\mathrm{k}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'kilo',
      [ Lang.DE ]: 'Kilo'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1000',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1000'
    }
  }
} ) as const satisfies PrefixDef< typeof kilo >;
