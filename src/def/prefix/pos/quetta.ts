import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const quetta = 'Q' as PrefixRef< 'Q' >;

export default ( {
  id: quetta,
  factor: 1e30,
  aliases: [ 'quetta' ],
  meta: {
    symbol: [ {
      id: 'Q',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Q',
        [ Format.LATEX ]: '\\mathrm{Q}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'quetta',
      [ Lang.DE ]: 'Quetta'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e30',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e30'
    }
  }
} ) as const satisfies PrefixDef< typeof quetta >;
