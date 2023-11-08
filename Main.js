//uma função
function tocamSomClap(idElementoDoAudioNaoFuncional) {
    // som que toca isolado
    document.querySelector(idElementoDoAudioNaoFuncional).play();
}

//contante de uma lista
const ListaDeTeclas = document.querySelectorAll('.tecla');
//variavel "enquanto"


for ( let Contador = 0; Contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[Contador];
    const jacareVermelho = ListaDeTeclas[Contador].classList[1];
    console.log(jacareVermelho);
    const IdSom = `#som-${jacareVermelho}`;
    //a crase (´) serve para uma sequência(string) e o cifrão é para mudar a forma de busca ali ficou ( tecla-pom, tecla-clap ...).
    console.log(IdSom);


    //contador mudando de variavel (ele + 1)
    //ListaDeTeclas[Contador].onclick = tocar('#som-tecla-clap');
    ListaDeTeclas[Contador].onclick = function () {
        tocamSomClap(IdSom);
    }


    //console fala com nos
    console.log(Contador);

    tecla.onkeydown = function (lucky) {
        if (lucky.code === 'Space' || lucky.code === 'Enter') {
            tecla.classList.add('ativa');
            console.log(lucky)
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
