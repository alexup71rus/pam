chrome.runtime.sendMessage({popupOpen: true});

window.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.querySelector('.js-reset');
    const itemsLi = document.querySelectorAll('.js-item-li');
    const hotkeySpans = document.querySelectorAll('.js-hotkey');
    const hotkeyInputs = document.querySelectorAll('.js-hotkey-input');
    const holderInput = document.querySelector('.js-color-hold');

    resetSettingsBinder(resetButton, hotkeyInputs, hotkeySpans, holderInput);
    colorHolder(holderInput);
    renderHotkeys(hotkeyInputs, hotkeySpans);
    hotkeySetter(hotkeyInputs, hotkeySpans);
});

function resetSettingsBinder(resetButton, hotkeyInputs, hotkeySpans, holderInput) {
    console.log(resetButton)
    resetButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({resetSettings: true});

        setTimeout(() => {
            renderHotkeys(hotkeyInputs, hotkeySpans);
            renderColorHolder(holderInput);
        }, 50);
    });
}

function renderColorHolder(holderInput) {
    chrome.storage.local.get(['pam-holder'], hold => {
        hold = hold && hold['pam-holder'] ? hold['pam-holder'] : 8;

        holderInput.value = hold;
    });
}

function colorHolder(holderInput) {
    renderColorHolder(holderInput);

    if (holderInput) {
        holderInput.addEventListener('change', ev => {
            chrome.runtime.sendMessage({hold: holderInput.value});
        });
    }
}

function renderHotkeys(hotkeyInputs, hotkeySpans) {
    chrome.storage.local.get(['hotkeys'], hotkeys => {
        hotkeyInputs.forEach((hotkeyInput, i) => {
            hotkeyInput.value = hotkeys.hotkeys[i].join(' + ');
        });

        hotkeySpans.forEach((hotkeySpan, i) => {
            hotkeySpan.innerHTML = '(' + hotkeys.hotkeys[i].join(' + ') + ')';
        });
    });
}

function hotkeySetter(hotkeyInputs, hotkeySpans) {
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
            if (ev.code === 'Enter') {
                if (keys.length) {
                    console.log(keys)
                    chrome.runtime.sendMessage({hotkey: keys, index: i});
                }

                hotkeyInput.classList.remove('hotkey-input_show');
                hotkeySpans[i].classList.remove('hotkey_hide');

                setTimeout(() => {
                    renderHotkeys(hotkeyInputs, hotkeySpans);
                }, 50);

                return;
            }

            if (keysActive.length === 0) {
                if (i === 3) {
                    keys = ['Перекрестие'];
                } else {
                    keys = [];
                }
            }

            keys.push(ev.code);
            keysActive.push(ev.code);

            hotkeyInput.value = keys.map(key => key).join(' + ');
        });

        hotkeyInput.addEventListener('keyup', ev => {
            keysActive = keysActive.filter(key => key !== ev.code);
        });
    });
}