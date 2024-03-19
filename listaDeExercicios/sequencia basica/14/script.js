// A locadora de carros precisa da sua ajuda para cobrar seus serviços.Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado.Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0, 20 por Km rodado.

const days = parseFloat(prompt("Informe a quantidade de dias pelos quais ele foi alugado"))
const kmTraveled = parseFloat(prompt("Informe a quantidade de KM's percorridos"))

const priceOfDay = 90
const priceOfKm = 0.20

if (days > 0 && kmTraveled > 0) {
    const price = (days * priceOfDay) + (kmTraveled * priceOfKm)

    alert(`Valor Total: R$${price.toFixed(2)}`)
} else {
    alert("Valores informados inválidos")
}
