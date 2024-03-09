// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

const cards = []
let option = ""

do {
    let amount = cards.length

    option = prompt(`
    Quantidade de cartas: ${amount}
    (1) - Adicionar uma Carta
    (2) - Puxar uma carta
    (3) - Sair
    `)

    switch (option) {
        case '1':
            const cardName = prompt("Informe o nome da carta:")
            cards.unshift(cardName)
            alert(`Carta ${cardName} adicionada`)
            break;

        case '2':
            if (cards.length > 0) {
                const removeCard = cards.shift()
                alert(`Carta ${removeCard} removida`)
            }else {
                alert("Baralho Vazio")
            }

            break;

        case '3':
            alert("Programa Finalizado...")
            break;
        default:
            alert("Digite uma opção válida")
            break;
    }
} while (option !== '3');