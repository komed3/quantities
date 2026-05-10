import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const milli = 'm' as PrefixRef< 'm' >;

export default ( {
  id: milli,
  factor: 0.001,
  aliases: [ 'milli' ],
  meta: {
    symbol: [ {
      id: 'm',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'm',
        [ Format.LATEX ]: '\\mathrm{m}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'milli',
      [ Lang.DE ]: 'Milli'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 0.001',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 0.001'
    }
  }
} ) as const satisfies PrefixDef< typeof milli >;
