// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
// milímetro (mm)
// centímetro (cm)
// decímetro (dm)
// decâmetro (dam)
// hectômetro (hm)
// quilômetro (km)
// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

let meters = parseFloat(prompt("Digite um valor em metros:"))
let option = prompt(`Para qual medida quer converter:
milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)
`).toLowerCase()

switch (option) {
    case 'mm':
        let mm = meters * 1000
        alert(`${meters}m = ${mm}mm`)
        break;

    case 'cm':
        let cm = meters * 100
        alert(`${meters}m = ${cm}cm`)
        break;

    case 'dm':
        let dm = meters * 10
        alert(`${meters}m = ${dm}dm`)
        break

    case 'dam':
        let dam = meters / 10
        alert(`${meters}m = ${dam}dam`)
        break

    case 'hm':
        let hm = meters / 100
        alert(`${meters}m = ${hm}hm`)
        break

    case 'km':
        let km = meters / 1000
        alert(`${meters}m = ${km}km`)
        break

    default:
        alert("Opção Inválida")
        break;
}