import { concatena } from "./concatena.js";

export var operacao = '';
var num = 0;
var display = 0;
export var valor1 = 0;


const number0 = (evento) =>{
    evento.preventDefault();

    num = 0;
    concatena(num);
}
const number1 = (evento) =>{
    evento.preventDefault();

    num = 1;
    concatena(num);
}
const number2 = (evento) =>{
    evento.preventDefault();

    num = 2;
    concatena(num);
}
const number3 = (evento) =>{
    evento.preventDefault();

    num = 3;
    concatena(num);
}
const number4 = (evento) =>{
    evento.preventDefault();

    num = 4;
    concatena(num);
}
const number5 = (evento) =>{
    evento.preventDefault();

    num = 5;
    concatena(num);
}
const number6 = (evento) =>{
    evento.preventDefault();

    num = 6;
    concatena(num);
}
const number7 = (evento) =>{
    evento.preventDefault();

    num = 7;
    concatena(num);
}
const number8 = (evento) =>{
    evento.preventDefault();

    num = 8;
    concatena(num);
}
const number9 = (evento) =>{
    evento.preventDefault();

    num = 9;
    concatena(num);
}

const num0 = document.querySelector('[data-num0]');
num0.addEventListener('click', number0);
const num1 = document.querySelector('[data-num1]');
num1.addEventListener('click', number1);
const num2 = document.querySelector('[data-num2]');
num2.addEventListener('click', number2);
const num3 = document.querySelector('[data-num3]');
num3.addEventListener('click', number3);
const num4 = document.querySelector('[data-num4]');
num4.addEventListener('click', number4);
const num5 = document.querySelector('[data-num5]');
num5.addEventListener('click', number5);
const num6 = document.querySelector('[data-num6]');
num6.addEventListener('click', number6);
const num7 = document.querySelector('[data-num7]');
num7.addEventListener('click', number7);
const num8 = document.querySelector('[data-num8]');
num8.addEventListener('click', number8);
const num9 = document.querySelector('[data-num9]');
num9.addEventListener('click', number9);


const operacaoSoma = (evento) =>{
    evento.preventDefault();

    display = document.querySelector('[data-display]').textContent;
    valor1 = parseInt(display);
    console.log(valor1);
    operacao = '+';
    
    document.querySelector('[data-display]').textContent = '0'
}
const operacaoSub = (evento) =>{
    evento.preventDefault();

    display = document.querySelector('[data-display]').textContent;
    valor1 = parseInt(display);
    operacao = '-';
    
    document.querySelector('[data-display]').textContent = '0'
}
const operacaoDiv = (evento) =>{
    evento.preventDefault();

    display = document.querySelector('[data-display]').textContent;
    valor1 = parseInt(display);
    operacao = '/';
    
    document.querySelector('[data-display]').textContent = '0'
}
const operacaoMult = (evento) =>{
    evento.preventDefault();

    display = document.querySelector('[data-display]').textContent;
    valor1 = parseInt(display);
    operacao = 'x';
    
    document.querySelector('[data-display]').textContent = '0'
}

const soma = document.querySelector('[data-soma]');
soma.addEventListener('click', operacaoSoma);
const sub = document.querySelector('[data-sub]');
sub.addEventListener('click', operacaoSub);
const mult = document.querySelector('[data-mult]');
mult.addEventListener('click', operacaoMult);
const div = document.querySelector('[data-div]');
div.addEventListener('click', operacaoDiv);

const clearDisplay = (evento) =>{
    evento.preventDefault();

    valor1 = 0;
    document.querySelector('[data-display]').textContent = '0';
}

const clear = document.querySelector('[data-clear]');
clear.addEventListener('click', clearDisplay);