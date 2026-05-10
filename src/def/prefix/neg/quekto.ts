import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const quekto = 'q' as PrefixRef< 'q' >;

export default ( {
  id: quekto,
  factor: 1e-30,
  aliases: [ 'quekto' ],
  meta: {
    symbol: [ {
      id: 'q',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'q',
        [ Format.LATEX ]: '\\mathrm{q}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'quekto',
      [ Lang.DE ]: 'Quekto'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e-30',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e-30'
    }
  }
} ) as const satisfies PrefixDef< typeof quekto >;
