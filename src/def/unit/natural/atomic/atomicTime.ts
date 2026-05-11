import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem } from '../../../../types/dict';
import { TimeDim } from '../../../../types/dimension';

import { second } from '../../si/base/second';

export const atomicTime = 'auTime' as UnitRef< TimeDim, 'auTime' >;

export default ( {
  id: atomicTime,
  dim: TimeDim,
  structure: [],
  conversion: {
    base: second,
    factor: 2.418884326586426e-17
  },
  prefixable: false,
  aliases: [
    'atomic time',
    'atomic times'
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
      id: 'auTime',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'a.u. of time',
        [ Format.LATEX ]: '\\mathrm{a.u.\\,of\\,time}'
      }
    }, {
      id: 'auZeit',
      context: {
        lang: Lang.DE
      },
      format: {
        [ Format.PLAIN ]: 'a.u. Zeit',
        [ Format.LATEX ]: '\\mathrm{a.u.\\,Zeit}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: 'hBar/Eh',
        [ Format.UNICODE ]: 'ℏ/Eₕ',
        [ Format.LATEX ]: '\\hbar/E_{\\mathrm{h}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'atomic time', 'atomic times' ],
      [ Lang.DE ]: [ 'atomare Zeiteinheit', 'atomare Zeiteinheiten' ]
    },
    description: {
      [ Lang.EN ]: 'unit of time in the atomic unit system, defined as the time it takes for an electron to orbit a proton in the ground state of hydrogen',
      [ Lang.DE ]: 'Zeiteinheit im atomaren Einheitensystem, definiert als die Zeit, die ein Elektron benötigt, um im Grundzustand des Wasserstoffatoms ein Proton zu umkreisen'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof atomicTime >;
