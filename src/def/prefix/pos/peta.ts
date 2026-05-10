import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const peta = 'P' as PrefixRef< 'P' >;

export default ( {
  id: peta,
  factor: 1e15,
  aliases: [ 'peta' ],
  meta: {
    symbol: [ {
      id: 'P',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'P',
        [ Format.LATEX ]: '\\mathrm{P}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'peta',
      [ Lang.DE ]: 'Peta'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e15',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e15'
    }
  }
} ) as const satisfies PrefixDef< typeof peta >;
