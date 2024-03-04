// Faça um script que leia três números e mostre-os em ordem decrescente.

let numberOne = parseInt(prompt("Digite um número inteiro:"))
let numberTwo = parseInt(prompt("Digite um número inteiro:"))
let numberThree = parseInt(prompt("Digite um número inteiro:"))

let aux = numberOne

if (numberTwo > numberOne) {
    aux = numberTwo
    numberTwo = numberOne
    numberOne = aux
}

if (numberThree > numberOne) {
    aux = numberThree
    numberThree = numberOne
    numberOne = aux   
}

if (numberThree > numberTwo) {
    aux = numberThree
    numberThree = numberTwo
    numberTwo = aux
}

alert(`${numberOne}
${numberTwo}
${numberThree}`)