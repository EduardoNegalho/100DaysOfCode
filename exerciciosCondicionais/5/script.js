// Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.

const numberOne = parseInt(prompt("Digite um número inteiro:"))
const numberTwo = parseInt(prompt("Digite um número inteiro:"))
const numberThree = parseInt(prompt("Digite um número inteiro:"))

let bigger = 0
let smaller = 0

if (numberOne > numberTwo && numberOne > numberThree) {
    bigger = numberOne
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    bigger = numberTwo
} else {
    bigger = numberThree
}

if (numberOne < numberTwo && numberOne < numberThree) {
    smaller = numberOne
} else if (numberTwo < numberOne && numberTwo < numberThree) {
    smaller = numberTwo
} else {
    smaller = numberThree
}

alert(`
Maior: ${bigger}
Menor: ${smaller}
`)