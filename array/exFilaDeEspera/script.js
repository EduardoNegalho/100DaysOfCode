// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu

// array contendo nomes dos pacientes
// menu: lista de todos os pacientes esperando
// menu opções: novo paciente, consultar paciente, sair

const queue = []
let option = ""

do {
    let patients = ""
    if (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            patients += `${i + 1}º - ${queue[i]}; `;
        }
    } else {
        patients += `Lista vazia`
    }

    option = prompt(`
    Lista de pacientes: ${patients}
    (1) - Novo Paciente
    (2) - Consultar Paciente
    (3) - Sair
    `)

    switch (option) {
    case '1':
        const name = prompt("Digite o nome do paciente:")
        queue.push(name)
        break;

    case '2':
        if (queue.length > 0) {
            const consultPatient = queue.shift()
            alert(`Paciente Consultado: ${consultPatient}`)
        } else {
            alert("Lista vazia")
        }
        break;

    case '3':
        alert("Finalizando programa")
        break;
    default:
        alert("Digite uma opção válida")
        break;
}
} while (option !== '3')
