// [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

const quantidadeDeCigarros = parseInt(prompt("Informe a quantidade de cigarros que você fuma por dia: "))
const anosDeFumante = parseInt(prompt("Informe á quantos anos você fuma: "))

const minutosPerdidos = 10
const minutosPorDia = 1440

const minutosPerdidosPorAno = quantidadeDeCigarros * minutosPerdidos * 365 * anosDeFumante

const diasPerdidos = minutosPerdidosPorAno / minutosPorDia
alert(`Você perdeu aproximadamente ${diasPerdidos.toFixed(1)} dias de vida devido ao hábito de fumar.`)