import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { kilo } from '../../../prefix';
import { gram } from '../base/gram';
import { meter } from '../base/meter';
import { second } from '../base/second';

export const pascal = 'Pa' as UnitRef< PressureDim, 'Pa' >;

export default ( {
  type: UnitType.NAMED,
  id: pascal,
  dim: PressureDim,
  structure: [ {
    unit: gram,
    exp: 1,
    prefix: kilo
  }, {
    unit: meter,
    exp: -1
  }, {
    unit: second,
    exp: -2
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [
    'pascal',
    'pascals'
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
      id: 'Pa',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'Pa',
        [ Format.LATEX ]: '\\mathrm{Pa}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'pascal', 'pascals' ],
      [ Lang.DE ]: [ 'Pascal' ]
    },
    description: {
      [ Lang.EN ]: 'derived SI unit of pressure',
      [ Lang.DE ]: 'abgeleitete SI-Einheit des Drucks'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof pascal >;
