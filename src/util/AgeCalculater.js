
export default function AgeCalculation(bday) {
  let birthday = new Date(bday);
  let month = bday.substring(5, 7);
  // let day = bday.substring(8, 10);

  let ageInmillSec = Date.now() - birthday.getTime();
  let agesDf = new Date(ageInmillSec);
  let years = agesDf.getFullYear();
  let agesInYear = Math.abs(years - 1970);
  let agesInMonth = 12 - month + agesDf.getMonth();
  //let agesInDays =

  return agesInYear + " years old, " + agesInMonth + " months old";
}
