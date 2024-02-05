const botaoDisparaTabuadaConsole = document.querySelector('.btn-console');

const caixaEntradaTabuada = document.querySelector('#tabuada-number');

botaoDisparaTabuadaConsole.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaNoConsole(entradaUsuario);
});

function mostrarTabuadaNoConsole(numero) {

    if (!isNaN(numero)) {
        console.log(`Mostrando a tabuada do ${numero}`);
        let contador = 0;
        while (contador <= 10) {
            console.log(`${numero} X ${contador} = ${numero * contador}`);
            contador++
        }
        return
    }
    console.log("Não é um número, por favor digitar novamente.");
}

const botaoDisparaTabuadaDOM = document.querySelector('.btn-dom');

botaoDisparaTabuadaDOM.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaNoDOM(entradaUsuario);
});

//mostrar a tabuada quando o evento clicar no Enter acontecer

// caixaEntradaTabuada.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         validarEntrada(caixaEntradaTabuada.value);
//         mostrarTabuadaNoConsole(caixaEntradaTabuada.value);
//         mostrarTabuadaNoDOM(caixaEntradaTabuada.value);      

//     }
// })

caixaEntradaTabuada.addEventListener('keyup', verificarTecla);
//associando uma variável a um evento, teremos disponíveis os dados do evento em si e os dados do elemento

//caixaEntradaTabuada.addEventListener('keyup', this, verificarTecla);

function verificarTecla(e){
    if (e.key === 'Enter'){
        validarEntrada(this.value);
        mostrarTabuadaNoConsole(this.value);
        mostrarTabuadaNoDOM(this.value);
    }
}

function validarEntrada(numero) {
    if (isNaN(numero)) {
        return "Número inválido! Digite um número válido";
    }
}

    function mostrarTabuadaNoDOM(numero) {
        const ulTabuada = document.querySelector('.tabuada');
        ulTabuada.innerHTML = "";
        if (!isNaN(numero)) {

            const tituloTabuada = document.createElement('h3');
            tituloTabuada.innerHTML = `Tabuada do ${numero}`;
            ulTabuada.appendChild(tituloTabuada);

            let contador = 0;
            while (contador <= 10) {

                const linhaTabuada = document.createElement('li');
                linhaTabuada.innerHTML = `${numero} X ${contador} = ${numero * contador}`;
                contador++
                ulTabuada.appendChild(linhaTabuada);
            }
            return
        }
        ulTabuada.innerHTML = "Não é um número, por favor digitar novamente!";
    }