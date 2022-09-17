// работает только когда нет попапа
// chrome.browserAction.onClicked.addListener(function(tab) {
// });

const _quickKeys = [
    ['ControlLeft'],
    ['ControlLeft', 'ShiftLeft'],
    ['ControlLeft', 'KeyZ'],
    ['Перекрестие', 'ControlLeft', 'ShiftLeft'],
    ['ControlLeft', 'KeyX'],
    ['ControlLeft', 'ShiftLeft', 'KeyX'],
    ['ControlLeft', 'KeyS'],
    ['ControlLeft', 'KeyD'],
    ['ControlLeft', 'KeyC'],
];
let quickKeys = _quickKeys;

chrome.storage.local.get(['hotkeys'], keys => {
    quickKeys = keys.hotkeys ? keys.hotkeys : quickKeys;

    return false;
});

// chrome.storage.local.set({'hotkeys': quickKeys});

// receiveWorkerMessage
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const active = message.optionActivate;

        if (message.popupOpen) {
            return true;
        } else if (message.resetSettings) {
            chrome.storage.local.set({'hotkeys': _quickKeys, 'pam-holder': 8});
        // } else if (message.hotkey) {
            // quickKeys[+message.index] = message.hotkey;
            // console.log(quickKeys, message);
            // chrome.storage.local.set({'hotkeys': quickKeys});
        // } else if (message.hold) {
        //     chrome.storage.local.set({'pam-holder': +message.hold});
        } else if (active === 'dimensions') {
            chrome.tabs.captureVisibleTab({ format: "png" }, data => {
                chrome.storage.local.get(['pam-holder'], hold => {
                    hold = hold && hold['pam-holder'] ? hold['pam-holder'] : 8;

                    chrome.tabs.sendMessage(tabs[0].id, {action: 'takeScreenshot', screenPng: data, hold: hold});

                    return false;
                });

                return false;
            });

            return false;
        } else if (active === 'rectangle') {
            // chrome.tabs.sendMessage(tabs[0].id, {action: 'stop'});

            return false;
        }

        return false;
    });

    return false;
});





