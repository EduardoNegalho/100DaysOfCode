// Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

let populationA = parseInt(prompt("Informe a população A"))
let rateA = parseFloat(prompt("Digite a taxa de crecimento da populaçã A"))
rateA /= 100

let populationB = parseInt(prompt("Informe a população B"))
let rateB = parseFloat(prompt("Digite a taxa de crecimento da populaçã B"))
rateB /= 100

let years = 0

while (populationA < populationB) {
    populationA *= (1 + rateA)
    populationB *= (1 + rateB) 

    years++
}

alert(`Será necessário ${years} anos para que a população A iguale ou ultrapasse a população B`)