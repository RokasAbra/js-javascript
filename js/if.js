/*

IF

Sablonai:
- if () {}
- if () {} else {}
- if () {} else if {}
- if () {} else if {} else {}
- if () {} else if {} ..... else if {}
- if () {} else if {} ..... else if {} else {}

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
console.log('------------------');
const day = 3;
if (day === 1) {
    console.log('pirmadienis');
}else if (day === 2) {
    console.log('antradienis');
}else if (day === 3) {
    console.log('treciadienis');
}else if (day === 4) {
    console.log('ketvirtadienis');
}else if (day === 5) {
    console.log('penktadienis');
}else if (day === 6) {
    console.log('sestadienis');
}else if (day === 7) {
    console.log('sekmadienis');
}else {
    console.log('tokia diena savaiteja neegzistuoja');
}

console.log('-----------------');

const akiuSpalva = 'ruda';

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai');
}else {
    if(akiuSpalva === 'melyna'){
        console.log('Melynakiai megsta melynes');
    }else {
        if(akiuSpalva === 'ruda'){
            console.log('Rudaakiai yra melagiai');
        }

    }
}


console.log('-----------------');

const temperatura = 25;
const nuoKadaLaikomeJogSilta = 15;
const arYraKrituliu = false;

if (arYraKrituliu){
    //siuo metu lyja
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('varyk su maike');
    }else{
        console.log('Tau reikes kailiniu');
    }
}else{
    // siuo metu ne lyja
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Gali eiti nuogas');
    }else {
        console.log('Be striukes prapulsi');
    }
}

console.log('------------');








