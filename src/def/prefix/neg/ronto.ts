import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const ronto = 'r' as PrefixRef< 'r' >;

export default ( {
  id: ronto,
  factor: 1e-27,
  aliases: [ 'ronto' ],
  meta: {
    symbol: [ {
      id: 'r',
      canonical: true,
      format: {
        plain: 'r',
        latex: '\\mathrm{r}'
      }
    } ],
    name: {
      en: 'ronto',
      de: 'Ronto'
    },
    description: {
      en: 'unit prefix with the factor 1e-27',
      de: 'Einheitenpräfix mit dem Faktor 1e-27'
    }
  }
} ) as const satisfies PrefixDef< typeof ronto >;
