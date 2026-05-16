import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { AngleDim } from '../../../../types/dimension';

import { radian } from '../../si/derived/radian';

export const gon = 'gon' as UnitRef< AngleDim, 'gon' >;

export default ( {
  type: UnitType.NAMED,
  id: gon,
  dim: AngleDim,
  structure: [],
  conversion: {
    base: radian,
    factor: Math.PI / 200
  },
  prefixable: false,
  aliases: [
    'gon',
    'gradian',
    'gradians',
    'grad',
    'grads'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.ACTIVE
  },
  meta: {
    symbol: [ {
      id: 'gon',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'gon',
        [ Format.LATEX ]: '\\mathrm{gon}'
      }
    }, {
      id: 'g',
      format: {
        [ Format.PLAIN ]: 'g',
        [ Format.LATEX ]: '^{\\mathrm{g}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'gradian', 'gradians' ],
      [ Lang.DE ]: [ 'Neugrad' ]
    },
    description: {
      [ Lang.EN ]: 'unit of angle, defined as 1/400 of a full rotation',
      [ Lang.DE ]: 'Winkeleinheit, definiert als 1/400 einer vollen Umdrehung'
    }
  }
} ) as const satisfies UnitDef< AngleDim, UnitType.NAMED, typeof gon >;
