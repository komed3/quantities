import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const deca = 'da' as PrefixRef< 'da' >;

export default ( {
  id: deca,
  factor: 1e1,
  aliases: [ 'deca' ],
  meta: {
    symbol: [ {
      id: 'da',
      canonical: true,
      format: {
        plain: 'da',
        latex: '\\mathrm{da}'
      }
    } ],
    name: {
      en: 'deca',
      de: 'Deka'
    },
    description: {
      en: 'unit prefix with the factor 10',
      de: 'Einheitenpräfix mit dem Faktor 10'
    }
  }
} ) as const satisfies PrefixDef< typeof deca >;
