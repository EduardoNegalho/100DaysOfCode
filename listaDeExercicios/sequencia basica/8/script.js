// Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

const meters = parseFloat(prompt("Digite uma medida em metros"))

const km = meters / 1000
const hm = meters / 100
const dam = meters / 10
const dm = meters * 10
const cm = meters * 100
const mm = meters * 1000

alert(`
A distância de ${meters}m corresponde a:
${km}km
${hm}hm
${dam}dam
${dm.toFixed(1)}dm
${cm.toFixed(1)}cm
${mm.toFixed(1)}mm
`)