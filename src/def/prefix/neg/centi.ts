import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const centi = 'c' as PrefixRef< 'c' >;

export default ( {
  id: centi,
  factor: 1e-2,
  aliases: [ 'centi' ],
  meta: {
    symbol: [ {
      id: 'c',
      canonical: true,
      format: {
        plain: 'c',
        latex: '\\mathrm{c}'
      }
    } ],
    name: {
      en: 'centi',
      de: 'Zenti'
    },
    description: {
      en: 'unit prefix with the factor 0.01',
      de: 'Einheitenpräfix mit dem Faktor 0.01'
    }
  }
} ) as const satisfies PrefixDef< typeof centi >;
