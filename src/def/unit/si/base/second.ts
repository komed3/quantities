import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { TimeDim } from '../../../../types/dimension';

export const second = 's' as UnitRef< TimeDim, 's' >;

export default ( {
  id: second,
  dim: TimeDim,
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [ 'second', 'seconds', 'sec' ],
  context: {
    system: [ 'common', 'si' ],
    status: 'active',
    si: 'base'
  },
  meta: {
    symbol: [ {
      id: 's',
      canonical: true,
      format: {
        plain: 's',
        latex: '\\mathrm{s}'
      }
    } ],
    name: {
      en: [ 'second', 'seconds' ],
      de: [ 'Sekunde', 'Sekunden' ]
    },
    description: {
      en: 'SI unit of time',
      de: 'SI-Basiseinheit der Zeit'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof second >;
