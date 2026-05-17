import type { UnitDef, UnitRef } from '../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../types/dict';
import { EnergyDim } from '../../../types/dimension';

import { centi } from '../../prefix';
import { meter } from '../si/base/meter';
import { joule } from '../si/derived/joule';
import { dyne } from './dyne';

export const erg = 'erg' as UnitRef< EnergyDim, 'erg' >;

export default ( {
  type: UnitType.NAMED,
  id: erg,
  dim: EnergyDim,
  structure: [ {
    unit: dyne,
    exp: 1
  }, {
    unit: meter,
    exp: 1,
    prefix: centi
  } ],
  conversion: {
    base: joule,
    factor: 1e-7
  },
  prefixable: false,
  aliases: [
    'erg',
    'ergs'
  ],
  context: {
    system: [
      UnitSystem.CGS
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'erg',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'erg',
        [ Format.LATEX ]: '\\mathrm{erg}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'erg', 'ergs' ],
      [ Lang.DE ]: [ 'Erg' ]
    },
    description: {
      [ Lang.EN ]: 'unit of energy in the CGS system, equal to 10^-7 joules',
      [ Lang.DE ]: 'Einheit der Energie im CGS-System, gleich 10^-7 Joule'
    }
  }
} ) as const satisfies UnitDef< EnergyDim, UnitType.NAMED, typeof erg >;
