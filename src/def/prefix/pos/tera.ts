import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const tera = 'T' as PrefixRef< 'T' >;

export default ( {
  id: tera,
  factor: 1e12,
  aliases: [ 'tera' ],
  meta: {
    symbol: [ {
      id: 'T',
      canonical: true,
      format: {
        plain: 'T',
        latex: '\\mathrm{T}'
      }
    } ],
    name: {
      en: 'tera',
      de: 'Tera'
    },
    description: {
      en: 'unit prefix with the factor 1e12',
      de: 'Einheitenpräfix mit dem Faktor 1e12'
    }
  }
} ) as const satisfies PrefixDef< typeof tera >;
