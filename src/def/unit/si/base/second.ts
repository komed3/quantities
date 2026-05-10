import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitSIType, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

export const second = 's' as UnitRef< TimeDim, 's' >;

export default ( {
  id: second,
  dim: TimeDim,
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [
    'second',
    'seconds',
    'sec'
  ],
  context: {
    system: [
      UnitSystem.COMMON,
      UnitSystem.SI
    ],
    status: UnitStatus.ACTIVE,
    si: UnitSIType.BASE
  },
  meta: {
    symbol: [ {
      id: 's',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 's',
        [ Format.LATEX ]: '\\mathrm{s}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'second', 'seconds' ],
      [ Lang.DE ]: [ 'Sekunde', 'Sekunden' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of time',
      [ Lang.DE ]: 'SI-Basiseinheit der Zeit'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof second >;
