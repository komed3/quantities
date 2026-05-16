import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, SIType, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { AngleDim } from '../../../../types/dimension';
import { meter } from '../base/meter';

export const radian = 'rad' as UnitRef< AngleDim, 'rad' >;

export default ( {
  type: UnitType.NAMED,
  id: radian,
  dim: AngleDim,
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
    'radian',
    'radians'
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
      id: 'rad',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'rad',
        [ Format.LATEX ]: '\\mathrm{rad}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'radian', 'radians' ],
      [ Lang.DE ]: [ 'Radiant', 'Radianten' ]
    },
    description: {
      [ Lang.EN ]: 'SI unit of angle, defined as the angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle',
      [ Lang.DE ]: 'SI-Einheit des Winkels, definiert als der Winkel, der im Mittelpunkt eines Kreises von einem Kreisbogen der Länge des Radius eingeschlossen wird'
    }
  }
} ) as const satisfies UnitDef< AngleDim, UnitType.NAMED, typeof radian >;
