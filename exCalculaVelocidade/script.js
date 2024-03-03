// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

let car1Name = prompt("Informe o nome do 1º veiculo:")
let car1Speed = parseFloat(prompt("Informe a velocidade do 1º veiculo:"))

let car2Name = prompt("Informe o nome do 2º veiculo:")
let car2Speed = parseFloat(prompt("Informe a velocidade do 2º veiculo:"))

if (car1Speed > car2Speed) {
    alert(`${car1Name} está mais rápido do que o ${car2Name}`)
} else if (car2Speed > car1Speed) {
    alert(`${car2Name} está mais rápido do que o ${car1Name}`)
} else {
    alert("Ambos estão na mesma velocidade")
}