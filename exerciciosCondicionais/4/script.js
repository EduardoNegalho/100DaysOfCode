// Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.

let numberOne = parseInt(prompt("Digite um número inteiro:"))
let numberTwo = parseInt(prompt("Digite outro número inteiro:"))

let x = numberOne

numberOne = numberTwo
numberTwo = x

alert(`Antes:
1º = ${numberTwo}
2º = ${numberOne}
-----------
Depos:
1º = ${numberOne}
2º= ${numberTwo}
`)