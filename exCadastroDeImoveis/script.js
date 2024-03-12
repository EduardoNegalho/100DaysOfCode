// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

let menu = ""
const properties = []

do {
    menu = prompt(`Quantidade de imóveis cadastrados: ${properties.length}
    (1) - Salvar novo imóvel
    (2) - Mostrar imóveis cadastrados
    (3) - Sair`)
    
    switch (menu) {
        case '1':
            const ownerName = prompt("Informe o nome do proprietário:")
            const numberOfRooms = prompt("Informe o número de quartos que á no imóvel:")
            const numberOfBathrooms = parseInt(prompt("Informe o número de banheiros que á no imóvel:"))
            const hasAGarage = prompt("O imóvel possui garagem? Sim / Não")

            properties.push({ownerName, numberOfRooms, numberOfBathrooms, hasAGarage})
            break;
        
        case '2':
            if (properties.length === 0 ) {
                alert("Não existe imóveis cadastrados!")
            } else {
                let propertyList = "Imóveis cadastrados:\n"
                for (let i = 0; i < properties.length; i++) {
                    let propertie = properties[i]
                    propertyList += `
                    Nome do proprietário: ${propertie.ownerName}
                    Quantidade de quartos: ${propertie.numberOfRooms}
                    Quantidade de banheiros: ${propertie.numberOfBathrooms}
                    Tem garagem: ${propertie.hasAGarage}
                    `
                }
                alert(propertyList)
            }
            break;

        case '3':
            alert("Saindo do programa...")
            break;

        default:
            alert("Digite uma opção válida!")
            break;
    }
} while (menu !== '3');