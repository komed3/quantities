import type { PrefixDef, PrefixRef } from '../../../types/def/prefix';
import { Format, Lang } from '../../../types/dict';

export const nano = 'n' as PrefixRef< 'n' >;

export default ( {
  id: nano,
  factor: 1e-9,
  aliases: [ 'nano' ],
  meta: {
    symbol: [ {
      id: 'n',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'n',
        [ Format.LATEX ]: '\\mathrm{n}'
      }
    } ],
    name: {
      [ Lang.EN ]: 'nano',
      [ Lang.DE ]: 'Nano'
    },
    description: {
      [ Lang.EN ]: 'unit prefix with the factor 1e-9',
      [ Lang.DE ]: 'Einheitenpräfix mit dem Faktor 1e-9'
    }
  }
} ) as const satisfies PrefixDef< typeof nano >;
