    //uma função
function tocamSomClap (idElementoAudio) {
    // som que toca isolado
document.querySelector(idElementoAudio).play();
}

    //contante de uma lista
const ListaDeTeclas = document.querySelectorAll('.tecla');
let Contador = 0;
    //variavel "enquanto"
while (Contador < ListaDeTeclas.length) {
    ListaDeTeclas[Contador].onclick = tocar('#som-tecla-clap');
    //contador mudando de variavel (ele + 1)
    Contador = Contador + 1;
    //console fala com nos
console.log(Contador);
}
