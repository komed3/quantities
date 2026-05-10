import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const pico = 'p' as PrefixRef< 'p' >;

export default ( {
  id: pico,
  factor: 1e-12,
  aliases: [ 'pico' ],
  meta: {
    symbol: [ {
      id: 'p',
      canonical: true,
      format: {
        plain: 'p',
        latex: '\\mathrm{p}'
      }
    } ],
    name: {
      en: 'pico',
      de: 'Piko'
    },
    description: {
      en: 'unit prefix with the factor 1e-12',
      de: 'Einheitenpräfix mit dem Faktor 1e-12'
    }
  }
} ) as const satisfies PrefixDef< typeof pico >;
