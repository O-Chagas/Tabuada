const botaoDisparaTabuadaConsole = document.querySelector('.btn-console');

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