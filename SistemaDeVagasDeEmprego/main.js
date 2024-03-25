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
                registerCandidate()
                break;
            case '5':
                deleteAVacancy()
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
            Candidatos: ${vacancy.candidates.length}
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
        const vacancy = {
            name: undefined,
            descript: undefined,
            deadline: undefined,
            candidates: []
        }

        vacancy.name = prompt("Informe o nome da vaga")
        vacancy.descript = prompt("Digite a descrição da vaga")
        vacancy.deadline = prompt("Informe a data limite da vaga (dd/mm/aa)")

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
    let mensage = ""
    if (index - 1 >= 0 && index - 1 < vacancies.length) {
        const vacancy = vacancies[index - 1]
        mensage += `
        Ìndice: ${index}
        Nome: ${vacancy.name}
        Descrição: ${vacancy.descript}
        Data Limite: ${vacancy.deadline}
        Número de candidatos: ${vacancy.candidates.length}
        Candidatos: ${vacancy.candidates.join(", ")}
        `
        return alert(mensage)
    } else {
        alert("Vaga não encontrada!")
    }
}

function registerCandidate() {
    const candidateName = prompt("Informe o nome do candidato")
    const index = parseInt(prompt("Informe o índice da vaga"))

    if (index - 1 >= 0 && index - 1 < vacancies.length) {
        const vacancy = vacancies[index - 1]
        const confirmation = prompt(`
        Vaga: ${vacancy.name}
        Descrição: ${vacancy.descript}
        Data limite: ${vacancy.deadline}

        Nome do candidato: ${candidateName}

        Você confirma esses dados? Sim ou Não
        `).toLowerCase()

        if (confirmation === "sim") {
            vacancy.candidates.push(candidateName)
            alert("Candidato registrado com sucesso!")
        } else {
            alert("Candidato não registrado!")
        }
    } else {
        alert("Vaga não encontrada!")
    }
}

function deleteAVacancy() {
    const index = parseInt(prompt("Informe o índice da vaga"))
    const vacancy = vacancies[index - 1]

    const confirmation = prompt(`
    Índice: ${index}
    Nome: ${vacancy.name}
    Descrição: ${vacancy.descript}
    Data Limite: ${vacancy.deadline}
    Candidatos: ${vacancy.candidates.join(", ")}
    ------------------------------
    Deseja excluir está vaga? Sim ou Não
    `).toLowerCase()

    if (confirmation === 'sim') {
        vacancies.splice(index - 1, 1)
        alert("Vaga removida com sucesso!")
    } else {
        alert("Vaga não removida!")
    }
}

execute()