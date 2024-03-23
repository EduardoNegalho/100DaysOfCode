// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
// ÍMPAR.

const number = parseInt(prompt("Digite um número para saber se é par ou ímpar:"))

if (number % 2 === 0) {
    alert(`${number} é par`)
} else {
    alert(`${number} é ímpar`)
}