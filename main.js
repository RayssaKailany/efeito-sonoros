alert('POM');

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    }
    document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
    }
    document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
    }
    document.querySelector('.tecla_tim').onclick = tocaSomClap;

function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
    }
    document.querySelector('.tecla_puff').onclick = tocaSomClap;

function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
    }
    document.querySelector('.tecla_splash').onclick = tocaSomClap;

function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
    }
    document.querySelector('.tecla_toim').onclick = tocaSomClap;

function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
    }
    document.querySelector('.tecla_psh').onclick = tocaSomClap;

function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
    }
    document.querySelector('.tecla_tic').onclick = tocaSomClap;

function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
    }
    document.querySelector('.tecla_tom').onclick = tocaSomClap;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
let contador = 0;
// Estrutura de repetição - Enquanto
while() {
}