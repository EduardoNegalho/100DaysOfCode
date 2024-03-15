// Escreva uma função recursiva para calcular 
// o fatorial de um número.

function fatorial(num) {
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))