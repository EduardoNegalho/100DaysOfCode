// Escreva uma função recursiva para calcular 
// o n-ésimo termo da sequência de Fibonacci.

function fibonacci(num) {
    if (num <= 1) {
        return num
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)  
    }
}

console.log(fibonacci(6))