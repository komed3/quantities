import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const giga = 'G' as PrefixRef< 'G' >;

export default ( {
  id: giga,
  factor: 1e9,
  aliases: [ 'giga' ],
  meta: {
    symbol: [ {
      id: 'G',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'G',
        [ Format.LATEX ]: '\\mathrm{G}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'giga',
      [ Lang.DE ]: 'Giga'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e9',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e9'
    }
  }
} ) as const satisfies PrefixDef< typeof giga >;
