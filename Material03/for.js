// for classico:

// const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

// for (let indice = 0; indice < 6; indice++) {
//     console.log('oi');
// };

// for (let indice = 0; indice < numeros.length; indice++) {
//     console.log(numeros[indice]);
// };
// ------------------------------------------------------------------------

//IMPORTANTE: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. 
//Se durante seus estudos você perceber que executou um código com loop infinito,
//finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”.

// ------------------------------------------------------------------------

// Media com for:

// const notas = [10, 6.5, 8, 7.5];
// let somaDasNotas = 0;

// for (let i = 0; i < notas.length; i++) {
//     somaDasNotas += notas[i];
// }

// const media = somaDasNotas / notas.length;

// console.log(`A media das notas é ${media}.`);

// ------------------------------------------------------------------------

// Media com for of:

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0

// for (let nota of notas) {
//     somaDasNotas += nota; 
// }

// const media = somaDasNotas / notas.length;

// console.log(`A media das notas é ${media}.`);