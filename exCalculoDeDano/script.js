// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

// - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

// Character's Name one
let characterName = prompt("Informe o nome do personagem:")
let attackPower = parseFloat(prompt("Informe o poder de ataque do personagem:"))

// Opponent Name
let opponentName = prompt("Informe o nome do oponente:")
let opponentLife = parseFloat(prompt("Informe a quantidade de vida do oponente:"))
let opponentDefensePower = parseFloat(prompt("Informe o poder de defesa do oponente"))
let shieldOpponent = prompt("O oponente tem escudo? (Sim ou Não)")

let damage = 0;

if (attackPower > opponentDefensePower && shieldOpponent.toLowerCase() === "não") {
    damage = attackPower - opponentDefensePower
} else if (attackPower > opponentDefensePower && shieldOpponent.toLowerCase() === 'sim') {
    damage = (attackPower - opponentDefensePower) / 2
}

opponentLife -= damage

alert(
    `
    Quantidade de dano: ${damage}
    ----------------------------
    Personagem ${characterName}: 
    Poder de ataque: ${attackPower}
    ----------------------------
    Oponente ${opponentName}:
    Vida: ${opponentLife}
    Poder de defesa: ${opponentDefensePower}
    Escudo: ${shieldOpponent}
    `
) 