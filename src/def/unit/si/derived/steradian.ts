import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { SolidAngleDim } from '../../../../types/dimension';

import { meter } from '../base/meter';

export const steradian = 'sr' as UnitRef< SolidAngleDim, 'sr' >;

export default ( {
  type: UnitType.NAMED,
  id: steradian,
  dim: SolidAngleDim,
  structure: [ {
    unit: meter,
    exp: 1
  }, {
    unit: meter,
    exp: -1
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [
    'steradian',
    'steradians'
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
      id: 'sr',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'sr',
        [ Format.LATEX ]: '\\mathrm{sr}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'steradian', 'steradians' ],
      [ Lang.DE ]: [ 'Steradiant', 'Steradianten' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of solid angle, defined as the solid angle subtended at the center of a sphere of radius r by a portion of the surface of the sphere having an area r²',
      [ Lang.DE ]: 'SI-Einheit des Raumwinkels, definiert als der Raumwinkel, der im Mittelpunkt einer Kugel mit dem Radius r von einem Teil der Kugeloberfläche mit dem Flächeninhalt r² eingeschlossen wird'
    }
  }
} ) as const satisfies UnitDef< SolidAngleDim, UnitType.NAMED, typeof steradian >;
