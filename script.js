const typingArea = document.querySelector('.typing-area');
const letters = Array.from(document.querySelectorAll('.letter'));
const symbols = Array.from(document.querySelectorAll('.symbol'));
const shiftkeys = Array.from(document.querySelectorAll('.shiftkey'));
const upper = document.querySelector('.upper');
let input = '';
let text = '';

function pressKey(e) { // add 'pressed' class to element that's being pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add('pressed');
    if (e.keyCode === 16) shiftPressed();
    typing(e);
}

function releaseKey(e) { // remove 'pressed' class from element that stops being pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove('pressed');
    if (e.keyCode === 16) {
        upper.classList.remove('shifted');
        shiftReleased();
    }
}

function shiftPressed() {
    upper.classList.add('shifted');
    letters.forEach(letter => letter.classList.add('shift-letter'));
    symbols.forEach(symbol => symbol.classList.add('shift-symbol'));
    shiftkeys.forEach(shiftkey => shiftkey.classList.add('shift-shiftkey'));
}

function shiftReleased() {
    if (!(upper.classList.contains('shifted'))) {
        letters.forEach(letter => letter.classList.remove('shift-letter'));
        symbols.forEach(symbol => symbol.classList.remove('shift-symbol'));
        shiftkeys.forEach(shiftkey => shiftkey.classList.remove('shift-shiftkey'));
    }
}

function typing(e) {
    let kc = e.keyCode;
    if (kc === 8) { // backspace
        text = text.slice(0, -1)
    } else {
        if (kc === 13) { // enter
            input = '\n';
        } else if (kc === 16) { // shift
            input = '';
        } else if (kc === 32) { // space
            input = ' ';
        } else { // letters, numbers, symbols
            input = e.key;
        }
        text += input;
    }
    typingArea.textContent = text;    
}

window.addEventListener('keydown', pressKey);
window.addEventListener('keyup', releaseKey);

/*
backspace 8
enter 13
shift 16
space 32
*/