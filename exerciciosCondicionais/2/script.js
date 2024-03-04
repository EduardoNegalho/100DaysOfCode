// Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

const scoreOne = parseFloat(prompt("Informe a primeira nota do aluno:"))
const scoreTwo = parseFloat(prompt("Informe a segunda nota do aluno:"))

let avarege_grade = (scoreOne + scoreTwo) / 2 //média do aluno

if (avarege_grade === 10) {
    alert("Média: " + avarege_grade +  "\nAprovado com distinção")
} else if (avarege_grade >= 7) {
    alert("Média: " + avarege_grade + "\nAprovado")
} else {
    alert("Média: " + avarege_grade + "\nReprovado")
}