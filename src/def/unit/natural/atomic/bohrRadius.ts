import type { UnitDef, UnitRef } from '../../../../types/def/unit';
import { Format, Lang, UnitStatus, UnitSystem, UnitType } from '../../../../types/dict';
import { LengthDim } from '../../../../types/dimension';

import { meter } from '../../si/base/meter';

export const bohrRadius = 'a0' as UnitRef< LengthDim, 'a0' >;

export default ( {
  type: UnitType.NAMED,
  id: bohrRadius,
  dim: LengthDim,
  structure: [],
  conversion: {
    base: meter,
    factor: 5.2917721054482e-11,
    uncertainty: 1.6e-10
  },
  prefixable: false,
  aliases: [
    'bohr radius',
    'bohr radii',
    'bohr radien'
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
      id: 'a0',
      canonical: true,
      format: {
        [ Format.PLAIN ]: 'a0',
        [ Format.UNICODE ]: 'a₀',
        [ Format.LATEX ]: 'a_{0}'
      }
    }, {
      id: 'rBohr',
      format: {
        [ Format.PLAIN ]: 'rBohr',
        [ Format.LATEX ]: 'r_{\\mathrm{Bohr}}'
      }
    } ],
    formula: {
      format: {
        [ Format.PLAIN ]: '(4*pi*epsilon0*hBar^2)/(e^2*me)',
        [ Format.UNICODE ]: '(4·π·ε₀·ℏ²)/(e²·mₑ)',
        [ Format.LATEX ]: '\\frac{4\\pi\\epsilon_{0}\\hbar^{2}}{e^{2}m_{e}}'
      }
    },
    name: {
      [ Lang.EN ]: [ 'bohr radius', 'bohr radii' ],
      [ Lang.DE ]: [ 'Bohrscher Radius', 'Bohrsche Radien' ]
    },
    description: {
      [ Lang.EN ]: 'unit of length in the atomic unit system, defined as the most probable distance between the nucleus and the electron in the ground state of hydrogen',
      [ Lang.DE ]: 'Längeneinheit im atomaren Einheitensystem, definiert als der wahrscheinlichste Abstand zwischen Kern und Elektron im Grundzustand des Wasserstoffatoms'
    }
  }
} ) as const satisfies UnitDef< LengthDim, UnitType.NAMED, typeof bohrRadius >;
