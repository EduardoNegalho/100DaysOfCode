// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

const wage = parseFloat(prompt("Informe o salário: "))

let percentage = 0

if (wage <= 280) {
    percentage = 20
} else if (wage <= 700) {
    percentage = 15
} else if (wage <= 1500) {
    percentage = 10
} else {
    percentage = 5
}

let newWage = wage * (1 + percentage / 100)
let increaseValue = newWage - wage

alert(`
Salário antes do reajuste: ${wage}
Percentual de aumento aplicado: ${percentage}
valor do aumento: ${increaseValue.toFixed(2)}
Novo salário, após o aumento: ${newWage.toFixed(2)}
`)