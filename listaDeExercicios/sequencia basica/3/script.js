// Crie um programa que leia o nome e o salário de um funcionário, mostrando no
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

const name = prompt("Informe o nome:")
const wage = parseFloat(prompt("Informe o salário:"))

alert(`
Nome do funcionário: ${name}
Salário: ${wage}
O funcionário ${name} tem um salário de R$${wage} em Junho.
`)