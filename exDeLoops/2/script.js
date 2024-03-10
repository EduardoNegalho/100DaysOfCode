// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

while (true) {
    const name = prompt("Digite seu nome de usuário:")
    const password= prompt("Digite sua senha:")

    if (name !== password) {
        alert("Entrando...")
        break
    } else {
        alert("O seu usuário e senha não podem ser iguais!")
    }
}