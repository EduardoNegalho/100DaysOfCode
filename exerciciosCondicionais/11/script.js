// Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

//       Média de Aproveitamento  Conceito
//       Entre 9.0 e 10.0                      A
//       Entre 7.5 e 9.0                        B
//       Entre 6.0 e 7.5                        C
//       Entre 4.0 e 6.0                        D
//       Entre 4.0 e zero                      E
//     O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

const score1 = parseFloat(prompt("Digite a primeira nota do aluno"))
const score2 = parseFloat(prompt("Digite a segunda nota do aluno"))

const media = (score1 + score2) / 2
let conceito
let resultado

if (media < 4) {
    conceito = 'E'
    resultado = 'Reprovado'
} else if (media < 6) {
    conceito = 'D'
    resultado = 'Reprovado'
} else if (media < 7.5) {
    conceito = 'C'
    resultado = 'Aprovado'
} else if (media < 9) {
    conceito = 'B'
    resultado = 'Aprovado'
} else if (media <= 10) {
    conceito = 'A'
    resultado = 'Aprovado'
} else {
    alert("Valor inválido")
}

alert(`
Nota 1: ${score1}
Nota 2: ${score2}
Média: ${media}
Conceito: ${conceito}
Resultado: ${resultado}
`)