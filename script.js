'use strict';

const typingArea = document.querySelector('.typing-area');
const keys = document.querySelectorAll('.key');
const symbolMains = document.querySelectorAll('.symbol-main');
const symbolSecondarys = document.querySelectorAll('.symbol-secondary');
let text = '';
let input = '';

function shiftFunc() {
    keys.forEach(key => {
        if (key.innerHTML.length < 3) key.classList.toggle('shift-on');
    });
    symbolMains.forEach(key => key.classList.toggle('shift-symbol-main'));
    symbolSecondarys.forEach(key =>
        key.classList.toggle('shift-symbol-secondary')
    );
}

function capsLock() {
    keys.forEach(key => {
        if (key.innerHTML.length < 3) key.classList.toggle('shift-on');
    });
}

function typingFunc(keyCode, key) {
    // do nothing if shift or caps
    if (keyCode === 16 || keyCode === 20) return;

    // do what the keys are supposed to do
    if (keyCode === 8) {
        text = text.slice(0, -1);
    } else {
        if (keyCode === 13) {
            input = '\n';
        } else if (keyCode === 32) {
            input = ' ';
        } else {
            input = key;
        }
        text += input;
    }
}

function keyAction(e, pressedStatus) {
    const currKey = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if (!currKey) return;

    pressedStatus
        ? currKey.classList.add('pressed')
        : currKey.classList.remove('pressed');
    if (e.keyCode === 16) shiftFunc();
}

function keyPress(e) {
    keyAction(e, true);
    typingFunc(e.keyCode, e.key);
    if (e.keyCode === 20) capsLock();
    typingArea.textContent = text;
}

function keyRelease(e) {
    keyAction(e, false);
}

window.addEventListener('keydown', keyPress);
window.addEventListener('keyup', keyRelease);
// window.addEventListener('keydown', keyAction);
// window.addEventListener('keyup', keyAction);

// key styling with JS because I could not figure it out with just CSS
document.querySelectorAll('.key').forEach(key => {
    key.style.minWidth = getComputedStyle(key).height;
});
