
export default function AgeCalculation(bday) {
  let birthday = new Date(bday);
  let ageInmillSec = Date.now() - birthday.getTime();
  let agesDf = new Date(ageInmillSec);
  let years = agesDf.getFullYear();
  let agesInYear = Math.abs(years - 1970);
  let agesInMonth = agesDf.getMonth();
  let agesInDays = agesDf.getDate();

  return agesInYear + " years old, " + agesInMonth + " months, "+agesInDays+" days old";
}
