const distanciaKm = 201

if (distanciaKm <= 200) {
    const valorPorKm = 0.5
    const precoPassagem = distanciaKm * valorPorKm
    
    console.log(`Valor da passagem: R$ ${precoPassagem.toFixed(2)}`)
} else {
    const valorPorKm = 0.45
    const precoPassagem = distanciaKm * valorPorKm

    console.log(`Valor da passagem: R$ ${precoPassagem.toFixed(2)}`)
}