// -----peça as seguintes informações-----
// primeiro nome
// sobrenome
// campo de estudos
// ano de nascimento
// -----Exiba o nome completo, campo de estudos, e a idade (como base no ano de nascimento)-----

let nome = prompt("Informe seu nome: ")
let sobrenome = prompt("Informe seu sobrenome: ")
let campoDeEstudos = prompt("Informe seu campo de estudos:") 
let anoDeNasc = parseInt(prompt("Informe seu ano de nascimento: "))
console.log(anoDeNasc)

let nomeCompleto = nome + " " + sobrenome
let idade = 2024 - anoDeNasc

alert(
    "Seu nome completo é: " + nome + " " + sobrenome + 
    "\nSeu campo de estudos é: " + campoDeEstudos +
    "\nSua idade é: " + idade
)