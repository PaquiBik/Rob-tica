    //uma função
function tocamSomClap (idElementoAudio) {
    // som que toca isolado
document.querySelector(idElementoAudio).tocar();
}

    //contante de uma lista
const ListaDeTeclas = document.querySelectorAll('.tecla');
let Contador = 0;
    //variavel "enquanto"
while (Contador < ListaDeTeclas.length) {
    //contador mudando de variavel (ele + 1)
    Contador = Contador + 1;
ListaDeTeclas[Contador].onclick = tocar('#som-tecla-clap');
    //console fala com nos
console.log(Contador);
}
