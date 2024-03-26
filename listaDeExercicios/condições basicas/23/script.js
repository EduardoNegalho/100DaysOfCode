// promoção dia das mulheres

const percentualHomens = 5 / 100
const percentualMulheres = 13 / 100

const nome = "Eduardo"
const genero = "Homem"
const valorCompras = 50

if(genero.toLowerCase() === "mulher") {
    const desconto = valorCompras * percentualMulheres

    const valorTotal = valorCompras - desconto

    console.log("Total: R$ " + valorTotal)
} else if(genero.toLowerCase() === "homem") {
    const desconto = valorCompras * percentualHomens

    const valorTotal = valorCompras - desconto

    console.log("Total: R$ " + valorTotal) 
} else {
    console.log("Especifique o gênero corretamente!")
}