import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { ForceDim } from '../../../../types/dimension';

import { newton } from '../../si/derived/newton';

export const kilopond = 'kp' as UnitRef< ForceDim, 'kp' >;

export default ( {
  id: kilopond,
  dim: ForceDim,
  structure: [],
  conversion: {
    base: newton,
    factor: 9.80665
  },
  prefixable: false,
  aliases: [
    'kilopond',
    'kiloponds',
    'kilogram-force'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.OBSOLETE
  },
  deprecated: {
    since: '1978-01-01',
    replacement: newton
  },
  meta: {
    symbol: [ {
      id: 'kp',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'kp',
        [ Format.LATEX ]: '\\mathrm{kp}'
      }
    }, {
      id: 'kgf',
      format: {
        [ Format.PLAIN ]: 'kgf',
        [ Format.LATEX ]: '\\mathrm{kg_{F}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'kilopond', 'kiloponds' ],
      [ Lang.DE ]: [ 'Kilopond' ]
    },
    description: {
      [ Lang.EN ]: 'obsolete unit of force, equal to the force exerted by one kilogram of mass in standard Earth gravity',
      [ Lang.DE ]: 'veraltete Kraft-Einheit, gleich der Kraft, die von einem Kilogramm Masse in der Standard-Erdbeschleunigung ausgeübt wird'
    }
  }
} ) as const satisfies UnitDef< ForceDim, typeof kilopond >;
