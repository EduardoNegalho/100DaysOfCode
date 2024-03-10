// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

while (true) {
    const name = prompt("Informe seu nome")
    const age = parseInt(prompt("Informe sua idade"))
    const wage = parseFloat(prompt("Informe seu salário"))
    const sex = prompt("Informe seu sexo").toLowerCase()
    const maritalSatatus = prompt("Informe seu estado civil").toLowerCase()

    if (name.length < 3) {
        alert("O nome precisa ter mais que três caracteres")
    } else if (age < 0 || age > 150) {
        alert("Digite uma idade entre 0 e 150")
    } else if (wage < 0) {
        alert("O salário precisa ser maior que 0")
    } else if (sex !== 'f' && sex !== 'm') {
        alert("Digite um gênero válido")
    } else if (maritalSatatus !== 's' && maritalSatatus !== 'c' &&
    maritalSatatus !== 'v' && maritalSatatus !== 'd') {
        alert("Informe um estado civil válido")
    } else {
        alert("Todas as informações estão válidas!")
        break
    }
}