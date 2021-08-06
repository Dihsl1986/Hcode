 /*Primeiro tipo de function a de soma*/

/*function sum(number1, number2,) {

    return number1 + number2;

}

let resultado = sum(1000, 350);
console.log(resultado);*/


/* Segundo tipo de function com template literal e eval function nativa */
/*
function calculate(number1, number2, operator) {

    return eval(`${number1} ${operator} ${number2}`);

}

let resultado = calculate(5, 2, "-");
console.log(resultado);*/

/* Terceiro tipo de function a function anonima 

(function(number1, number2, operator){
    return eval(`${number1} ${operator} ${number2}`);
})(1, 2, "*");

let result = calculate(1, 2, "*");

console.log(result);*/ 

/* terce tipo de function é a arrow function */

let calculate = (number1, number2, operator) => {

    return eval(`${number1} ${operator} ${number2}`);

}

let result = calculate(2, 90, "*");

console.log(result);