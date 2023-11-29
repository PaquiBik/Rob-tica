//uma função
function tocamSomClap(idElementoDoAudioNaoFuncional) {
    // som que toca isolado
    document.querySelector(idElementoDoAudioNaoFuncional).play();
}

//contante de uma lista
const ListaDeTeclas = document.querySelectorAll('.tecla');
//variavel "enquanto"


for ( let Contador = 0; Contador < ListaDeTeclas.length; Contador++) {
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




//////

const calculadora = document.querySelector('.calculadora')
const chaves = calculadora.querySelector('.calculadora_chave')

chaves.addEventListener('click', e => {
 if (e.target.matches('button')) {
   // Fazer algo
 }
})
const chave = e.target
const acao = key.dataset.action

if (!acao) {
    console.log('number key!')
  }




////




  function texto(){
  //elemento pego do id//
  var num = document.getElementById("num");
  var num2 = document.getElementById("num2");
  //convertendo para " int "//
  var conversao = num.value;
  var conv2 = num2.value
  //onde é feito a conta//
  var juncao = parseFloat(conversao * conv2 );
  var juncao2=parseFloat(conv2 * conversao);
  //mostrar na pagina//
  var body = document.getElementById("show");
  var mostrar = " o resultado da multiplicação é " + juncao2;body.innerHTML = mostrar  

}

function numero(){
  var number = document.getElementById("div");
  var num2 = document.getElementById("div2");
  var conv = number.value;
  var conv2 = num2.value;
  var resultado = parseFloat(conv / conv2);
  var resul2 = parseFloat(conv2 / conv);
  var mostrar = document.getElementById("show2");
  var ver = "o resultado da divisao é " + resultado;mostrar.innerHTML = ver

}

function number(){
  var num = document.getElementById("num2");
  var num2 = document.getElementById("num3");
  var rev1 = num.value;
  var rev2 = num2.value;
  var float1 = parseFloat (rev1);
  console.log(float1)
  var mostrar = document.getElementById("show3");
  var show = "o resultado da subtração é " + float1;mostrar.innerHTML = show
  
}

function nome(){
 var nome = document.getElementById("name").value;
  var h2 = document.getElementById("show4");
 var mostr = "não sabo matemática newba?" + nome;h2.innerHTML = mostr
  
}

function result(){
  var numero = document.getElementById("pote");
  var conversao = numero.value;
  var resultado = parseFloat(conversao);
  var final = resultado * resultado;
  var log = document.getElementById("show5");
  var end = "o resultado da potência é " + final;log.innerHTML = end

}