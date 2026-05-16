import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { pascal } from '../../si/derived/pascal';

export const meterWater = 'mH2O' as UnitRef< PressureDim, 'mH2O' >;

export default ( {
  type: UnitType.NAMED,
  id: meterWater,
  dim: PressureDim,
  structure: [],
  conversion: {
    base: pascal,
    factor: 133.322
  },
  prefixable: false,
  aliases: [
    'meter of water',
    'meters of water',
    'mWS'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'mH2O',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'mH2O',
        [ Format.UNICODE ]: 'mH₂O',
        [ Format.LATEX ]: '\\mathrm{mH_{2}O}'
      }
    }, {
      id: 'mWS',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'mWS',
        [ Format.LATEX ]: '\\mathrm{mWS}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'meter of water', 'meters of water' ],
      [ Lang.DE ]: [ 'Meter Wassersäule' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of pressure, defined as the pressure exerted by a column of water of a given height, equal to 133.322 Pa',
      [ Lang.DE ]: 'historische Druckeinheit, definiert als der Druck, der von einer Wassersäule einer bestimmten Höhe ausgeübt wird, gleich 133,322 Pa'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof meterWater >;
