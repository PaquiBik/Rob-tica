
const ListaDeTeclas = document.querySelectorAll('.tecla');
let Contador = 0;
while (Contador < 9) {
    Contador = Contador + 1
ListaDeTeclas[Contador].onclick = tocamSomClap;

console.log(Contador);
}
