import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const exa = 'E' as PrefixRef< 'E' >;

export default ( {
  id: exa,
  factor: 1e18,
  aliases: [ 'exa' ],
  meta: {
    symbol: [ {
      id: 'E',
      canonical: true,
      format: {
        plain: 'E',
        latex: '\\mathrm{E}'
      }
    } ],
    name: {
      en: 'exa',
      de: 'Exa'
    },
    description: {
      en: 'unit prefix with the factor 1e18',
      de: 'Einheitenpräfix mit dem Faktor 1e18'
    }
  }
} ) as const satisfies PrefixDef< typeof exa >;
