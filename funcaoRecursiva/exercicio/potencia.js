// Implemente uma função recursiva que, dados dois números 
// inteiros x e n, calcula o valor de xn.

function potencia(base, p) {
    if (p === 0) {
        return 1
    } else {
        return base * potencia(base, p - 1)
    }
}

console.log(potencia(5,2))