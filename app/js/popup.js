!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([,,,,,function(e,t,n){n(6),e.exports=n(7)},function(e,t){function n(e){chrome.storage.local.get(["pam-holder"],(function(t){t=t&&t["pam-holder"]?t["pam-holder"]:8,e.value=t}))}function o(e,t){chrome.storage.local.get(["hotkeys"],(function(n){e.forEach((function(e,t){e.value=n.hotkeys[t].join(" + ")})),t.forEach((function(e,t){e.innerHTML="("+n.hotkeys[t].join(" + ")+")"}))}))}chrome.runtime.sendMessage({popupOpen:!0}),window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-reset"),t=(document.querySelectorAll(".js-item-li"),document.querySelectorAll(".js-hotkey")),r=document.querySelectorAll(".js-hotkey-input"),u=document.querySelector(".js-color-hold");!function(e,t,r,u){e.addEventListener("click",(function(){chrome.runtime.sendMessage({resetSettings:!0}),setTimeout((function(){o(t,r),n(u)}),50)}))}(e,r,t,u),function(e){n(e),e&&e.addEventListener("change",(function(t){chrome.runtime.sendMessage({hold:e.value})}))}(u),o(r,t),function(e,t){e.forEach((function(n,r){var u=[],i=[];t[r].addEventListener("click",(function(o){e.forEach((function(e,t){return e.classList.remove("hotkey-input_show")})),t.forEach((function(e,t){return e.classList.remove("hotkey_hide")})),n.classList.add("hotkey-input_show"),t[r].classList.add("hotkey_hide"),n.focus()})),n.addEventListener("keydown",(function(c){if("Enter"===c.code)return u.length&&chrome.runtime.sendMessage({hotkey:u,index:r}),n.classList.remove("hotkey-input_show"),t[r].classList.remove("hotkey_hide"),void setTimeout((function(){o(e,t)}),50);0===i.length&&(u=3===r?["Перекрестие"]:[]),u.push(c.code),i.push(c.code),n.value=u.map((function(e){return e})).join(" + ")})),n.addEventListener("keyup",(function(e){i=i.filter((function(t){return t!==e.code}))}))}))}(r,t)}))},function(e,t,n){}]);