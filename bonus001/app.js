function fnTocarSom(tecla){
    if(tecla == 65){
        document.getElementById("som-65").currentTime = 0 
        document.getElementById("som-65").play()
    }else if(tecla == 66){
        document.getElementById("som-66").currentTime = 0 
        document.getElementById("som-66").play()
    }
}