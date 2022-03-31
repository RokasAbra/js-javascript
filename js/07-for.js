/*
Ciklas - Loop: for, while, for-in, for-of, foreach, ...
*/

const pazymiai = [10, 2, 8, 4, 6, 9];

console.log('Start');
for (let i=0; i<5; i++) {
    console.log(pazymiai, i);

}

console.log('End');
console.log('Start');

let suma =0;
for (let i = 0; i < pazymiai.length; i++) {
    const pazymis = pazymiai[i];
    
    suma += pazymis;
    console.log(`${i}) pazymis ${pazymis} [${suma}]`);
    
}
const vidurkis = suma / pazymiai.length;
console.log('vidurkis:', vidurkis);