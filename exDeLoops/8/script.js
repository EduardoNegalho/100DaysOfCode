// Faça um programa que leia 5 números e informe a soma e a média dos números.
let sum = 0

for (let i = 0; i < 5; i++){
    const numbers = parseFloat(prompt("Digite um número:"))
    sum += numbers
}

const average = sum / 5
alert(`
Total da soma: ${sum}
Média: ${average}
`)