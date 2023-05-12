/*
let nome = prompt("Qual o seu nome?")
alert("Olá: " + nome)
*/

/*
alert("Iremos somar 2 números")
let numberOne = prompt("Qual o primeiro número?: ")
let numberTwo = prompt("Digite o segundo número: ")
alert("Resultado final é: " + (Number(numberOne) + Number(numberTwo)))
*/

let numberOne = prompt("Qual o primeiro número? ")
let numberTwo = prompt("Qual o segundo número? ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const times = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + times)
alert('Divisão: ' + div)
alert('Resto: ' + restDiv)

if (sum % 2 === 0) {  
    alert("A soma "+ sum +" é par")
}else{
    alert("A soma "+ sum +" é ímpar")
}

if(numberOne === numberTwo){
    alert("Os números são iguais")
}else{
    alert("Os números são diferentes")
}
