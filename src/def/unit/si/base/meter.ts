import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

export const meter = 'm' as UnitRef< LengthDim, 'm' >;

export default ( {
  type: UnitType.NAMED,
  id: meter,
  dim: LengthDim,
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [
    'meter',
    'meters',
    'metre',
    'metres'
  ],
  context: {
    system: [
      UnitSystem.SI
    ],
    status: UnitStatus.ACTIVE,
    si: SIType.BASE
  },
  meta: {
    symbol: [ {
      id: 'm',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'm',
        [ Format.LATEX ]: '\\mathrm{m}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'meter', 'meters' ],
      [ Lang.DE ]: [ 'Meter' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of length',
      [ Lang.DE ]: 'SI-Basiseinheit der Länge'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof meter >;
