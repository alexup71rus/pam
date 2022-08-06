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
            return true;
        }
    },
    'AltLeft + KeyX': function () {
        rectangleRuler.create();
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

    if (setKeys.length === 2 && typeof quickKeys[ setKeys.join(' + ') ] === 'function') {
        if (quickKeys[ setKeys.join(' + ') ]()) {
            chrome.runtime.sendMessage({optionActivate: active});
        }
    }
});

window.addEventListener('keyup', (ev) => {
    setKeys = [];
});

window.addEventListener('mousemove', (ev) => {
    dimension.handleMouseMove(ev);
});