// Função que chama ela mesma, com isso ela se executa de novo

function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

// dividir(256)

function fatorial(num) {
    console.log(`num = ${num}`)
    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    } else {
        console.log(`${num} * !${(num - 1)}`)
        return num * fatorial(num - 1)
    }
}

console.log(`\n!5 = ${fatorial(10)}`)