import Dimension from './classes/Dimension';
import RectangleRuler from "./classes/RectangleRuler";

const dimension = new Dimension();
const rectangleRuler = new RectangleRuler();

let setKeys = [];
let active = '';
let quickKeys = {};
const actions = {
    'takeScreenshot': function (request, sender, sendResponse) {
        dimension.parseScreenshot(request.screenPng, request.hold);
    },
}

chrome.storage.local.get(['pam-holder', 'hotkeys'], (storage) => {
    quickKeys = {};

    console.log(storage.hotkeys);

    storage.hotkeys.map((hk, i) => {
        hk = hk.filter(key => key !== 'Перекрестие');
        hk = hk.join(' + ');

        if (i === 0) {
            quickKeys[hk] = function () {
                if (active === '') {
                    dimension.showWindowWH();
                }
                return false;
            };
        } else if (i === 1 || i === 3) {
            quickKeys[hk] = function () {
                if (active === 'dimensions') {
                    dimension.measureContainer = true;
                } else if (active === '') {
                    dimension.showDocumentWH();
                }

                return false;
            }
        } else if (i === 2) {
            quickKeys[hk] = function () {
                const key = 'dimensions';

                if (active === key) {
                    active = '';
                    dimension.stop();
                    return false;
                } else if (active === '') {
                    active = key;
                    dimension.hideWHs();
                    return true;
                }

                return false;
            }
        } else if (i === 4) {
            quickKeys[hk] = function () {
                rectangleRuler.create();
                return false;
            }
        } else if (i === 5) {
            quickKeys[hk] = function () {
                if (active === '') {
                    rectangleRuler.create(true);
                }

                return false;
            }
        } else if (i === 6) {
            quickKeys[hk] = function () {
                dimension.fixPositionRails();
                return false;
            }
        } else if (i === 7) {
            quickKeys[hk] = function () {
                dimension.fixPositionRails(true);
                return false;
            }
        } else if (i === 8) {
            quickKeys[hk] = function () {
                dimension.clearRails();
                return false;
            }
        }
    });

    console.log(quickKeys)
});

// receiveWorkerMessage
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action && typeof actions[ request.action ] === 'function') {
        actions[ request.action ](request, sender, sendResponse);
    }

    return true;
});

window.addEventListener('keydown', (ev) => {
    setKeys.push(ev.code);

    const action = setKeys.join(' + ');

    if (setKeys.length >= 1 && typeof quickKeys[ action ] === 'function') {
        if (quickKeys[ action ]()) {
            chrome.runtime.sendMessage({optionActivate: active});
        }
    }
});

window.addEventListener('keyup', (ev) => {
    console.log('keyup', ev.code, setKeys);

    if (ev.code === 'ControlLeft') {
        setKeys = [];
        dimension.measureContainer = false;
    } else {
        setKeys = setKeys.filter(keyCode => (ev.code !== keyCode));
    }
});

window.addEventListener('mousemove', (ev) => {
    dimension.handleMouseMove(ev);
});

let scrollScreenDebounce = 0;
let scrollScreenProcess = false;

['scroll', 'mousewheel'].forEach(listener => {
    window.addEventListener(listener, (ev) => {
        if (listener === 'mousewheel') {
            handleScreenChange(800, 100);
        } else if (listener === 'scroll') {
            // handleScreenChange(100, 50);
        }
    }, false);
});

let screenFalced = false;
function handleScreenChange(timeoutDeb, timeoutScreen) {
    if (active === 'dimensions' && scrollScreenProcess === false) {
        scrollScreenProcess = true;


        if (scrollScreenDebounce) {
            clearTimeout(scrollScreenDebounce);
        }

        scrollScreenDebounce = setTimeout(() => {
            if (quickKeys['AltLeft + KeyZ']() === false) {
                setTimeout(() => {
                    if (quickKeys['AltLeft + KeyZ']()) {
                        console.log('scrollScreenDebounce - 2', active)
                        chrome.runtime.sendMessage({optionActivate: active});

                        scrollScreenProcess = false;
                    }
                }, timeoutScreen);
            }
        }, timeoutDeb);
    }
}