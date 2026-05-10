import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const micro = 'u' as PrefixRef< 'u' >;

export default ( {
  id: micro,
  factor: 1e-6,
  aliases: [ 'µ', 'micro', 'mc' ],
  meta: {
    symbol: [ {
      id: 'u',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'u',
        [ Format.UNICODE ]: 'µ',
        [ Format.LATEX ]: '\\mu'
      }
    } ],
    name: {
      [ Lang.EN ]: 'micro',
      [ Lang.DE ]: 'Mikro'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e-6',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e-6'
    }
  }
} ) as const satisfies PrefixDef< typeof micro >;
