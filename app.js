
function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    //fazer uma critica com um IF para verificar se o ("ate" - "de")+1 < "quantidade" então gerar novo "de" e "ate"
    if (Math.abs((ate - de) + 1) < quantidade) {     
        tentarNovamente();
    } else {

        let listaNumeros = [];
        let num;

        for (var i = 0; i < quantidade; i++) {
            num = numerosSorteados(de, ate);

            while (listaNumeros.includes(num)) {
                num = numerosSorteados(de, ate);
            }
            listaNumeros.push(num);
        }

        // console.log(`Quantidade : ${quantidade} \n Do número : ${de} \n Até o número : ${ate}`);
        // console.log(` numeros sorteados = ${listaNumeros}`);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaNumeros} </label>`; 
        alterarStatusBotao();
    }
}


function numerosSorteados(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min ;
}


function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


function reiniciar() {
    document.getElementById("quantidade").value ='';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function tentarNovamente() {
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Valores entre "Do número" --> "Até o número" não pode ser menor que a quantidade de números sorteados</label>';
}
