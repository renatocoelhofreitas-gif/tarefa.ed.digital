const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir) {
let curtiu = false;
botaoCurtir.addEventListener("click", curtir);
function curtir(){ 
const contador = botaoCurtir.querySelector("span");
if(curtiu === false){
    contador.texContent++;
    curtiu= true;
}
    else{
        contador.texContent--;
        curtiu= false;
    }
}
});
