import Dimension from './classes/Dimension';
import RectangleRuler from "./classes/RectangleRuler";

const dimension = new Dimension();
const rectangleRuler = new RectangleRuler();

let setKeys = [];
let active = '';
const quickKeys = {
    'ControlLeft + KeyZ': function () {
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
    'ControlLeft + KeyX': function () {
        rectangleRuler.create();
        return false;
    },
    'ControlLeft + KeyC': function () {
        dimension.clearRails();
        return false;
    },
    'ControlLeft + KeyD': function () {
        dimension.fixPositionRails(true);
        return false;
    },
    'ControlLeft + KeyS': function () {
        dimension.fixPositionRails();
        return false;
    },
    'ControlLeft + ShiftLeft': function () {
        if (active === 'dimensions') {
            dimension.measureContainer = true;
        } else if (active === '') {
            dimension.showDocumentWH();
        }

        return false;
    },
    'ControlLeft + ShiftLeft + KeyX': function () {
        if (active === '') {
            rectangleRuler.create(true);
        }

        return false;
    },
    'ControlLeft': function () {
        if (active === '') {
            dimension.showWindowWH();
        }
        return false;
    },
};
const actions = {
    'takeScreenshot': function (request, sender, sendResponse) {
        dimension.parseScreenshot(request.screenPng, request.hold);
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
    switch (ev.code) {
        case 'ControlLeft':
        case 'ShiftLeft':
        case 'KeyZ':
        case 'KeyX':
        case 'KeyC':
        case 'KeyS':
        case 'KeyD':
            setKeys.push(ev.code);

            const action = setKeys.join(' + ');

            if (setKeys.length >= 1 && typeof quickKeys[ action ] === 'function') {
                if (quickKeys[ action ]()) {
                    chrome.runtime.sendMessage({optionActivate: active});
                }
            }

            return;
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