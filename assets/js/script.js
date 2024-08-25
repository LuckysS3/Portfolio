document.getElementById("scrollButton1").addEventListener("click", function() {
    // Obter a posição do elemento de destino
    var elemento = document.getElementById("art-inicio");
    var posicaoElemento = elemento.getBoundingClientRect().top + window.pageYOffset;

    // Definir a posição de rolagem ajustada (50px acima do elemento)
    var posicaoAjustada = posicaoElemento - 150;

    // Rolar para a posição ajustada
    window.scrollTo({
        top: posicaoAjustada,
        behavior: "smooth" // Comportamento suave
    });
});

document.getElementById("scrollButton2").addEventListener("click", function() {
    // Obter a posição do elemento de destino
    var elemento = document.getElementById("art-sobre");
    var posicaoElemento = elemento.getBoundingClientRect().top + window.pageYOffset;

    // Definir a posição de rolagem ajustada (50px acima do elemento)
    var posicaoAjustada = posicaoElemento - 350;

    // Rolar para a posição ajustada
    window.scrollTo({
        top: posicaoAjustada,
        behavior: "smooth" // Comportamento suave
    });
});

document.getElementById("scrollButton3").addEventListener("click", function() {
    // Obter a posição do elemento de destino
    var elemento = document.getElementById("art-tec");
    var posicaoElemento = elemento.getBoundingClientRect().top + window.pageYOffset;

    // Definir a posição de rolagem ajustada (50px acima do elemento)
    var posicaoAjustada = posicaoElemento - 350;

    // Rolar para a posição ajustada
    window.scrollTo({
        top: posicaoAjustada,
        behavior: "smooth" // Comportamento suave
    });
});

document.getElementById("scrollButton4").addEventListener("click", function() {
    // Obter a posição do elemento de destino
    var elemento = document.getElementById("art-proj");
    var posicaoElemento = elemento.getBoundingClientRect().top + window.pageYOffset;

    // Definir a posição de rolagem ajustada (50px acima do elemento)
    var posicaoAjustada = posicaoElemento - 90;

    // Rolar para a posição ajustada
    window.scrollTo({
        top: posicaoAjustada,
        behavior: "smooth" // Comportamento suave
    });
});
