// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.

const yearOfBirth = parseInt(prompt("Informe o seu ano de nascimento"))

const currentYear = 2024

const age = currentYear - yearOfBirth

if (age >= 16) {
    alert("Você pode votar")
} else {
    alert("Você não pode votar")
}