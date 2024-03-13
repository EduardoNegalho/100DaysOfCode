// Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

const number = parseInt(prompt("Digite um número:"))

const predecessor = number - 1
const successor = number + 1

alert(`
O antecessor de ${number} é ${predecessor}
O sucessor de ${number} é ${successor}
`)