function calcular(a, b, operacao) {
    console.log("Realizando operação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma")
    return x + y
}

console.log(calcular(17, 8, somar))

console.log(calcular(17, 8, function(x,y) {
    console.log("\nRealizando uma Subtração")
    return x - y
}))  

// High-Order exemplo de utilização

function exibirElementos(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const fruits =  ["Maça", "Banana", "Goiaba", "Laranja", "Uva"]

// forEach com função anônima
fruits.forEach(function(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
})

for (let i = 0; i < fruits.length; i++) {
    exibirElementos(fruits[i], i, fruits)
}

// forEach com high order function
fruits.forEach(exibirElementos)

