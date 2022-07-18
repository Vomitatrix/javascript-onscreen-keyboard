const typingArea = document.querySelector('.typing-area');
let input = '';
let text = '';

function pressKey(e) { // add 'pressed' class to element that's being pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add('pressed');
    typing(e);
}

function releaseKey(e) { // remove 'pressed' class from element that stops being pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove('pressed');
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

let asdf = 'asdf';
const INCH = 0.0254;