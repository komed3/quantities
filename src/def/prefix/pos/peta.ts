import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const peta = 'P' as PrefixRef< 'P' >;

export default ( {
  id: peta,
  factor: 1e15,
  aliases: [ 'peta' ],
  meta: {
    symbol: [ {
      id: 'P',
      canonical: true,
      format: {
        plain: 'P',
        latex: '\\mathrm{P}'
      }
    } ],
    name: {
      en: 'peta',
      de: 'Peta'
    },
    description: {
      en: 'unit prefix with the factor 1e15',
      de: 'Einheitenpräfix mit dem Faktor 1e15'
    }
  }
} ) as const satisfies PrefixDef< typeof peta >;
