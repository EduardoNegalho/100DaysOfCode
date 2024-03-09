const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// add elementos no final
arr.push("Rio de Janeiro")
console.log(arr)

// add elementos no inicio
arr.unshift("São Paulo")
console.log(arr)

// removendo elementos do final
arr.pop()
console.log(arr)

// removendo elementos do inicio
arr.shift()
console.log(arr)

// pesquisa por um elemento (includes)
// return true or false
const inclui = arr.includes("Sam")
console.log(inclui)

// pesquisar pelo primeiro elemento correspondente e retorna o index
const indice = arr.indexOf("Sam")
console.log(indice)

// cortar elemento
const corte = arr.slice(0, 4)
console.log(corte)

// concatenando 
const concatenando = arr.concat(corte, "Lisboa")
console.log(concatenando)

// substituição de elementos
const sub = concatenando.splice(indice, 1, "Substistituido")
console.log(concatenando)
console.log(sub)