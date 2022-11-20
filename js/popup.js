chrome.runtime.sendMessage({popupOpen: true});

let hotkeys = [];
let holder = 8;

window.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.querySelector('.js-reset');
    const itemsLi = document.querySelectorAll('.js-item-li');
    const hotkeySpans = document.querySelectorAll('.js-hotkey');
    const hotkeyInputs = document.querySelectorAll('.js-hotkey-input');
    const holderInput = document.querySelector('.js-color-hold');

    colorHolder(holderInput);
    resetSettingsBinder(resetButton, hotkeyInputs, hotkeySpans, holderInput);
    hotkeySetter(hotkeyInputs, hotkeySpans, holderInput);
    render(hotkeyInputs, hotkeySpans, holderInput);
});

function render(hotkeyInputs, hotkeySpans, holderInput) {
    chrome.storage.local.get(['hotkeys', 'pam-holder'], hks => {
        hotkeys = hks['hotkeys'];
        holder = hks['pam-holder'];

        renderHotkeys(hotkeyInputs, hotkeySpans);
        renderColorHolder(holderInput);
    });
}

function resetSettingsBinder(resetButton, hotkeyInputs, hotkeySpans, holderInput) {
    resetButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({resetSettings: true});

        setTimeout(() => render(hotkeyInputs, hotkeySpans, holderInput), 50);
    });
}

function renderColorHolder(holderInput) {
    console.log(holder);
    holderInput.value = holder ? holder : 8;
}

function colorHolder(holderInput) {
    if (holderInput) {
        holderInput.addEventListener('change', ev => {
            chrome.storage.local.set({'pam-holder': +holderInput.value});
        });
    }
}

function renderHotkeys(hotkeyInputs, hotkeySpans) {
    hotkeyInputs.forEach((hotkeyInput, i) => {
        hotkeyInput.value = hotkeys[i].join(' + ');
    });

    hotkeySpans.forEach((hotkeySpan, i) => {
        hotkeySpan.innerHTML = '(' + hotkeys[i].join(' + ') + ')';
    });
}

function hotkeySetter(hotkeyInputs, hotkeySpans, holderInput) {
    hotkeyInputs.forEach((hotkeyInput, i) => {
        let keys = [];
        let keysActive = [];

        hotkeySpans[i].addEventListener('click', ev => {
            hotkeyInputs.forEach((hotkeyInput, i) => hotkeyInput.classList.remove('hotkey-input_show'));
            hotkeySpans.forEach((hotkeySpan, i) => hotkeySpan.classList.remove('hotkey_hide'));
            hotkeyInput.classList.add('hotkey-input_show');
            hotkeySpans[i].classList.add('hotkey_hide');
            hotkeyInput.focus();
        });

        hotkeyInput.addEventListener('keydown', ev => {
            if (keysActive && keysActive.includes(ev.code)) {
                return false;
            }

            if (ev.code === 'Enter') {
                if (keys.length) {
                    hotkeys[i] = keys;
                    chrome.storage.local.set({'hotkeys': hotkeys});
                }

                hotkeyInput.classList.remove('hotkey-input_show');
                hotkeySpans[i].classList.remove('hotkey_hide');

                setTimeout(() => render(hotkeyInputs, hotkeySpans, holderInput), 50);

                return;
            }

            if (keysActive.length === 0) {
                if (i === 3 || i === 5 || i === 6 || i === 7) {
                    keys = ['Перекрестие'];
                } else {
                    keys = [];
                }
            }

            console.log(i, keysActive)

            keys.push(ev.code);
            keysActive.push(ev.code);

            hotkeyInput.value = keys.map(key => key).join(' + ');

            console.log(keys, hotkeyInput.value);
        });

        hotkeyInput.addEventListener('keyup', ev => {
            keysActive = keysActive.filter(key => key !== ev.code);
        });
    });
}