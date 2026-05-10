import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const quekto = 'q' as PrefixRef< 'q' >;

export default ( {
  id: quekto,
  factor: 1e-30,
  aliases: [ 'quekto' ],
  meta: {
    symbol: [ {
      id: 'q',
      canonical: true,
      format: {
        plain: 'q',
        latex: '\\mathrm{q}'
      }
    } ],
    name: {
      en: 'quekto',
      de: 'Quekto'
    },
    description: {
      en: 'unit prefix with the factor 1e-30',
      de: 'Einheitenpräfix mit dem Faktor 1e-30'
    }
  }
} ) as const satisfies PrefixDef< typeof quekto >;
