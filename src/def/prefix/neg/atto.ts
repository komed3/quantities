import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const atto = 'a' as PrefixRef< 'a' >;

export default ( {
  id: atto,
  factor: 1e-18,
  aliases: [ 'atto' ],
  meta: {
    symbol: [ {
      id: 'a',
      canonical: true,
      format: {
        plain: 'a',
        latex: '\\mathrm{a}'
      }
    } ],
    name: {
      en: 'atto',
      de: 'Atto'
    },
    description: {
      en: 'unit prefix with the factor 1e-18',
      de: 'Einheitenpräfix mit dem Faktor 1e-18'
    }
  }
} ) as const satisfies PrefixDef< typeof atto >;
