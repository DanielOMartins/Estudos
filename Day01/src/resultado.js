import { operacao, valor1 } from "./index.js";

var fim = 0;

const resultadoOperacao = (evento) =>{
    evento.preventDefault();

    var display = document.querySelector('[data-display]').textContent;
    var valor2 = parseInt(display);

    if(operacao == '+'){
        valor2 = valor2 + valor1;
        document.querySelector('[data-display]').textContent = valor2.toString();
        fim = 1;
    }
    if (operacao == '-') {
        valor2 = valor1 - valor2;
        document.querySelector('[data-display]').textContent = valor2.toString();
        fim = 1;
    }
    if (operacao == 'x') {
        valor2 = valor1 * valor2;
        document.querySelector('[data-display]').textContent = valor2.toString();
        fim = 1;
    }
    if (operacao == '/') {
        valor2 = valor1 / valor2;
        document.querySelector('[data-display]').textContent = valor2.toString();
        fim = 1;
    }

    
}

const resultado = document.querySelector('[data-resultado]');
resultado.addEventListener('click', resultadoOperacao);