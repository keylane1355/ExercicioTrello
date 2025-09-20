 function fnVerificarPeriodo(){
let periodoSelecionado = document.getElementById
("periodo").value 

// document.getElementById("resposta").innerText = 
// periodoSelecionado

if(periodoSelecionado == "m"){
    document.getElementById("resposta").innerText =
     "Manhã 🌞" 
    document.body.style.backgroundColor = "#a6bcf8"
    document.body.style.color = "#df7b08ff "
    document.getElementById("foto").src="imagens/bom-dia-15435lW3pkjhD1Q.jpg"
} else if(periodoSelecionado == "t"){
    document.getElementById("resposta").innerText = 
    "Tarde 🌄"
    document.body.style.backgroundColor ="#df702f"
    document.body.style.color = "#1408c0"
    document.getElementById("foto").src="imagens/Boa tarde.jpg"
} else if (periodoSelecionado == "n"){
    document.getElementById("resposta").innerText = 
    "Noite 🌃"
    document.body.style.backgroundColor = "#bebec5"
    document.body.style.color = "#04012e "
    document.getElementById("foto").src="imagens/Boa-Noite"
}else{
    document.getElementById("resposta").innerText = ""
    document.body.style.backgroundColor = "#746cbe"
    document.body.style.color = " #000000"
}

}