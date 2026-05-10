import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const hecto = 'h' as PrefixRef< 'h' >;

export default ( {
  id: hecto,
  factor: 1e2,
  aliases: [ 'hecto' ],
  meta: {
    symbol: [ {
      id: 'h',
      canonical: true,
      format: {
        plain: 'h',
        latex: '\\mathrm{h}'
      }
    } ],
    name: {
      en: 'hecto',
      de: 'Hekto'
    },
    description: {
      en: 'unit prefix with the factor 100',
      de: 'Einheitenpräfix mit dem Faktor 100'
    }
  }
} ) as const satisfies PrefixDef< typeof hecto >;
