// Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.

const number = parseInt(prompt("Digite um número inteiro que deseja ver a tabuada de 0 a 20 do respectivo número:"))

let result = ``

for (let i = 0; i <= 20; i++) {
    let multiply = number * i
    if (result !== ``) {
        result += `
        `
    }
    result += `${number} X ${i} = ${multiply}`
}

alert(result)