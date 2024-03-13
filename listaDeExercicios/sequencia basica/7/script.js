// Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
// sua terça parte.
// Ex:
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

const number = parseFloat(prompt("Digite um número real:"))

const double = number * 2
const thirdPart = number / 3

alert(`
O dobro de ${number} é ${double}
A terça parte de ${number} é ${thirdPart}
`)