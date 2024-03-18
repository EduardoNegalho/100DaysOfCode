// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta.
// Exemplo: ax² + bx + c = 0
const a = parseFloat(prompt("Digite o valor de A"))
const b = parseFloat(prompt("Digite o valor de B"))
const c = parseFloat(prompt("Digite o valor de C"))

const delta = (b ** 2) - 4 * a * (c)

if (delta > 0) {
    const x1 = (-(b) + Math.sqrt(delta)) / 2 * a
    const x2 = (-(b) - Math.sqrt(delta)) / 2 * a
    alert(`
    Δ = ${delta}
    x1 = ${x1}
    x2 = ${x2}
    `)
} else if (delta === 0) {
    const x = - (b) / 2 * a
    alert(`
    Δ = ${delta}
    x = ${x}
    `)
} else {
    alert(`
    Δ = ${delta}
    x = 0
    `)
}