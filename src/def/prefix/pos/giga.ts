import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const giga = 'G' as PrefixRef< 'G' >;

export default ( {
  id: giga,
  factor: 1e9,
  aliases: [ 'giga' ],
  meta: {
    symbol: [ {
      id: 'G',
      canonical: true,
      format: {
        plain: 'G',
        latex: '\\mathrm{G}'
      }
    } ],
    name: {
      en: 'giga',
      de: 'Giga'
    },
    description: {
      en: 'unit prefix with the factor 1e9',
      de: 'Einheitenpräfix mit dem Faktor 1e9'
    }
  }
} ) as const satisfies PrefixDef< typeof giga >;
