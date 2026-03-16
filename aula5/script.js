// // EX 1
// let num = parseFloat(prompt("Digite um número: "));

// if (num % 2 == 0){
//     console.log("o número é par");
// } else {
//     console.log("O número é ímpar");
// }

// // EX 2
// let idade = parseFloat(prompt("Digite sua idade: "))
// if (idade >= 18){
//     console.log("Você é maior de idade")
// }else {
//     console.log("Você é menor de idade")
// }
//exercicio 03

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

//exercicio 04

// let i = parseFloat(prompt("Digite um número: "));
// while (i) {
//     console.log(i);
//     i--;
// }

// exercicio 05
// i = prompt("Digite um numero: ");
// for (let m = 1; m < 11; m++){
//     mult = i * m;
//     console.log(mult);
// }

// exercicio 06

// i = prompt("Digite um numero: ");
// for (let s = 0; s <= i; s++){  
//     soma = 0 + s;
//     console.log(soma);
// }

//exercicio 07

let num = parseInt(prompt("Digite um número:"));
let ehPrimo = true;

if (num <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            ehPrimo = false; // Encontrou divisor, não é primo
            break;
        }
    }
}

if (ehPrimo) {
    console.log(num + " é um número primo.");
} else {
    console.log(num + " não é um número primo.");
}