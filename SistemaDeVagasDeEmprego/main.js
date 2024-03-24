const vacancies = []
execute()

function menu() {
    return prompt(`
    1 - Lista vagas disponíveis
    2 - Criar uma nova vaga
    3 - Visualizar uma vaga
    4 - Inscrever um candidato em uma vaga
    5 - Excluir uma vaga
    7 - Sair
    `)
}

function execute() {
    let option = ""

    do {
        option = menu()

        switch (option) {
            case '1':
                listAvailableVacancies()
                break;
            case '2':
                createANewVacancy()
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                break;
            case '7':
                alert("Encerrando programa...")
                break;
            default:
                alert("Digite uma opção válida!")
                break;
        }
    } while (option !== '7');
}

function listAvailableVacancies() {
    let mensage = "Lista de Vagas:\n"

    vacancies.forEach(function(vacancy, index){
        mensage += (`
        -----------
        Índice: ${index + 1}
        Nome: ${vacancy.name}
        Candidatos = 0
        `)
    })

    alert(mensage)
}

function createANewVacancy() {
    let confirmation = ""
    
    do {
        const vacancy = {}
        vacancy.name = prompt("Informe o nome da vaga:")
        vacancy.descript = prompt("Insira uma descrição da vaga:")
        vacancy.deadline = prompt("Informe a data limite da data:")

        confirmation = prompt(`
        <--Dados da Vaga-->
        Nome: ${vacancy.name};
        Descrição: ${vacancy.descript};
        Data Limite: ${vacancy.deadline};

        Você confirma esses dados? Sim / Não
        `).toLowerCase()

        if (confirmation === "sim") {
            alert("Vaga cadastrada com sucesso!")
            vacancies.push(vacancy)
            console.log(vacancies)
        } else if (confirmation === "não") {
            alert("Dados não cadastrados")
        } else {
            alert("Informe uma opção válida")
            confirmation = prompt(`
            <--Dados da Vaga-->
            Nome: ${vacancy.name};
            Descrição: ${vacancy.descript};
            Data Limite: ${vacancy.deadline};
    
            Você confirma esses dados? Sim / Não
            `).toLowerCase()
        }
    } while (confirmation !== "sim");
}

function viewAVacancy() {
    const index = parent(prompt("indorme o índice da vaga:"))
}

function registerACandidate() {

}

function deleteAVacancy() {

}