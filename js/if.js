/*

IF

Sablonai:
if () {}
if () {} else {}

Palyginimo operatoriai:

- Visi: 
 >,  
 <, 
 <=(maziau arba lygu), 
 >=(daugiau arba lygu),
 == ( ar lygu a == b ir lyginamos tik reiksmes number = number, string = string),
 != (ne lygu) a != b (a nera lygu b),
 !== 
 === (tikrina tipa, griezta lygibe)
- Naudotini: <, >, <=, >=, ===, !==
- Nenaudotini: ==, !=
 (= yra priskirimo operatorius a = b, a = 2)
*/

const a = 7;
const b = 5;

if (a == b) {
    console.log('A yra lygu B');
} else {
    console.log('A nera lygu B');

}

