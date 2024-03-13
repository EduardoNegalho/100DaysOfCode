// Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

const score1 = parseFloat(prompt("Digite a primeira nota do aluno"))
const score2 = parseFloat(prompt("Digite a segunda nota do aluno"))

const medium = (score1 + score2) / 2

alert(`A média entre ${score1} e ${score2} é igual a ${medium}`)