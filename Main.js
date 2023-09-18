    //uma função
function tocamSomClap (idElementoDoAudioNaoFuncional) {
    // som que toca isolado
document.querySelector(idElementoDoAudioNaoFuncional).play();
}

    //contante de uma lista
const ListaDeTeclas = document.querySelectorAll('.tecla');
let Contador = 0;
    //variavel "enquanto"
while (Contador < ListaDeTeclas.length) {
    //contador mudando de variavel (ele + 1)
    Contador = Contador + 1;
//ListaDeTeclas[Contador].onclick = tocar('#som-tecla-clap');
ListaDeTeclas[Contador].onclick = function tocaraudio () {
    tocar('#som-tecla-clap')

}
    //console fala com nos
console.log(Contador);
}
