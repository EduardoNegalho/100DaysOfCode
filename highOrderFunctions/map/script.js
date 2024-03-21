// array de elementos
const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// utilizando método map para criar um novo array com os nomes
const nomesPersonagens = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nomesPersonagens)

const nomes = []
// forma de utilizar sem o map
for (let i = 0; i < personagens.length; i++) {
     nomes.push(personagens[i].nome)
}

console.log(nomes)