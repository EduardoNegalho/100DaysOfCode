// Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

const height = parseFloat(prompt("Informe a altura"))
const width = parseFloat(prompt("Informe a largura"))

const area = width * height

const areaPerLiter = 2
const paintRequired = area / areaPerLiter

alert(`
Área a ser pintada: ${area} metros quadrados
Quantidade de tinta necessária: ${paintRequired} litros
`)