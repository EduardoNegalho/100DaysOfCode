// Calculadora de 4 operações
// peça dois números ao usuário
// Mostre o resultado das quatro operações básicas

let num1 = parseFloat(prompt("Informe um número: "))
let num2 = parseFloat(prompt("Informe outro número: "))

let soma = (num1 + num2).toFixed(2)
let subtracao = (num1 - num2).toFixed(2)
let multiplicacao = (num1 * num2).toFixed(2)
let divisao = (num1 / num2).toFixed(2)

alert(
    `${num1} + ${num2} = ${soma}\n ${num1} - ${num2} = ${subtracao}\n 
    ${num1} * ${num2} = ${multiplicacao}\n ${num1} / ${num2} = ${divisao}`
)