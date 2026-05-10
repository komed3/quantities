import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const deci = 'd' as PrefixRef< 'd' >;

export default ( {
  id: deci,
  factor: 1e-1,
  aliases: [ 'deci' ],
  meta: {
    symbol: [ {
      id: 'd',
      canonical: true,
      format: {
        plain: 'd',
        latex: '\\mathrm{d}'
      }
    } ],
    name: {
      en: 'deci',
      de: 'Dezi'
    },
    description: {
      en: 'unit prefix with the factor 0.1',
      de: 'Einheitenpräfix mit dem Faktor 0.1'
    }
  }
} ) as const satisfies PrefixDef< typeof deci >;
