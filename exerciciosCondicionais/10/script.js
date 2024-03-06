// Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

const number = parseInt(prompt("Digite um número de 1 a 7 e descubra o dia da semana"))

if (number === 1) {
    alert("Domingo")
} else if (number === 2) {
    alert("Segunda")
} else if (number === 3) {
    alert("Terça")
} else if (number === 4) {
    alert("Quarta")
} else if (number === 5) {
    alert("Quinta")
} else if (number === 6) {
    alert("Sexta")
} else if (number === 7) {
    alert("Sábado")
} else {
    alert("Valor inválido")
}