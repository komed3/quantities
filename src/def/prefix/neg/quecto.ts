import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const quecto = 'q' as PrefixRef< 'q' >;

export default ( {
  id: quecto,
  factor: 1e-30,
  aliases: [ 'quecto' ],
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
      [ Lang.EN ]: 'quecto',
      [ Lang.DE ]: 'Quekto'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e-30',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e-30'
    }
  }
} ) as const satisfies PrefixDef< typeof quecto >;
