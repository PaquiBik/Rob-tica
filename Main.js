    //uma função
function tocamSomClap () {
    // som que toca isolado
document.querySelector('#som-tecla-toin').play();
}

    //contante de uma lista
const ListaDeTeclas = document.querySelectorAll('.tecla');
let Contador = 0;
    //variavel "enquanto"
while (Contador < 9) {
    //contador mudando de variavel (ele + 1)
    Contador = Contador + 1
ListaDeTeclas[Contador].onclick = tocamSomClap;
    //console fala com nos
console.log(Contador);
}
