// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

const carSpeed = parseFloat(prompt("Informe a velocidade do veiculo"))

if (carSpeed > 80) {
    const trafficTicket = 5 * (carSpeed - 80)
    alert(`
    Veículo multado: R$${trafficTicket.toFixed(2)}
    `)
} else {
    alert(`
    Veículo dentro do limite permitido
    `)
}