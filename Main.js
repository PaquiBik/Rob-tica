//uma função
function tocamSomClap(idElementoDoAudioNaoFuncional) {
    // som que toca isolado
    document.querySelector(idElementoDoAudioNaoFuncional).play(IdSom);
}

//contante de uma lista
const ListaDeTeclas = document.querySelectorAll('.tecla');
let Contador = 0;
//variavel "enquanto"


while (Contador < ListaDeTeclas.length) {

    const jacareVermelho = ListaDeTeclas[Contador].classList[1];
    console.log(jacareVermelho);
    const IdSom = `#som-${jacareVermelho}`;
    console.log(IdSom);


    //contador mudando de variavel (ele + 1)
    //ListaDeTeclas[Contador].onclick = tocar('#som-tecla-clap');
    ListaDeTeclas[Contador].onclick = function () {
        tocamSomClap(IdSom);
    }
    
  
    Contador = Contador + 1;
    
    //console fala com nos
    console.log(Contador);
}