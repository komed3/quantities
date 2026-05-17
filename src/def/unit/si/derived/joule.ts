import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { EnergyDim } from '../../../../types/dimension';

import { kilo } from '../../../prefix';
import { gram } from '../base/gram';
import { meter } from '../base/meter';
import { second } from '../base/second';

export const joule = 'J' as UnitRef< EnergyDim, 'J' >;

export default ( {
  type: UnitType.NAMED,
  id: joule,
  dim: EnergyDim,
  structure: [ {
    unit: gram,
    exp: 1,
    prefix: kilo
  }, {
    unit: meter,
    exp: 2
  }, {
    unit: second,
    exp: -2
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [
    'joule',
    'joules'
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
      id: 'J',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'J',
        [ Format.LATEX ]: '\\mathrm{J}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'joule', 'joules' ],
      [ Lang.DE ]: [ 'Joule' ]
    },
    description: {
      [ Lang.EN ]: 'derived SI unit of energy, work and heat',
      [ Lang.DE ]: 'abgeleitete SI-Einheit der Energie, Arbeit und Wärme'
    }
  }
} ) as const satisfies UnitDef< EnergyDim, UnitType.NAMED, typeof joule >;
