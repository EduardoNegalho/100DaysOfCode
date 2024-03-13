// Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$4,97.

const moneyInWallet = parseFloat(prompt("Informe quanto você tem na carteira:"))
 
const dolar = 4.97
const realToDolar = moneyInWallet / dolar

alert(`Você pode compara US$${realToDolar.toFixed(2)}`)