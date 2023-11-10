//Declaração/criação da função TocaSom
function TocaSom(idElementoAudio){
    document.querySelector(idElementoAudio). play();
}
//criando a referências constantes listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll(`.tecla`);

for(let contador = 0; contador < istaDeTeclas.length; contador++){
    const teclas = listaDeTeclas[contador]
    const efeito = teclas.classlist[1];
    const idAudio = `"#som_" ${efeito}`;
    teclas.onclick = function(){
        tocaSomPom(idAudio);
    }
}