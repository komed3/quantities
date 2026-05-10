import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const zetta = 'Z' as PrefixRef< 'Z' >;

export default ( {
  id: zetta,
  factor: 1e21,
  aliases: [ 'zetta' ],
  meta: {
    symbol: [ {
      id: 'Z',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Z',
        [ Format.LATEX ]: '\\mathrm{Z}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'zetta',
      [ Lang.DE ]: 'Zetta'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e21',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e21'
    }
  }
} ) as const satisfies PrefixDef< typeof zetta >;
