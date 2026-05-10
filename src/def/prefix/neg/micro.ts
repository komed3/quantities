import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const micro = 'u' as PrefixRef< 'u' >;

export default ( {
  id: micro,
  factor: 1e-6,
  aliases: [ 'μ', 'micro', 'mc' ],
  meta: {
    symbol: [ {
      id: 'u',
      canonical: true,
      format: {
        plain: 'u',
        unicode: 'μ',
        latex: '\\mu'
      }
    } ],
    name: {
      en: 'micro',
      de: 'Mikro'
    },
    description: {
      en: 'unit prefix with the factor 1e-6',
      de: 'Einheitenpräfix mit dem Faktor 1e-6'
    }
  }
} ) as const satisfies PrefixDef< typeof micro >;
