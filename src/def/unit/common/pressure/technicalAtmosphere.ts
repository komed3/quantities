import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { centi } from '../../../prefix';
import { meter } from '../../si/base/meter';
import { pascal } from '../../si/derived/pascal';
import { kilopond } from '../force/kilopond';

export const technicalAtmosphere = 'at' as UnitRef< PressureDim, 'at' >;

export default ( {
  type: UnitType.NAMED,
  id: technicalAtmosphere,
  dim: PressureDim,
  structure: [ {
    unit: kilopond,
    exp: 1
  }, {
    unit: meter,
    exp: -2,
    prefix: centi
  } ],
  conversion: {
    base: pascal,
    factor: 98.0665e3
  },
  prefixable: false,
  aliases: [
    'technical atmosphere',
    'technical atmospheres',
    'kilogram force per square centimeter',
    'kilogram forces per square centimeter',
    'kilogram per square centimeter',
    'kilograms per square centimeter',
    'kilopond per square centimeter',
    'kiloponds per square centimeter'
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
      id: 'at',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'at',
        [ Format.LATEX ]: '\\mathrm{at}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'technical atmosphere', 'technical atmospheres' ],
      [ Lang.DE ]: [ 'technische Atmosphäre', 'technische Atmosphären' ]
    },
    description: {
      [ Lang.EN ]: 'obsolete unit of pressure, defined as the pressure exerted by a force of one kilogram-force applied to an area of one square centimeter',
      [ Lang.DE ]: 'veraltete Druckeinheit, definiert als der Druck, der durch eine Kraft von einem Kilogramm-Kraft auf eine Fläche von einem Quadratzentimeter ausgeübt wird'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof technicalAtmosphere >;
