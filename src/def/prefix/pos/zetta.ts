import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const zetta = 'Z' as PrefixRef< 'Z' >;

export default ( {
  id: zetta,
  factor: 1e21,
  aliases: [ 'zetta' ],
  meta: {
    symbol: [ {
      id: 'Z',
      canonical: true,
      format: {
        plain: 'Z',
        latex: '\\mathrm{Z}'
      }
    } ],
    name: {
      en: 'zetta',
      de: 'Zetta'
    },
    description: {
      en: 'unit prefix with the factor 1e21',
      de: 'Einheitenpräfix mit dem Faktor 1e21'
    }
  }
} ) as const satisfies PrefixDef< typeof zetta >;
