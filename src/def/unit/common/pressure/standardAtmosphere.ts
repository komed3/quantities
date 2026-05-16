import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { pascal } from '../../si/derived/pascal';

export const standardAtmosphere = 'atm' as UnitRef< PressureDim, 'atm' >;

export default ( {
  type: UnitType.NAMED,
  id: standardAtmosphere,
  dim: PressureDim,
  structure: [],
  conversion: {
    base: pascal,
    factor: 1.01325e5
  },
  prefixable: false,
  aliases: [
    'standard atmosphere',
    'standard atmospheres',
    'physical atmosphere',
    'physical atmospheres'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.OBSOLETE
  },
  deprecated: {
    replacement: pascal
  },
  meta: {
    symbol: [ {
      id: 'atm',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'atm',
        [ Format.LATEX ]: '\\mathrm{atm}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'standard atmosphere', 'standard atmospheres' ],
      [ Lang.DE ]: [ 'physikalische Atmosphäre', 'physikalische Atmosphären' ]
    },
    description: {
      [ Lang.EN ]: 'obsolete unit of pressure, defined as 101325 Pa, approximately equal to the average atmospheric pressure at sea level on Earth',
      [ Lang.DE ]: 'veraltete Druckeinheit, definiert als 101325 Pa, ungefähr gleich dem durchschnittlichen atmosphärischen Druck auf Meereshöhe auf der Erde'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof standardAtmosphere >;
