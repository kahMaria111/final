const ano_atual=2023

const nome = prompt("escreva seu nome")
const ano_nascimento =parseInt(prompt ("escreva seu ano de nascimento"))

alert(nome)
alert(ano_nascimento)

let idade = ano_atual - ano_nascimento

alert ("Olá" +nome+", você tem"+idade+"anos.")