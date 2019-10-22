const tamanho = 161

/**
 ** Método pra criar o tabuleiro e o robô na sua posição inicial: 
 */
function gerarPecas() {
    for (let i = 0; i < tamanho; i++) {
        let divNova = document.createElement("div");
        divNova.classList.add("celula");
        divNova.setAttribute("id", `celula-${i}`);

        //? adiciona o novo elemento criado e seu conteúdo ao DOM:
        let divAtual = document.getElementById("tabuleiro__table");
        divAtual.append(divNova);
    }

    //? Adicionando o robô para a primeira posição:
    let robo = document.createElement("div");
    robo.classList.add("robo");
    robo.setAttribute("id", "robo");
    document.getElementById("celula-0").append(robo)
}


/**
 ** Método para iniciar a corrida do robô:
 * @param {integer} velocity 
 */
function Iniciar(velocity) {
    for (let i = 0; i < tamanho; i++) {
        (function (i) {
            //? Criar uam diferença de tempo para que o robo não percorra tudo de uma vez:
            setTimeout(function () {
                document.getElementById("robo").remove();
                //? Adicionando o robô para a primeira posição:
                robo = document.createElement("div");
                robo.classList.add("robo");
                robo.setAttribute("id", "robo");
                //? Caso seja a última posição, termina o trajeto:
                if (i === tamanho - 1) {
                    document.getElementById(`celula-${i}`).append(robo)
                } else {
                    document.getElementById(`celula-${i + 1}`).append(robo)
                }
            }, velocity * i);
        })(i);
    }
}