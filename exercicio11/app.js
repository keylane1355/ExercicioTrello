let listaDeNumeros = []

function fnLimpar(){
    document.getElementById("formulario").requestFullscreen()
}

function fnSalvarNumero(){
    let numero = parseFloat(document.getElementById("numero").value)
    listaDeNumeros.push(numero) 
    console.log("funcionou?", listaDeNumeros)
}

function fnCalcularMedia(){
    let media = 0, qtdNumeros = 0, somaDosNumeros = 0, i = 0
    qtdNumeros = listaDeNumeros.length
    console.log("QtdNumeros: ", qtdNumeros)
    while(i<qtdNumeros){
        somaDosNumeros += listaDeNumeros[i]
        i++
    }
    
    media = somaDosNumeros / qtdNumeros 
    document.getElementById("media").innerHTML = media
    listaDeNumeros = []
}