// Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let populationA = 80000
const rateA = 0.03

let populationB = 200000
const rateB = 0.015

let years = 0

while (populationA < populationB) {
    populationA *= (1 + rateA)
    populationB *= (1 + rateB)

    years++
}

console.log(`Será necessário ${years} anos para que a população A iguale ou ultrapasse a população B`)