// Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

const period = prompt("Informe o período que você estuda. M-(Matutino), V-(Vespertino) ou N-(Notruno)").toLowerCase()

if (period === 'm') {
    alert("Bom dia!")
} else if (period === 'v') {
    alert("Boa tarde!")
} else if (period === 'n') {
    alert("Boa noite!")
} else {
    alert("Valor inválido")
}