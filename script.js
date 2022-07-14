function pressKey(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add('pressed');
}

function releaseKey(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove('pressed');
}

window.addEventListener('keydown', pressKey);
window.addEventListener('keyup', releaseKey);