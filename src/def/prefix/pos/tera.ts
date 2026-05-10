import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const tera = 'T' as PrefixRef< 'T' >;

export default ( {
  id: tera,
  factor: 1e12,
  aliases: [ 'tera' ],
  meta: {
    symbol: [ {
      id: 'T',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'T',
        [ Format.LATEX ]: '\\mathrm{T}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'tera',
      [ Lang.DE ]: 'Tera'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e12',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e12'
    }
  }
} ) as const satisfies PrefixDef< typeof tera >;
