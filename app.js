import {
    onEvent,
    showElement,
    setScreen
} from './code.org.js';
import {
    escolherMassa,
    escolherMolho,
    escolherTipo
} from './escolhas.js';


//Quando 1 das 3 opções estiver marcada o botão create irá aparecer
onEvent("radioBase1", "click", function () {
    showElement("buttonCreate");
});
onEvent("radioBase2", "click", function () {
    showElement("buttonCreate");
});
onEvent("radioBase3", "click", function () {
    showElement("buttonCreate");
});
//Quando o botão create for clicado vai para prox tela 
//mostrando o resultado da pizza baseado nas opções escolhidas
onEvent("buttonCreate", "click", function () {
    setScreen("screenPizza");
    escolherMassa();
    escolherMolho();
    escolherTipo();
    document.querySelector(".facaSua").style.display = "none";
    document.querySelector("#screenPizza").style.display = "flex";
    document.querySelector("#pedido").style.display = "flex";
    document.querySelector("#loadingScreen").style.display = "flex";
    setTimeout(function () {
        document.getElementById("loadingScreen").style.display = "none";
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});
