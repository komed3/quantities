import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const milli = 'm' as PrefixRef< 'm' >;

export default ( {
  id: milli,
  factor: 1e-3,
  aliases: [ 'milli' ],
  meta: {
    symbol: [ {
      id: 'm',
      canonical: true,
      format: {
        plain: 'm',
        latex: '\\mathrm{m}'
      }
    } ],
    name: {
      en: 'milli',
      de: 'Milli'
    },
    description: {
      en: 'unit prefix with the factor 0.001',
      de: 'Einheitenpräfix mit dem Faktor 0.001'
    }
  }
} ) as const satisfies PrefixDef< typeof milli >;
