import type { PrefixDef, PrefixRef } from '../../../types/prefix';

export const nano = 'n' as PrefixRef< 'n' >;

export default ( {
  id: nano,
  factor: 1e-9,
  aliases: [ 'nano' ],
  meta: {
    symbol: [ {
      id: 'n',
      canonical: true,
      format: {
        plain: 'n',
        latex: '\\mathrm{n}'
      }
    } ],
    name: {
      en: 'nano',
      de: 'Nano'
    },
    description: {
      en: 'unit prefix with the factor 1e-9',
      de: 'Einheitenpräfix mit dem Faktor 1e-9'
    }
  }
} ) as const satisfies PrefixDef< typeof nano >;
