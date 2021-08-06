
//Aqui eu estou fazendo a atribuiçao de
// uma string para uma variável
//var olamundo = "Hello world!!" // <- para trocar vou precisar trocar o valor desta variavel,
//console.log("E ae Mundo!!");


/*console.log("Hello World!!");
console.log("Olá Mundo");*/

let a = 10;
const b = "10";
// = é operador de atribuição.
//comparando dois valores.
console.log(a == b); //operador de comparação
console.log(a === b); // para ter certeza que ele vai validar o conteúdo da sua variável.
                        //compração de valor e igualdade

console.log(a !== b); // Para saber se uma variável é diferente da outra.
console.log(a != b) //Para compara só um valor ignorando o tipo.
console.log(a == b && typeof b == "string") // AND Quando duas condições tem que ser verdadeiras ao mesmo tempo.
console.log(a == b && typeof a == "string") //
console.log(a == b || typeof a == "string") // OR Ou uma condição é verdadeira ou uma é verdade, ou as duas.

let cor = "verde";


if (cor === "verde") {
    
    console.log("Siga");

} else if (cor === "laranja") {

    console.log("atenção");

} else {

    console.log("Pare");

}