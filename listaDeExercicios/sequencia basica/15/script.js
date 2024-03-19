// Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

const workedDays = 22

const hoursPerDay = 8
const hourValue = 25

const wage = (hourValue * hoursPerDay) * workedDays

console.log(`Salário: R$${wage.toFixed(2)}`)