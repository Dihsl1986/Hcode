let carros = ["Palio 98", "toro", "Uno", 10, true, new Date(), function(){}];

//Para ver a quantidade de itens na minha array
//console.log(carros.length);


//Para pegar um item especifico de uma array
//console.log(carros[1]);

// Para pegar e mostrar o ano dentro de uma array.
/*
De dentro de uma position eu consigo o tipo
daquela variavel e encima dela, transformar o valor original de carros.
*/
//console.log(carros[5].getFullYear());

// Laço pra percorrer este array e dizendo que tipo de informação vocÊ tem em cada uma destas linhas.
// array aqui ele ganha um método dentro dele uma função que esta dentro desta
// array que se chama forEach.
//e que vai receber uma function anonima que vai ser passada como argumento no 
//metodo forEach.

/*
A function vai receber como argumento para o forEach 
que vai ser value e index.
ou seja qual é o iten do seu array que sta passando neste momento.
*/

carros.forEach(function(value, index) {

    console.log(index, value);

});


