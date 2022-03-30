/*
STRING

kabutes: 
- Viengubos(' ')
- Dvigubos (" ")
-----------------------
\ - back slahsas pries kabutes ( \') ( \") blokuoja 
'cia yra vienguba(\') ir dvyguba (") kabutes.';
'cia yra vienguba(\') ir dvyguba (\") kabutes';
- Backtick'as( ` )

Teksto simboliu kiekis: .length
*/

const name = 'Rokas';
console.log(name);

const lastname = "Abramavicius";
console.log(lastname);

const viengubaKabute = " Viengubos(' ') ";
console.log(viengubaKabute);

const dvygubaKabute = ' Dvigubos (" ") ';
console.log(dvygubaKabute);

const viengubakabute12 = 'cia yra vienguba(\') ir dvyguba (") kabutes.';
console.log(viengubakabute12);

const dvygubakabute12 = "cia yra vienguba(') ir dvyguba (\") kabutes.";
console.log(dvygubakabute12);

const kabutes12 = 'cia yra vienguba(\') ir dvyguba (\") kabutes';
console.log(kabutes12);
console.log('---------------------');
const clientName = 'Rokas';
const clientAge = 28;
// Client Rokas is 28 years old
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientSentence);

console.log('------Backtick-------');
const backtickCLient = `Client ${clientName} is ${clientAge} years old`;
console.log(backtickCLient);

console.log('--------');
const n1 = 7;
const n2 = 5;
const rez = n1 + n2;
// 7 + 5 = 12
const ats = `${n1} + ${n2} = ${n1 + n2} = ${rez}`;
console.log(ats); 

console.log('--------lenght-------');
const abc = 'ab"cd\'e\\f';
const abcDydis = abc.length;
console.log(`Abecele "${abc}" dydis yra ${abcDydis} simboliu.`);
