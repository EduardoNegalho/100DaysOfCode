// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

while (true) {
    const score = parseFloat(prompt("Digite uma nota de 0 a 10"))
    if (score < 0 || score > 10) {
        alert("Digite um valor válido")
    } else {
        break;
    }
}