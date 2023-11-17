//Declaração/criação da função TocaSom
function TocaSom(idElementoAudio){
    document.querySelector(idElementoAudio). play();
}
//criando a referências constantes listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll(`.tecla`);
//criação da repetição "while" e trocando pelo "for" com variável, condição e incremento
for(let contador = 0; contador < istaDeTeclas.length; contador++){
    const teclas = listaDeTeclas[contador]; //guardar o contador da lista
    const efeito = teclas.classlist[1]; //chama o 2 item classe individual do som
    const idAudio = `"#som_" ${efeito}`; //utiliza a junção template string ${ }
    teclas.onclick = function(){       //função anônima auxiliar para chamar tocaSom
        tocaSom(idAudio);         //chamada da função tocaSom com parâmetro idAudio
    }
    teclas.onkeydown = function(){
        teclas.classList.add('ativa');
    }
}