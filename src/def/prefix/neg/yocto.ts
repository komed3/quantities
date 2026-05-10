import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const yocto = 'y' as PrefixRef< 'y' >;

export default ( {
  id: yocto,
  factor: 1e-24,
  aliases: [ 'yocto' ],
  meta: {
    symbol: [ {
      id: 'y',
      canonical: true,
      format: {
        plain: 'y',
        latex: '\\mathrm{y}'
      }
    } ],
    name: {
      en: 'yocto',
      de: 'Jokto'
    },
    description: {
      en: 'unit prefix with the factor 1e-24',
      de: 'Einheitenpräfix mit dem Faktor 1e-24'
    }
  }
} ) as const satisfies PrefixDef< typeof yocto >;
