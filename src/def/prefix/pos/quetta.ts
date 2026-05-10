import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const quetta = 'Q' as PrefixRef< 'Q' >;

export default ( {
  id: quetta,
  factor: 1e30,
  aliases: [ 'quetta' ],
  meta: {
    symbol: [ {
      id: 'Q',
      canonical: true,
      format: {
        plain: 'Q',
        latex: '\\mathrm{Q}'
      }
    } ],
    name: {
      en: 'quetta',
      de: 'Quetta'
    },
    description: {
      en: 'unit prefix with the factor 1e30',
      de: 'Einheitenpräfix mit dem Faktor 1e30'
    }
  }
} ) as const satisfies PrefixDef< typeof quetta >;
