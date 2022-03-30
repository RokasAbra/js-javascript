/* 
ARRAY
- Pozicijos prasideda nuliu
- Pozicijos tik sveikieji skaiciai
- ilgis / irasu kiekis -> .length
*/

const pazymiai = [10, 2, 8, 4, 6, 5];
console.log('Pazymiai', pazymiai);



// pazymiu vidurki
// pazymiu kiekis
// koks maziausias
// koks didziausias
// ...

// koks pirmas, antras, trecias
console.log('------pirmas-------');
console.log('pirmas:', pazymiai[0]);
console.log('------antras-------');
console.log('antras:', pazymiai[1]);
console.log('trecias:', pazymiai[2]);

// koks paskutinis
console.log('-----paskutinis------');
const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis - 1;

console.log('paskutinis:', pazymiai[paskutinioPozicija]);
console.log('paskutinis:', pazymiai[pazymiai.length - 1]);

// masyvas -> ilgis -> paskutinio pozicija
// [1] -> 1 -> 0
// [1, 2] -> 2 -> 1
// [1, 4, -6] -> 3 -> 2
// [1, 4, -6, 3] -> 4 -> 3
console.log('-----------');
const studentai = ['Petras', 'Jonas', 'Rokas', 'Ona'];
console.log(studentai);
let index = 0;
console.log(`cia yra: ${studentai[index++]}.`);
console.log(`cia yra: ${studentai[index++]}.`);
console.log(`cia yra: ${studentai[index++]}.`);
console.log(`cia yra: ${studentai[index++]}.`);