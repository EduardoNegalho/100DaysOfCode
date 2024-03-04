// Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

let letter = prompt("Digite uma letra do alfabeto:").toLowerCase()

if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    alert(letter.toUpperCase() + ": é vogal")
} else {
    alert(letter.toUpperCase() + ": é consoante")
}