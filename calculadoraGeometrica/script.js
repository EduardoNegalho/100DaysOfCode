// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

execute()

function menu() {
    return prompt(`
    ---Calcular Área---
    
    1 - Calcula a área do triângulo
    2 - Calcula a área do retângulo
    3 - Calcula a área do quadrado
    4 - Calcula a área do trapézio
    5 - Calcula a área do circulo
    6 - Sair do programa!
    -------------------
    `)
}

function execute() {
    let option = ""

    do {
        option = menu()
        
        switch (option) {
            case '1':
                triangleArea()
                break;
            case '2':
                rectangleArea()
                break;
            case '3':
                squareArea()
                break;
            case '4':
                trapezeArea()
                break;
            case '5':
                circleArea()
                break;
            case '6':
                alert("Encerrando programa...")
                break;
            default:
                alert("Digite uma opção válida")
        }
    } while (option !== '6');
}

function triangleArea() {
    const base = parseFloat(prompt("Informe a base do triângulo"))
    const height = parseFloat(prompt("Informe a altura do triângulo"))

    if (base > 0 && height > 0) {
        let area = (base * height) / 2
        alert(`A área do triângulo é: ${area}`)
    } else {
        alert("Os valores devem ser positivos")
    }
}

function rectangleArea() {
    const base = parseFloat(prompt("Informe a base do retângulo"))
    const height = parseFloat(prompt("Informe a altura do retângulo"))

    if (base > 0 && height > 0) {
        let area = base * height
        alert(`A área do retângulo é: ${area}`)
    } else {
        alert("Os valores devem ser positivos")
    }
}

function squareArea() {
    const side = parseFloat(prompt("Informe o lado do quadrado"))

    if (side > 0) {
        let area = side * side
        alert(`A área do quadrado é: ${area}`)
    } else {
        alert("Os valores devem ser positivos")
    }
}

function trapezeArea() {
    const largerBase = parseFloat(prompt("Informe a base maior do trapézio"))
    const smallerBase = parseFloat(prompt("Informe a base menor do trapézio"))
    const height = parseFloat(prompt("Informe a altura do trapézio"))

    if (largerBase > 0 && smallerBase > 0 && height > 0) {
        let area = (largerBase + smallerBase) * height / 2
        alert(`A área do trapézio é: ${area}`)
    } else {
        alert("Os valores devem ser positivos")
    }
}

function circleArea() {
    const ray = parseFloat(prompt("Informe o raio do circulo"))

    if (ray > 0) {
        let area = Math.PI * (ray * ray)
        alert(`A área do circulo é: ${area.toFixed(2)}`)
    } else {
        alert("Os valores devem ser positivos")
    }
}