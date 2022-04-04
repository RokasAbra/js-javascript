console.log('DAUGYBA');
console.log('-------------');

//const daugyba = (a, b) => a * b;

function daugyba (a, b) {
    //jei a nera skaicius -> ERROR
    console.log(typeof a);
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
       
    }


    if (isNaN(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius'
    }
    if ('' + b ==='NaN') {
        return 'ERROR: antras parametras turi buti skaicius' ;
    }
    //jei b nera skaicius -> ERROR
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius' ;  
    }

    return a * b
}

console.log(daugyba (7, 5));
console.log(daugyba (-7, 5));
console.log(daugyba (-7, -5));
console.log(daugyba (7, -5));
console.log(daugyba (7.7, -5));

console.log('ERROR', '-->', daugyba (7.7, 'labas'));
console.log('ERROR', '-->', daugyba ('labas', 5));
console.log('ERROR', '-->', daugyba (7.7, ''));
console.log('ERROR', '-->', daugyba ('', 5));
console.log('ERROR', '-->', daugyba ('', NaN));

