import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const angstrom = 'angstrom' as UnitRef< LengthDim, 'angstrom' >;

export default ( {
  id: angstrom,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 10e-10
  },
  prefixable: false,
  aliases: [
    'Å',
    'angstroms'
  ],
  context: {
    system: [
      UnitSystem.COMMON
    ],
    status: UnitStatus.HISTORICAL
  },
  meta: {
    symbol: [ {
      id: 'A',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'A',
        [ Format.UNICODE ]: 'Å',
        [ Format.LATEX ]: '\\mathrm{\\AA}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'angstrom', 'angstroms' ],
      [ Lang.DE ]: [ 'Ångström' ]
    },
    description: {
      [ Lang.EN ]: 'historical unit of length equal to one ten-billionth of a meter, used primarily to express wavelengths of light and interatomic distances',
      [ Lang.DE ]: 'historische Längeneinheit, die einem Zehnmilliardstel Meter entspricht und hauptsächlich zur Angabe von Lichtwellenlängen und interatomaren Abständen verwendet wird'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof angstrom >;
