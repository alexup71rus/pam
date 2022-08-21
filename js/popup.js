chrome.runtime.sendMessage({popupOpen: true});

window.addEventListener('DOMContentLoaded', () => {
    const holderInput = document.querySelector('.js-color-hold');

    chrome.storage.local.get(['pam-holder'], hold => {
        hold = hold && hold['pam-holder'] ? hold['pam-holder'] : 8;

        holderInput.value = hold;
    })

    if (holderInput) {
        holderInput.addEventListener('change', ev => {
            // console.log(localStorage)
            chrome.runtime.sendMessage({hold: holderInput.value});
        });
    }
});