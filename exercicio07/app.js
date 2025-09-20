let dataAtual = new Data ()
console.log(dataAtual.getDay())

let diaDaSemana = dataAtual.getDay()

if(diaDaSemana ==0){
    document.getElementById("resposta").innerText = "Domingo"
} else if (diaDasemana == 1){
    document.getElementById("resposta").innerText = "Segunda-feira"
} else if (diaDaSemana == 2){
    docuument.getElementById("respostas").innerText = "Terça-feira"
} else if (diaDaSemana == 3){
    docuument.getElementById("respostas").innerText = "Quarta-feira"
}else if (diaDaSemana == 4){
    docuument.getElementById("respostas").innerText = "Quinta-feira"
}else if (diaDaSemana == 5){
    docuument.getElementById("respostas").innerText = "Sexta-feira"
}else if (diaDaSemana == 6){
    docuument.getElementById("respostas").innerText = "Sabado-feira"
}