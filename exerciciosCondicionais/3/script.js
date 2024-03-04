// Faça um script que leia três números inteiros e mostre o maior deles.

const numberOne = parseInt(prompt("Informe um número inteiro:"))
const numberTwo = parseInt(prompt("Informe um número inteiro:"))
const numberThree = parseInt(prompt("Informe um número inteiro:"))

if (numberOne > numberTwo && numberOne > numberThree) {
    alert(numberOne + " É o maior número")
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    alert(numberTwo + " É o maior número")
} else {
    alert(numberThree + " É o maior número")
}