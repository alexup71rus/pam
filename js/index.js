import Dimension from './classes/Dimension';
import RectangleRuler from "./classes/RectangleRuler";

const dimension = new Dimension();
const rectangleRuler = new RectangleRuler();

let setKeys = [];
let active = '';
const quickKeys = {
    'AltLeft + KeyZ': function () {
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
    },
    'AltLeft + KeyX': function () {
        rectangleRuler.create();
        return false;
    },
    'AltLeft + KeyC': function () {
        dimension.clearRails();
        return false;
    },
    'AltLeft + KeyD': function () {
        dimension.fixPositionRails(true);
        return false;
    },
    'AltLeft + KeyS': function () {
        dimension.fixPositionRails();
        return false;
    },
    'AltLeft + ShiftLeft': function () {
        if (active === 'dimensions') {
            dimension.measureContainer = true;
        } else if (active === '') {
            dimension.showDocumentWH();
        }

        return false;
    },
    'AltLeft + ShiftLeft + KeyX': function () {
        if (active === '') {
            rectangleRuler.create(true);
        }

        return false;
    },
    'AltLeft': function () {
        if (active === '') {
            dimension.showWindowWH();
        }
        return false;
    },
};
const actions = {
    'takeScreenshot': function (request, sender, sendResponse) {
        dimension.parseScreenshot(request.screenPng);
    },
}

// receiveWorkerMessage
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action && typeof actions[ request.action ] === 'function') {
        actions[ request.action ](request, sender, sendResponse);
    }

    return true;
});

window.addEventListener('keydown', (ev) => {
    setKeys.push(ev.code);

    if (setKeys.length >= 1 && typeof quickKeys[ setKeys.join(' + ') ] === 'function') {
        if (quickKeys[ setKeys.join(' + ') ]()) {
            chrome.runtime.sendMessage({optionActivate: active});
        }
    }
});

window.addEventListener('keyup', (ev) => {
    setKeys = [];
    dimension.measureContainer = false;
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

function handleScreenChange(timeoutDeb, timeoutScreen) {
    if (active === 'dimensions' && scrollScreenProcess === false) {
        scrollScreenProcess = true;

        if (scrollScreenDebounce) {
            clearTimeout(scrollScreenDebounce);
        }

        scrollScreenDebounce = setTimeout(() => {
            quickKeys['AltLeft + KeyZ']();

            setTimeout(() => {
                if (quickKeys['AltLeft + KeyZ']()) {
                    console.log('scrollScreenDebounce - 2', active)
                    chrome.runtime.sendMessage({optionActivate: active});

                    scrollScreenProcess = false;
                }
            }, timeoutScreen)
        }, timeoutDeb);
    }
}