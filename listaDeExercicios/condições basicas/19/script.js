// Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
// média e mostre na tela.No final, analise a média e mostre se o aluno teve ou
// não um bom aproveitamento(se ficou acima da média 7.0).

const studentName = prompt("Informe o nome do aluno:")
const score1 = parseFloat(prompt("Informe a primeira nota do aluno:"))
const score2 = parseFloat(prompt("Informe a segunda nota do aluno:"))

const avarege = (score1 + score2) / 2

if (avarege >= 7) {
    alert(`
    Aluno(a): ${studentName}
    Média: ${avarege}
    Aproveitamento bom
    `)
} else {
    alert(`
    Aluno(a): ${studentName}
    Média: ${avarege}
    Aproveitamento ruim
    `)
}