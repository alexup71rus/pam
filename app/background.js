// работает только когда нет попапа
// chrome.browserAction.onClicked.addListener(function(tab) {
// });

// receiveWorkerMessage
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const active = message.optionActivate;

        if (message.popupOpen) {
            console.log('open');
            console.log(chrome, tabs[0].id);
            // chrome.tabs.sendMessage(tabs[0].id, {"message": "click"});

            return true;
        } else if (active === 'dimensions') {
            chrome.tabs.captureVisibleTab({ format: "png" }, data => {
                chrome.tabs.sendMessage(tabs[0].id, {action: 'takeScreenshot', screenPng: data});
                return true;
            });

            return true;
        } else if (active === 'rectangle') {
            // chrome.tabs.sendMessage(tabs[0].id, {action: 'stop'});

            return true;
        }

        return true;
    });

    return true;
});





