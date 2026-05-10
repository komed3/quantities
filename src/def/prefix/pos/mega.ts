import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const mega = 'M' as PrefixRef< 'M' >;

export default ( {
  id: mega,
  factor: 1e6,
  aliases: [ 'mega' ],
  meta: {
    symbol: [ {
      id: 'M',
      canonical: true,
      format: {
        plain: 'M',
        latex: '\\mathrm{M}'
      }
    } ],
    name: {
      en: 'mega',
      de: 'Mega'
    },
    description: {
      en: 'unit prefix with the factor 1e6',
      de: 'Einheitenpräfix mit dem Faktor 1e6'
    }
  }
} ) as const satisfies PrefixDef< typeof mega >;
