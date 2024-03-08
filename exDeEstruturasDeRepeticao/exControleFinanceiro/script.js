// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

// Peguntar saldo disponivel
// mostrar na tela o saldo e as opções (adicionar, remover, sair)

let balance = parseFloat(prompt("Informe o seu saldo atual:"))
let option = ""

do {
    option = prompt(`Saldo atual: R$ ${balance}
    Deseja fazer qual operação?
    1 - Adicionar
    2 - Remover
    3 - Sair
    `)

    switch (option) {
        case '1':
            let add = parseFloat(prompt("Informe quanto deseja adicionar"))
            if (add <= 0) {
                alert("Está operação não pode ser realizada.")
            } else {
                balance += add
            }
            break;

        case '2':
            let remove = parseFloat(prompt("Informe quanto deseja adicionar"))
            if (balance < remove || remove < 0) {
                alert("Está operação não pode ser realizada.")
            } else {
                balance -= remove
            }
            break;

        case '3':
            alert("Programa encerrado...")
            break;
        default:
            alert("Digite uma das opções válidas")
            break;
    }
} while (option !== '3');