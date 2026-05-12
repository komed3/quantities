import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { MassDim } from '../../../../types/dimension';

import { gram } from '../../si/base/gram';

export const dram = 'dr' as UnitRef< MassDim, 'dr' >;

export default ( {
  id: dram,
  dim: MassDim,
  structure: [],
  conversion: {
    base: gram,
    factor: 1.7718451953125
  },
  prefixable: false,
  aliases: [
    'dram',
    'drams'
  ],
  context: {
    system: [
      UnitSystem.IMPERIAL
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'z',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'dr',
        [ Format.UNICODE ]: 'ʒ',
        [ Format.LATEX ]: '\\mathfrak{Z}'
      }
    }, {
      id: 'dr',
      format: {
        [ Format.PLAIN ]: 'dr',
        [ Format.LATEX ]: '\\mathrm{dr}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'dram', 'drams' ],
      [ Lang.DE ]: [ 'Drachme', 'Drachmen' ]
    },
    description: {
      [ Lang.EN ]: 'imperial unit of mass, equal to 1/16th of an ounce or 1/256th of a pound',
      [ Lang.DE ]: 'imperiale Masseeinheit, gleich 1/16 Unze oder 1/256 Pfund'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof dram >;
