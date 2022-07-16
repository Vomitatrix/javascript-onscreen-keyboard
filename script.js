const typingArea = document.querySelector('.typing-area');

function pressKey(e) { // add 'pressed' class to element that's being pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add('pressed');
}

function releaseKey(e) { // remove 'pressed' class from element that stops being pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove('pressed');
}

window.addEventListener('keydown', pressKey);
window.addEventListener('keyup', releaseKey);