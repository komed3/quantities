import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const qcdLength = 'lQCD' as UnitRef< LengthDim, 'lQCD' >;

export default ( {
  type: UnitType.NAMED,
  id: qcdLength,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 2.103e-16
  },
  prefixable: false,
  aliases: [
    'QCD length',
    'QCD lengths'
  ],
  context: {
    system: [
      UnitSystem.NATURAL,
      UnitSystem.ATOMIC
    ],
    status: UnitStatus.ACTIVE,
    constant: true
  },
  meta: {
    symbol: [ {
      id: 'lQCD',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'lQCD',
        [ Format.LATEX ]: 'l_{\\mathrm{QCD}}'
      }
    } ],
    name: {
      [ Lang.EN ]: [ 'QCD length', 'QCD lengths' ],
      [ Lang.DE ]: [ 'QCD-Länge', 'QCD-Längen' ]
    },
    description: {
      [ Lang.EN ]: 'unit of length used in quantum chromodynamics, defined as the distance at which the strong coupling constant becomes large, approximately 0.2 fm',
      [ Lang.DE ]: 'Längeneinheit, die in der Quantenchromodynamik verwendet wird, definiert als die Entfernung, bei der die starke Kopplungskonstante groß wird, ungefähr 0,2 fm'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof qcdLength >;
