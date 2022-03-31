export function concatena(num) {
    const numDisplay = document.querySelector('[data-display]');

    if(numDisplay.textContent == '0'){
        numDisplay.textContent = '';
    }

    if (num == 0) {
        numDisplay.textContent = numDisplay.textContent + '0';
    }
    if(num == 1){
        numDisplay.textContent = numDisplay.textContent + '1';
    }
    if(num == 2){
        numDisplay.textContent = numDisplay.textContent + '2';
    }
    if(num == 3){
        numDisplay.textContent = numDisplay.textContent + '3';
    }
    if(num == 4){
        numDisplay.textContent = numDisplay.textContent + '4';
    }
    if(num == 5){
        numDisplay.textContent = numDisplay.textContent + '5';
    }
    if(num == 6){
        numDisplay.textContent = numDisplay.textContent + '6';
    }
    if(num == 7){
        numDisplay.textContent = numDisplay.textContent + '7';
    }
    if(num == 8){
        numDisplay.textContent = numDisplay.textContent + '8';
    }
    if(num == 9){
        numDisplay.textContent = numDisplay.textContent + '9';
    }
}