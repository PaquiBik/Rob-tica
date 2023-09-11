function tocamSomClap () {
document.querySelector('#som-tecla-clap').play();
}


const ListaDeTeclas = document.querySelectorAll('.tecla');
let Contador = 0;
while (Contador < 9) {
    Contador = Contador + 1
ListaDeTeclas[Contador].onclick = ListaDeTeclas;

console.log(Contador);
}
