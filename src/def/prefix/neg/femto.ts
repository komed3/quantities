import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const femto = 'f' as PrefixRef< 'f' >;

export default ( {
  id: femto,
  factor: 1e-15,
  aliases: [ 'femto' ],
  meta: {
    symbol: [ {
      id: 'f',
      canonical: true,
      format: {
        plain: 'f',
        latex: '\\mathrm{f}'
      }
    } ],
    name: {
      en: 'femto',
      de: 'Femto'
    },
    description: {
      en: 'unit prefix with the factor 1e-15',
      de: 'Einheitenpräfix mit dem Faktor 1e-15'
    }
  }
} ) as const satisfies PrefixDef< typeof femto >;
