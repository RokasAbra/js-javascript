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
//for
let sumafor =0;
for (let i1 = 0; i1 < pazymiai.length; i1++) {
    const pazymis = pazymiai[i1];
    
    sumafor += pazymis;
    console.log(`${i1}) pazymis ${pazymis} [${sumafor}]`);
    
}
//const vidurkis = sumafor / pazymiai.length;
//console.log('vidurkis:', vidurkis);

console.log('------------');

//for (let i = -80; i < -60; i++) {
  //  console.log(i);
//}

console.log('--------------------------');

//WHILE

let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    
    const pazymis = pazymiai[i2];
    sumaWhile += pazymis;
    console.log(`${i2}) pazymis ${pazymis} [${sumaWhile}]`);
    i2++;
    
}

//FOR-OF
console.log('-----------------');
let sumaForOf = 0;
let i3 = 0;
for (const pazymis of pazymiai) {
    sumaForOf += pazymis;
    console.log(`${i3++}) pazymis ${pazymis} [${sumaForOf}]`);

}

//FOREACH
console.log('-----------------');
let sumaForEach = 0;// a    b        a = pazymys, b = i4, c = pazymiaiReference(masyvas)
pazymiai.forEach((pazymis, i4) => {
    sumaForEach += pazymis;
    console.log(`${i4++}) pazymis ${pazymis} [${sumaForEach}]`);

});

() => {}