let student1 = prompt("Qual o nome do primeiro aluno? ")
let primeiraNotaS1 = prompt("Qual a primeira nota do "+ student1 +" ?")
let segundaNotaS1 = prompt("Qual a segunda nota do" + student1 +" ?")

mediaStudent1 = (Number(primeiraNotaS1) + Number(segundaNotaS1)) / 2 

resultS1 = mediaStudent1 >= 7 

let student2 = prompt("Qual o nome do segundo aluno? ")
let primeiraNotaS2 = prompt("Qual a primeira nota do "+ student2 +" ?")
let segundaNotaS2 = prompt("Qual a segunda nota do" + student2 +" ?")

mediaStudent2 = (Number(primeiraNotaS2) + Number(segundaNotaS2)) / 2 

resultS2 = mediaStudent2 >= 7 

let student3 = prompt("Qual o nome do terceiro aluno? ")
let primeiraNotaS3 = prompt("Qual a primeira nota do "+ student3 +" ?")
let segundaNotaS3 = prompt("Qual a segunda nota do" + student3 +" ?")

mediaStudent3 = (Number(primeiraNotaS3) + Number(segundaNotaS3)) / 2 

resultS3 = mediaStudent3 >= 7

let student4 = prompt("Qual o nome do quarto aluno? ")
let primeiraNotaS4 = prompt("Qual a primeira nota do "+ student4 +" ?")
let segundaNotaS4 = prompt("Qual a segunda nota do" + student4 +" ?")

mediaStudent4 = (Number(primeiraNotaS4) + Number(segundaNotaS4)) / 2 

resultS4 = mediaStudent4 >= 7 


if (resultS1){
    alert("A média do(a) aluno(a) "+ student1 +" é: "+ mediaStudent1 + "\nParabéns "+ student1 +", você foi aprovado(a) no concurso!")
}else{
    alert("A média do(a) aluno(a) "+ student1 +" é: "+ mediaStudent1 + "\nNão foi dessa vez, "+ student1 +" tente novamente!")
}

if (resultS2){
    alert("A média do(a) aluno(a) "+ student2 +" é: "+ mediaStudent2 + "\nParabéns "+ student2 +", você foi aprovado(a) no concurso!")
}else{
    alert("A média do(a) aluno(a) "+ student2 +" é: "+ mediaStudent2 + "\nNão foi dessa vez, "+ student2 +" tente novamente!")
}

if (resultS3){
    alert("A média do(a) aluno(a) "+ student3 +" é: "+ mediaStudent3 + "\nParabéns "+ student3 +", você foi aprovado(a) no concurso!")
}else{
    alert("A média do(a) aluno(a) "+ student3 +" é: "+ mediaStudent3 + "\nNão foi dessa vez, "+ student3 +" tente novamente!")
}

if (resultS4){
    alert("A média do(a) aluno(a) "+ student4 +" é: "+ mediaStudent4 + "\nParabéns "+ student4 +", você foi aprovado(a) no concurso!")
}else{
    alert("A média do(a) aluno(a) "+ student4 +" é: "+ mediaStudent4 + "\nNão foi dessa vez, "+ student4 +" tente novamente!")
}
