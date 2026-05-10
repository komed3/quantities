import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const mega = 'M' as PrefixRef< 'M' >;

export default ( {
  id: mega,
  factor: 1e6,
  aliases: [ 'mega' ],
  meta: {
    symbol: [ {
      id: 'M',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'M',
        [ Format.LATEX ]: '\\mathrm{M}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'mega',
      [ Lang.DE ]: 'Mega'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e6',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e6'
    }
  }
} ) as const satisfies PrefixDef< typeof mega >;
