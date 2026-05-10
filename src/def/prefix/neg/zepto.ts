import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const zepto = 'z' as PrefixRef< 'z' >;

export default ( {
  id: zepto,
  factor: 1e-21,
  aliases: [ 'zepto' ],
  meta: {
    symbol: [ {
      id: 'z',
      canonical: true,
      format: {
        plain: 'z',
        latex: '\\mathrm{z}'
      }
    } ],
    name: {
      en: 'zepto',
      de: 'Zepto'
    },
    description: {
      en: 'unit prefix with the factor 1e-21',
      de: 'Einheitenpräfix mit dem Faktor 1e-21'
    }
  }
} ) as const satisfies PrefixDef< typeof zepto >;
