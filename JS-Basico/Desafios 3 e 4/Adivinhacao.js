const prompt = require("prompt-sync")();

var palpite = Number(prompt("Advinhe qual numero estou pensando (entre 1 e 100): "));
let numero = Math.round(Math.random() * 100);
tentativas = 0;

if (palpite === 0 || palpite > 100) {
    console.log("Ops! Parece que você não digitou um número válido.");
    var palpite = Number(prompt("Pense novamente em um numero (entre 1 e 100): "));
    tentativas++;
}

while (palpite !== numero) {
    if (palpite < numero) {
        console.log("O número é maior do que " + palpite);
    } else {
        console.log("O número é menor do que " + palpite);
    }
    var palpite = Number(prompt("Tente novamente: "));
    tentativas++;
}

console.log("Parabéns! Você acertou o número " + numero, "em " + tentativas + " tentativas.");