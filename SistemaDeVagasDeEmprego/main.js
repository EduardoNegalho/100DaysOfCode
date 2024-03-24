const vacancies = []

function menu() {
    return prompt(`
    1 - Listar vagas disponíveis
    2 - Criar uma nova vaga
    3 - Visualizar uma vaga
    4 - Inscrever um candidato em uma vaga
    5 - Excluir uma vaga
    6 - Sair
    `)
}

function execute() {
    let option = ""

    do {
        option = menu()

        switch (option) {
            case '1':
                listVacancies()
                break;
            case '2':
                createAVacancy()
                break;
            case '3':
                viewVacancy()
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                alert("Encerrando o programa...")
                break;
            default:
                alert("Digite uma opção válida!")
                break;
        }
    } while (option !== '6');
}

function listVacancies() {
    let mensage = `-----Vagas Disponíveis-----\n`

    if (vacancies.length > 0) {
        vacancies.forEach(function (vacancy, index) {
            mensage += `
            Índice: ${index + 1}
            Nome: ${vacancy.name}
            Candidatos: 0
            ---------------------`
        })
        return alert(mensage)
    } else {
        alert("Ainda não tem nenhuma vaga cadastrada!")
    }
}

function createAVacancy() {
    let confirmation = false
    do {
        const vacancy = {}

        vacancy.name = prompt("Informe o nome da vaga")
        vacancy.descript = prompt("Digite a descrição da vaga")
        vacancy.deadline = prompt("Informe a data limite da vaga")

        if (!vacancy.name || !vacancy.descript || !vacancy.deadline) {
            alert("Preencha todos os campos!")
            continue;
        }

        confirmation = confirm(`
        <--Dados da vaga-->
        Nome: ${vacancy.name}
        Descrição: ${vacancy.descript}
        Data limite: ${vacancy.deadline}

        Você confirma esses dados?
        `)

        if (confirmation) {
            vacancies.push(vacancy)
            alert("Vaga cadastrada com sucesso!")
        } else {
            const retry = confirm("Deseja fornecer as informações novamente?")
            if (!retry) {
                break;
            }
        }
    } while (!confirmation);
}

function viewVacancy() {
    const index = parseInt(prompt("Informe o índice da vaga"))

    if (index - 1 >= 0 && index - 1 < vacancies.length) {
        const vacancy = vacancies[index - 1]
        let mensage = `
        Ìndice: ${index}
        Nome: ${vacancy.name}
        Descrição: ${vacancy.descript}
        Data Limite: ${vacancy.deadline}
        `
    } else {
        alert("Vaga não encontrada!")
    }
}

execute()