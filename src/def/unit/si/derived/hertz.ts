import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { FrequencyDim } from '../../../../types/dimension';

import { second } from '../base/second';

export const hertz = 'Hz' as UnitRef< FrequencyDim, 'Hz' >;

export default ( {
  type: UnitType.NAMED,
  id: hertz,
  dim: FrequencyDim,
  structure: [ {
    unit: second,
    exp: -1
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [
    'hertz',
    'hertzes'
  ],
  context: {
    system: [
      UnitSystem.SI
    ],
    status: UnitStatus.ACTIVE,
    si: SIType.DERIVED
  },
  meta: {
    symbol: [ {
      id: 'Hz',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Hz',
        [ Format.LATEX ]: '\\mathrm{Hz}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'hertz', 'hertzes' ],
      [ Lang.DE ]: [ 'Hertz' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of frequency, defined as one cycle per second',
      [ Lang.DE ]: 'SI-Einheit der Frequenz, definiert als ein Zyklus pro Sekunde'
    }
  }
} ) as const satisfies UnitDef< FrequencyDim, UnitType.NAMED, typeof hertz >;
