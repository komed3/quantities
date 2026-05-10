import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const ronna = 'R' as PrefixRef< 'R' >;

export default ( {
  id: ronna,
  factor: 1e27,
  aliases: [ 'ronna' ],
  meta: {
    symbol: [ {
      id: 'R',
      canonical: true,
      format: {
        plain: 'R',
        latex: '\\mathrm{R}'
      }
    } ],
    name: {
      en: 'ronna',
      de: 'Ronna'
    },
    description: {
      en: 'unit prefix with the factor 1e27',
      de: 'Einheitenpräfix mit dem Faktor 1e27'
    }
  }
} ) as const satisfies PrefixDef< typeof ronna >;
