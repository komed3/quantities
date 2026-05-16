import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { PressureDim } from '../../../../types/dimension';

import { pascal } from '../../si/derived/pascal';
import { poundForce } from '../force/poundForce';
import { inch } from '../length/inch';

export const poundForcePerSquareInch = 'psi' as UnitRef< PressureDim, 'psi' >;

export default ( {
  type: UnitType.NAMED,
  id: poundForcePerSquareInch,
  dim: PressureDim,
  structure: [ {
    unit: poundForce,
    exp: 1
  }, {
    unit: inch,
    exp: -2
  } ],
  conversion: {
    base: pascal,
    factor: 6.89475729e3
  },
  prefixable: false,
  aliases: [
    'pound force per square inch',
    'pound forces per square inch',
    'pound per square inch',
    'pounds per square inch'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL,
      UnitSystem.USC
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'psi',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'psi',
        [ Format.LATEX ]: '\\mathrm{psi}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'pound-force per square inch', 'pound-forces per square inch' ],
      [ Lang.DE ]: [ 'Pfund pro Quadratzoll', 'Pfunde pro Quadratzoll' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of pressure, commonly used in the US to express tire pressure and other mechanical pressures',
      [ Lang.DE ]: 'imperiale Druck-Einheit, die in den USA häufig zur Angabe von Reifendruck und anderen mechanischen Drücken verwendet wird'
    }
  }
} ) as const satisfies UnitDef< PressureDim, UnitType.NAMED, typeof poundForcePerSquareInch >;
