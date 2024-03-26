// alistamento militar

const anoNascimento = 2008
const anoAtual = 2024

const idade = anoAtual - anoNascimento

if(idade < 18){
    console.log(`Não pode se alistar! Em ${18 - idade} anos poderá se alistar.`)
} else if(idade === 18){
    console.log(`Você deve se alistar esse ano!`)
} else {
    console.log(`Já se passaram ${idade - 18} anos desde que você devia se alistar.`)
}