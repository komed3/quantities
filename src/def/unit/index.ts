import type { UnitRegistry } from '../../types/def/registry';

// SI Base
import { ampere } from './si/base/ampere';
import { candela } from './si/base/candela';
import { gram } from './si/base/gram';
import { kelvin } from './si/base/kelvin';
import { meter } from './si/base/meter';
import { mole } from './si/base/mole';
import { second } from './si/base/second';

// SI Derived
import { hertz } from './si/derived/hertz';
import { joule } from './si/derived/joule';
import { newton } from './si/derived/newton';
import { pascal } from './si/derived/pascal';
import { radian } from './si/derived/radian';
import { steradian } from './si/derived/steradian';

// Astronomical
import { astronomicalUnit } from './astronomical/length/astronomicalUnit';
import { earthRadius } from './astronomical/length/earthRadius';
import { lightSecond } from './astronomical/length/lightSecond';
import { lightYear } from './astronomical/length/lightYear';
import { lunarDistance } from './astronomical/length/lunarDistance';
import { nominalEarthRadius } from './astronomical/length/nominalEarthRadius';
import { parsec } from './astronomical/length/parsec';
import { solarRadius } from './astronomical/length/solarRadius';
import { earthMass } from './astronomical/mass/earthMass';
import { solarMass } from './astronomical/mass/solarMass';
import { galacticYear } from './astronomical/time/galacticYear';
import { siderealDay } from './astronomical/time/siderealDay';
import { siderealYear } from './astronomical/time/siderealYear';

// CGS
import { barye } from './cgs/barye';
import { dyne } from './cgs/dyne';
import { erg } from './cgs/erg';
import { biot } from './cgs/emu/biot';
import { statampere } from './cgs/esu/statampere';

// Common
import { arcminute } from './common/angle/arcminute';
import { arcsecond } from './common/angle/arcsecond';
import { degree } from './common/angle/degree';
import { gon } from './common/angle/gon';
import { angstrom } from './common/length/angstrom';
import { cable } from './common/length/cable';
import { nauticalMile } from './common/length/nauticalMile';
import { carcel } from './common/luminousIntensity/carcel';
import { hefnerLamp } from './common/luminousIntensity/hefnerLamp';
import { carat } from './common/mass/carat';
import { ton } from './common/mass/ton';
import { bar } from './common/pressure/bar';
import { meterWater } from './common/pressure/meterWater';
import { millimeterMercury } from './common/pressure/millimeterMercury';
import { standardAtmosphere } from './common/pressure/standardAtmosphere';
import { technicalAtmosphere } from './common/pressure/technicalAtmosphere';
import { torr } from './common/pressure/torr';
import { squareDegree } from './common/solidAngle/squareDegree';
import { celsius } from './common/temperature/celsius';
import { delisle } from './common/temperature/delisle';
import { leiden } from './common/temperature/leiden';
import { newton as newtonTemp } from './common/temperature/newton';
import { reaumur } from './common/temperature/reaumur';
import { romer } from './common/temperature/romer';
import { day } from './common/time/day';
import { hour } from './common/time/hour';
import { julianYear } from './common/time/julianYear';
import { minute } from './common/time/minute';
import { shake } from './common/time/shake';
import { svedberg } from './common/time/svedberg';
import { tropicalYear } from './common/time/tropicalYear';
import { week } from './common/time/week';
import { year } from './common/time/year';

// Imperial
import { poundal } from './imperial/force/poundal';
import { poundForce } from './imperial/force/poundForce';
import { chain } from './imperial/length/chain';
import { foot } from './imperial/length/foot';
import { furlong } from './imperial/length/furlong';
import { inch } from './imperial/length/inch';
import { link } from './imperial/length/link';
import { mile } from './imperial/length/mile';
import { rod } from './imperial/length/rod';
import { thou } from './imperial/length/thou';
import { yard } from './imperial/length/yard';
import { candlepower } from './imperial/luminousIntensity/candlepower';
import { dram } from './imperial/mass/dram';
import { grain } from './imperial/mass/grain';
import { longCwt } from './imperial/mass/longCwt';
import { longTon } from './imperial/mass/longTon';
import { ounce } from './imperial/mass/ounce';
import { pennyweight } from './imperial/mass/pennyweight';
import { pound } from './imperial/mass/pound';
import { stone } from './imperial/mass/stone';
import { troyOunce } from './imperial/mass/troyOunce';
import { troyPound } from './imperial/mass/troyPound';
import { inchMercury } from './imperial/pressure/inchMercury';
import { poundForcePerSquareInch } from './imperial/pressure/poundForcePerSquareInch';
import { fahrenheit } from './imperial/temperature/fahrenheit';
import { rankine } from './imperial/temperature/rankine';
import { fortnight } from './imperial/time/fortnight';

// Natural (Atomic)
import { atomicCurrent } from './natural/atomic/atomicCurrent';
import { atomicForce } from './natural/atomic/atomicForce';
import { atomicMass } from './natural/atomic/atomicMass';
import { atomicTime } from './natural/atomic/atomicTime';
import { bohrRadius } from './natural/atomic/bohrRadius';
import { electronRadius } from './natural/atomic/electronRadius';
import { qcdLength } from './natural/atomic/qcdLength';
import { xunit } from './natural/atomic/xunit';

// Natural (Planck)
import { planckCurrent } from './natural/planck/planckCurrent';
import { planckForce } from './natural/planck/planckForce';
import { planckFrequency } from './natural/planck/planckFrequency';
import { planckLength } from './natural/planck/planckLength';
import { planckMass } from './natural/planck/planckMass';
import { planckPressure } from './natural/planck/planckPressure';
import { planckTemperature } from './natural/planck/planckTemperature';
import { planckTime } from './natural/planck/planckTime';

// Natural (Stoney)
import { stoneyLength } from './natural/stoney/stoneyLength';
import { stoneyTime } from './natural/stoney/stoneyTime';

// USC
import { kilopound } from './usc/force/kilopound';
import { shortCwt } from './usc/mass/shortCwt';
import { shortTon } from './usc/mass/shortTon';

export default ( [
  // SI Base
  ampere, candela, gram, kelvin, meter, mole, second,

  // SI Derived
  hertz, joule, newton, pascal, radian, steradian,

  // Astronomical
  astronomicalUnit, earthMass, earthRadius, galacticYear, lightSecond,
  lightYear, lunarDistance, nominalEarthRadius, parsec, siderealDay,
  siderealYear, solarMass, solarRadius,

  // CGS
  barye, biot, dyne, erg, statampere,

  // Common
  angstrom, arcminute, arcsecond, bar, cable, carat, carcel, celsius,
  day, degree, delisle, gon, hefnerLamp, hour, julianYear, leiden,
  meterWater, millimeterMercury, minute, nauticalMile, newtonTemp,
  reaumur, romer, shake, squareDegree, standardAtmosphere, svedberg,
  technicalAtmosphere, ton, torr, tropicalYear, week, year,

  // Imperial
  candlepower, chain, dram, fahrenheit, foot, fortnight, furlong, grain,
  inch, inchMercury, link, longCwt, longTon, mile, ounce, pennyweight,
  pound, poundal, poundForce, poundForcePerSquareInch, rankine, rod,
  stone, thou, troyOunce, troyPound, yard,

  // Natural (Atomic)
  atomicCurrent, atomicForce, atomicMass, atomicTime, bohrRadius,
  electronRadius, qcdLength, xunit,

  // Natural (Planck)
  planckCurrent, planckForce, planckFrequency, planckLength, planckMass,
  planckPressure, planckTemperature, planckTime,

  // Natural (Stoney)
  stoneyLength, stoneyTime,

  // USC
  kilopound, shortCwt, shortTon
] ) as const satisfies UnitRegistry;
