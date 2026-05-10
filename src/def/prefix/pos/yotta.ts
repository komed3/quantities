import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const yotta = 'Y' as PrefixRef< 'Y' >;

export default ( {
  id: yotta,
  factor: 1e24,
  aliases: [ 'yotta' ],
  meta: {
    symbol: [ {
      id: 'Y',
      canonical: true,
      format: {
        plain: 'Y',
        latex: '\\mathrm{Y}'
      }
    } ],
    name: {
      en: 'yotta',
      de: 'Yotta'
    },
    description: {
      en: 'unit prefix with the factor 1e24',
      de: 'Einheitenpräfix mit dem Faktor 1e24'
    }
  }
} ) as const satisfies PrefixDef< typeof yotta >;
