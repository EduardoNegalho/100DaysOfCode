// Escreva uma função recursiva para calcular a soma dos primeiros n números inteiros.

function somaInt(n) {
    if (n === 1) {
        return 1
    } else {
        return n + somaInt(n - 1)
    }
}

console.log(somaInt(17))