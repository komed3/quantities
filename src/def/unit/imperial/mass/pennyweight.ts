import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const pennyweight = 'dwt' as UnitRef< MassDim, 'dwt' >;

export default ( {
  id: pennyweight,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 1.55517384
  },
  prefixable: false,
  aliases: [
    'pennyweight',
    'pennyweights'
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
      id: 'dwt',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'dwt',
        [ Format.LATEX ]: '\\mathrm{dwt}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'pennyweight', 'pennyweights' ],
      [ Lang.DE ]: [ 'Pfenniggewicht', 'Pfenniggewichte' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass, equal to 24 grains or 1/20 of an ounce (approx. 1.555 g)',
      [ Lang.DE ]: 'imperiale Masseeinheit, gleich 24 grains oder 1/20 Unze (ca. 1,555 g)'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof pennyweight >;
