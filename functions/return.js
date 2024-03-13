// Operação no return
function calculateAverage(a, b) {
    return (a + b) / 2
}
const result = calculateAverage(7, 2)
// console.log(result)

// Retornando objeto
function createProduct(name, price, stock = 0) {
   const product = {
    name,
    price,
    stock
   } 
   return product
}
const smartphone = createProduct("Poco x6", 1800, 1)
// console.log(smartphone)

// return da função chamndo outra função
function rectangularArea(base, height) {
    return base * height
}
function squareArea(side) {
    return rectangularArea(side, side)
}

// console.log(squareArea(6))

// a função só retorna uma vez
function hello() {
    let text = "..."
    return text
    text = "Hello, World!"
    console.log(text)
}

console.log(hello())