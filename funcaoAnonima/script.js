const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = function(arr) {
    const pares = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            pares.push(arr[i])
        }        
    }
    return pares
}

console.log(numerosPares(arr))