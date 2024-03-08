// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

const userName = prompt("Digite seu nome:")
let city = ""
let numberOfCities = 0

while (true) {
    let question = prompt("Você já visitou alguma cidade? (sim) ou (não)").toLowerCase()

    if (question === 'sim') {
        let response = prompt("Digte a cidade que visitou:")
        if (city !== "") {
            city += ", "
        }
        city += response
        numberOfCities++
    } else if (question === 'não') {
        break;
    } else {
        alert("Digite um valor válido")
    }
}

if (numberOfCities === 0) {
    city = "Nenhuma cidade visitada"
}

alert(`${userName} 
Número de cidades visitadas: ${numberOfCities}
Quais cidades foram visitadas: ${city}
`)