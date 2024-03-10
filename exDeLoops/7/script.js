// Faça um programa que leia 5 números e informe o maior número.
let number = parseFloat(prompt("Digite um número:"))
let bigger = number

for(let i = 0; i < 4; i++) {
    number = parseFloat(prompt("Digite um número:"))

    if (number > bigger) {
        bigger = number
    }
}

alert(`O maior número digitado foi: ${bigger}`)