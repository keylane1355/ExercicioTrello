function fnValidarIdadeCNH(){

    event.preventDefault()
    let nomeUsuario = document.getElementById('txtNome').value 
    let idadeUsuario = document.getElementById('txtIdade').value 


        if(idadeUsuario >= 18){
            texto = "parabens" + nomeUsuario + ", você pode dirigir"
            document.getElementById('resultado').innerHTML = texto
        } else {

            texto = "Desculpe" + nomeUsuario + ",você NÃO pode dirigir"
            document.getElementById('resultado').innerHTML = texto
        }
}