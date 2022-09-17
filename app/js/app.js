!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}t.exports=function(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){i(8),t.exports=i(4)},function(t,e,i){},,,,function(t,e,i){"use strict";i.r(e);var s=i(0),o=i.n(s),n=i(1),r=i.n(n),l=i(2),a=i.n(l),d=function(){function t(){o()(this,t),a()(this,"measureContainer",!1),this.image=new Image,this.canvas=document.createElement("canvas"),this.colorHold=8,this.imgData=[],this.x=0,this.y=0,this.top=0,this.bottom=0,this.left=0,this.right=0,this.screenWidth=0,this.screenHeight=0,this.debounceUpdate={timer:0,rangeX:0,rangeY:0},this.midColor={r:255,g:255,b:255,a:255},this.create()}return r()(t,[{key:"create",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="js-dimension" style="left: 0px; top: 0px;">\n            <div class="x js-dimension__axis" style="left: 0px; width: 0px;"></div>\n            <div class="y js-dimension__axis" style="top: 0px; height: 0px;"></div>\n            <div class="js-dimension__tooltip"></div>\n        </div>\n        <div class="dimension__nocursor"></div>\n        '),this.nodes={point:document.querySelector(".js-dimension"),x:document.querySelector(".js-dimension__axis.x"),y:document.querySelector(".js-dimension__axis.y"),tooltip:document.querySelector(".js-dimension__tooltip")}}},{key:"stop",value:function(){this.imgData=[],this.screenWidth=0,this.screenHeight=0,this.debounceUpdate={timer:0,rangeX:0,rangeY:0},this.nodes.tooltip.innerHTML="",this.nodes.point.classList.remove("on")}},{key:"handleMouseMove",value:function(t){var e=this;this.x=t.clientX,this.y=t.clientY,this.debounceUpdate.timer&&(clearTimeout(this.debounceUpdate.timer),this.debounceUpdate.timer=0),this.imgData&&this.imgData.length&&(t.clientX>this.debounceUpdate.rangeX+5||t.clientX<this.debounceUpdate.rangeX-5||t.clientY>this.debounceUpdate.rangeY+5||t.clientY<this.debounceUpdate.rangeY-5?this.debounceUpdate.timer=setTimeout((function(){e.update()}),5):this.debounceUpdate.timer=setTimeout((function(){e.update()}),1))}},{key:"update",value:function(){this.debounceUpdate.rangeX=this.x,this.debounceUpdate.rangeY=this.y,this.measureArea(),this.draw(this.debounceUpdate.rangeX,this.debounceUpdate.rangeY)}},{key:"measureArea",value:function(){var t=this.x,e=this.y;this.midColor=this.getColorCursorPoint(),this.parse(t,e,"top"),this.parse(t,e,"bottom"),this.parse(t,e,"left"),this.parse(t,e,"right")}},{key:"parse",value:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5e3;switch(i){case"top":e-=1;break;case"bottom":e+=1;break;case"left":t+=1;break;case"right":t-=1}var n=this.inBoundaries(t,e)?4*(e*this.screenWidth+t):-1;if(n>-1){var r={r:this.imgData[n],g:this.imgData[n+1],b:this.imgData[n+2],a:this.imgData[n+3]},l=r.r<this.midColor.r+this.colorHold&&r.r>this.midColor.r-this.colorHold&&r.g<this.midColor.g+this.colorHold&&r.g>this.midColor.g-this.colorHold&&r.b<this.midColor.b+this.colorHold&&r.b>this.midColor.b-this.colorHold&&r.a<this.midColor.a+this.colorHold&&r.a>this.midColor.a-this.colorHold;l?o&&this.parse(t,e,i,++s,--o):this[i]=s}else this[i]=s}},{key:"draw",value:function(t,e){var i=t,s=e,o=document.querySelector(".dimension__nocursor");if(t+100>window.innerWidth?this.nodes.tooltip.classList.add("translateX"):this.nodes.tooltip.classList.remove("translateX"),e-100<0?this.nodes.tooltip.classList.add("translateY"):this.nodes.tooltip.classList.remove("translateY"),this.measureContainer){var n=document.elementFromPoint(i,s);if(n){o&&o.classList.add("dimension__nocursor_hide");var r=Math.round(n.getBoundingClientRect().top),l=Math.round(n.getBoundingClientRect().left),a=Math.round(n.getBoundingClientRect().width),d=Math.round(n.getBoundingClientRect().height);this.top=this.top+1,this.left=this.left+1,this.nodes.point.classList.add("on"),this.nodes.point.style.top=r+d/2+"px",this.nodes.point.style.left=l+a/2+"px",this.nodes.tooltip.innerHTML="".concat(a," x ").concat(d),this.nodes.y.style.marginTop=-d/2+"px",this.nodes.y.style.height=d+"px",this.nodes.x.style.marginLeft=-a/2+"px",this.nodes.x.style.width=a+"px"}else o&&o.classList.remove("dimension__nocursor_hide"),this.top=this.top+1,this.left=this.left+1,this.nodes.point.classList.add("on"),this.nodes.point.style.top=e+"px",this.nodes.point.style.left=t+"px",this.nodes.tooltip.innerHTML="".concat(this.left+this.right," x ").concat(this.top+this.bottom),this.nodes.y.style.marginTop="-"+this.top+"px",this.nodes.y.style.height=this.top+this.bottom+"px",this.nodes.x.style.marginLeft="-"+this.right+"px",this.nodes.x.style.width=this.left+this.right+"px"}else o&&o.classList.remove("dimension__nocursor_hide"),this.top=this.top+1,this.left=this.left+1,this.nodes.point.classList.add("on"),this.nodes.point.style.top=e+"px",this.nodes.point.style.left=t+"px",this.nodes.tooltip.innerHTML="".concat(this.left+this.right," x ").concat(this.top+this.bottom),this.nodes.y.style.marginTop="-"+this.top+"px",this.nodes.y.style.height=this.top+this.bottom+"px",this.nodes.x.style.marginLeft="-"+this.right+"px",this.nodes.x.style.width=this.left+this.right+"px"}},{key:"fixPositionRails",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.nodes.x.getBoundingClientRect(),i=this.nodes.y.getBoundingClientRect();if(t){var s=document.createElement("div");s.classList.add("js-rail"),s.classList.add("rail-x"),s.style.width=this.nodes.x.style.width,s.style.top=window.scrollY+e.top-1+"px",s.style.left=window.scrollX+e.left-1+"px",s.title=this.nodes.x.style.width,document.body.appendChild(s);var o=document.createElement("div");o.classList.add("js-rail"),o.classList.add("rail-y"),o.style.height=this.nodes.y.style.height,o.style.top=window.scrollY+i.top+"px",o.style.left=window.scrollX+i.left+"px",o.title=this.nodes.y.style.height,document.body.appendChild(o)}else{var n=document.createElement("div");n.classList.add("js-rail"),parseInt(this.nodes.x.style.width)<parseInt(this.nodes.y.style.height)?(n.classList.add("rail-x"),n.style.width=this.nodes.x.style.width,n.style.top=window.scrollY+e.top+"px",n.style.left=window.scrollX+e.left+"px",n.title=this.nodes.x.style.width):(n.classList.add("rail-y"),n.style.height=this.nodes.y.style.height,n.style.top=window.scrollY+i.top+"px",n.style.left=window.scrollX+i.left+"px",n.title=this.nodes.y.style.height),document.body.appendChild(n)}}},{key:"clearRails",value:function(){var t=document.querySelectorAll(".js-rail");t&&t.forEach((function(t){t.remove()}))}},{key:"showWindowWH",value:function(){var t=document.createElement("div");t.classList.add("js-window-wh"),t.classList.add("window-wh"),t.classList.add("window-wh_show"),t.innerHTML=window.innerWidth+"x"+window.innerHeight,document.body.appendChild(t),setTimeout((function(){t&&t.classList.remove("window-wh_show")}),800),setTimeout((function(){t&&t.remove()}),1e3)}},{key:"showDocumentWH",value:function(){var t=document.createElement("div"),e=document.body,i=document.documentElement,s=Math.max(e.scrollWidth,e.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth),o=Math.max(e.scrollHeight,e.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight),n=document.querySelectorAll(".js-window-wh");n&&n.forEach((function(t){t.remove()})),t.classList.add("js-window-wh"),t.classList.add("window-wh"),t.classList.add("window-wh_show"),t.innerHTML=s+"x"+o,document.body.appendChild(t),setTimeout((function(){t.classList.remove("window-wh_show")}),1e3),setTimeout((function(){t.remove()}),1200)}},{key:"hideWHs",value:function(){var t=document.querySelectorAll(".js-window-wh");t&&t.forEach((function(t){t.remove()}))}},{key:"parseScreenshot",value:function(t,e){this.colorHold=e,this.image.onload=this.loadImage(this.screenshotProcessed.bind(this)),this.image.src=t}},{key:"inBoundaries",value:function(t,e){return t>=0&&t<this.screenWidth&&e>=0&&e<this.screenHeight}},{key:"getLightnessAt",value:function(){return this.inBoundaries(this.x,this.y)?this.y*this.screenWidth+this.x:-1}},{key:"screenshotProcessed",value:function(t){this.imgData=new Uint8ClampedArray(t.imgData),this.screenWidth=t.width,this.screenHeight=t.height}},{key:"getColorCursorPoint",value:function(){var t=4*this.getLightnessAt();return{r:this.imgData[t],g:this.imgData[t+1],b:this.imgData[t+2],a:this.imgData[t+3]}}},{key:"loadImage",value:function(t){var e=this;setTimeout((function(){if(window.innerWidth&&window.innerHeight){e.ctx=e.canvas.getContext("2d"),e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight,e.ctx.drawImage(e.image,0,0,e.canvas.width,e.canvas.height);var i=e.ctx.getImageData(0,0,e.canvas.width,e.canvas.height).data;t({type:"imgData",imgData:i.buffer,width:e.canvas.width,height:e.canvas.height}),e.update()}}),100)}}]),t}(),c=function(){function t(){o()(this,t),this.action="",this.resizeSide="",this.rect={},this.rectangleNode=!1,this.tooltipSizeNode=!1,this.tooltipPosNode=!1,this.mouseX=0,this.mouseY=0,this.bind()}return r()(t,[{key:"create",value:function(t){var e=document.querySelectorAll(".js-rectangle-ruler"),i=100,s=100,o=200,n=100;if(t){var r=document.elementFromPoint(this.mouseX,this.mouseY);r&&(i=window.scrollY+r.getBoundingClientRect().top,s=window.scrollX+r.getBoundingClientRect().left,o=r.getBoundingClientRect().width,n=r.getBoundingClientRect().height)}else e&&(i=100+10*e.length,s=100+10*e.length);i=Math.round(i),s=Math.round(s),o=Math.round(o),n=Math.round(n);var l=document.createElement("div");l.classList.add("js-rectangle-ruler"),l.classList.add("rectangle-ruler");var a='\n            <div class="js-rectangle rectangle-ruler__rectangle ui-resizable" data-action="move" style="'.concat("top:"+i+"px;left:"+s+"px;width:"+o+"px;height:"+n+"px;",'">\n                <div class="rectangle-ruler__nav">\n                    <div class="js-rectangle-close rectangle-close" data-action="close"></div>\n                    <div class="js-rectangle-pin rectangle-pin" data-action="pin"></div>\n                </div>\n                <div class="rectangle-ruler__tooltip" data-action="move">\n                    <div class="js-rectangle-tooltip-size rectangle-tooltip__size tooltip__bottom ').concat(o>120&&n>50?"rectangle-tooltip_center":"",'" data-action="move">').concat(o,"x").concat(n,'</div>\n                    <div class="js-rectangle-tooltip-pos rectangle-tooltip__pos tooltip__bottom hide" data-action="move">').concat(i,"x").concat(s,'</div>\n                </div>\n                <div class="ui-resizable-n" data-action="resize" data-resize="n"></div>\n                <div class="ui-resizable-w" data-action="resize" data-resize="w"></div>\n                <div class="ui-resizable-s" data-action="resize" data-resize="s"></div>\n                <div class="ui-resizable-e" data-action="resize" data-resize="e"></div>\n                <div class="ui-resizable-se" data-action="resize" data-resize="se"></div>\n            </div>\n            <div class="rectangle-ruler__no-cursor"></div>\n        ');if(l.insertAdjacentHTML("beforeend",a),document.body.appendChild(l),t){var d=l.querySelector(".js-rectangle-pin");this.action="pin",this.rulerNode=l,this.rectangleNode=this.rulerNode.querySelector(".js-rectangle"),this.triggerMouseEvent(d,"mouseup")}}},{key:"getRuler",value:function(t,e){if(t.classList.contains(e))return t;var i=t.closest(".js-rectangle-ruler");if("js-rectangle-ruler"===e)return i;if(i){var s=i.querySelector("."+e);return s||!1}return!1}},{key:"bind",value:function(){document.addEventListener("mousedown",this.mouseDown.bind(this)),document.addEventListener("mouseup",this.mouseUp.bind(this)),document.addEventListener("mousemove",this.mouseMove.bind(this)),document.addEventListener("keydown",this.keyDown.bind(this))}},{key:"triggerMouseEvent",value:function(t,e){var i=document.createEvent("MouseEvents");i.initEvent(e,!0,!0),t.dispatchEvent(i)}},{key:"mouseDown",value:function(t){var e;if(this.rulerNode=this.getRuler(t.target,"js-rectangle-ruler"),this.rulerNode){if(this.rectangleNode=this.rulerNode.querySelector(".js-rectangle"),this.tooltipSizeNode=this.rulerNode.querySelector(".js-rectangle-tooltip-size"),this.tooltipPosNode=this.rulerNode.querySelector(".js-rectangle-tooltip-pos"),this.action=null===(e=t.target.dataset)||void 0===e?void 0:e.action,this.action&&this.rectangleNode&&this.tooltipSizeNode&&this.tooltipPosNode)if("resize"===this.action){var i,s=null===(i=t.target.dataset)||void 0===i?void 0:i.resize;this.rect={startLeft:this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?window.scrollX+this.rectangleNode.getBoundingClientRect().left:this.rectangleNode.getBoundingClientRect().left,startTop:this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?window.scrollY+this.rectangleNode.getBoundingClientRect().top:this.rectangleNode.getBoundingClientRect().top,shiftX:window.scrollX+(t.clientX-this.rectangleNode.getBoundingClientRect().left),shiftY:window.scrollY+(t.clientY-this.rectangleNode.getBoundingClientRect().top),startX:t.clientX,startY:t.clientY,shiftWidth:this.rectangleNode.getBoundingClientRect().width,shiftHeight:this.rectangleNode.getBoundingClientRect().height},this.resizeSide=s||""}else"move"===this.action&&(this.rect={startLeft:this.rectangleNode.getBoundingClientRect().left,startTop:this.rectangleNode.getBoundingClientRect().top,shiftX:this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?t.clientX-this.rectangleNode.getBoundingClientRect().left:window.scrollX+(t.clientX-this.rectangleNode.getBoundingClientRect().left),shiftY:this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?t.clientY-this.rectangleNode.getBoundingClientRect().top:window.scrollY+(t.clientY-this.rectangleNode.getBoundingClientRect().top),startX:t.clientX,startY:t.clientY,shiftWidth:this.rectangleNode.getBoundingClientRect().width,shiftHeight:this.rectangleNode.getBoundingClientRect().height},this.debounce(this.showPos.bind(this),0))}else this.rectangleNode=!1,this.tooltipSizeNode=!1,this.tooltipPosNode=!1,this.action="",this.resizeSide="",this.offsetY=0,this.offsetX=0}},{key:"mouseUp",value:function(t){if(this.action&&this.rulerNode)if("close"===this.action)this.rulerNode&&this.rulerNode.remove();else if("pin"===this.action){var e=this.rectangleNode.querySelector(".js-rectangle-pin");if(e)if(e.classList.contains("active")){var i=window.scrollY+(t.clientY-this.rectangleNode.getBoundingClientRect().top),s=window.scrollX+(t.clientX-this.rectangleNode.getBoundingClientRect().left);this.rectangleNode.style.top=t.pageY-i+"px",this.rectangleNode.style.left=t.pageX-s+"px",e.classList.remove("active"),this.rectangleNode.classList.remove("rectangle-ruler__rectangle_fix")}else{var o=t.clientY-this.rectangleNode.getBoundingClientRect().top,n=t.clientX-this.rectangleNode.getBoundingClientRect().left;this.rectangleNode.style.top=t.pageY-o+"px",this.rectangleNode.style.left=t.pageX-n+"px",e.classList.add("active"),this.rectangleNode.classList.add("rectangle-ruler__rectangle_fix")}}else this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),1e3);this.action="",this.resizeSide="",this.offsetY=0,this.offsetX=0}},{key:"showPos",value:function(){this.tooltipPosNode.classList.remove("hide"),this.tooltipSizeNode.classList.add("hide")}},{key:"hidePos",value:function(){var t=document.querySelectorAll(".js-rectangle-tooltip-pos"),e=document.querySelectorAll(".js-rectangle-tooltip-size");t&&t.forEach((function(t){t.classList.add("hide")})),e&&e.forEach((function(t){t.classList.remove("hide")}))}},{key:"mouseMove",value:function(t){if(this.mouseX=t.clientX,this.mouseY=t.clientY,"move"===this.action){this.rectangleNode.getBoundingClientRect();this.rectangleNode.style.top=t.pageY-this.rect.shiftY+"px",this.rectangleNode.style.left=t.pageX-this.rect.shiftX+"px",this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode)}else if("resize"===this.action){if(this.rectangleNode.getBoundingClientRect().width>120&&this.rectangleNode.getBoundingClientRect().height>50?this.tooltipSizeNode.classList.add("rectangle-tooltip_center"):this.tooltipSizeNode.classList.remove("rectangle-tooltip_center"),"se"===this.resizeSide)this.rectangleNode.style.width=this.rect.shiftWidth+t.clientX-this.rect.startX+"px",this.rectangleNode.style.height=this.rect.shiftHeight+t.clientY-this.rect.startY+"px";else if("e"===this.resizeSide)this.rectangleNode.style.width=this.rect.shiftWidth+t.clientX-this.rect.startX+"px";else if("s"===this.resizeSide)this.rectangleNode.style.height=this.rect.shiftHeight+t.clientY-this.rect.startY+"px";else if("w"===this.resizeSide){var e=t.pageX-this.rect.shiftX;this.rectangleNode.style.left=e+"px",this.rectangleNode.style.width=this.rect.shiftWidth+(this.rect.startLeft-e)+"px"}else if("n"===this.resizeSide){var i=this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?window.scrollY+(t.pageY-this.rect.shiftY):t.pageY-this.rect.shiftY;this.rectangleNode.style.top=i+"px",this.rectangleNode.style.height=this.rect.shiftHeight+(this.rect.startTop-i)+"px"}this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode)}}},{key:"keyDown",value:function(t){this.rectangleNode&&("ArrowUp"===t.key?(t.preventDefault(),t.stopPropagation(),this.rectangleNode.style.top=+this.rectangleNode.style.top.replace("px","")-1+"px",this.showPos(),this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),500)):"ArrowDown"===t.key?(t.preventDefault(),t.stopPropagation(),this.rectangleNode.style.top=+this.rectangleNode.style.top.replace("px","")+1+"px",this.showPos(),this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),500)):"ArrowLeft"===t.key?(t.preventDefault(),t.stopPropagation(),this.rectangleNode.style.left=+this.rectangleNode.style.left.replace("px","")-1+"px",this.showPos(),this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),500)):"ArrowRight"===t.key&&(t.preventDefault(),t.stopPropagation(),this.rectangleNode.style.left=+this.rectangleNode.style.left.replace("px","")+1+"px",this.showPos(),this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),500)))}},{key:"updateTooltip",value:function(t,e,i){var s=t.getBoundingClientRect();e.innerHTML=s.width+"x"+s.height,this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?i.innerHTML=t.offsetLeft+"x"+t.offsetTop:i.innerHTML=s.left+"x"+s.top}},{key:"debounce",value:function(t,e){this.debId&&(clearTimeout(this.debId),this.debId=0),this.debId=setTimeout(t,e)}}]),t}(),h=new d,u=new c,g=[],p="",f={},m={takeScreenshot:function(t,e,i){h.parseScreenshot(t.screenPng,t.hold)}};chrome.storage.local.get(["pam-holder","hotkeys"],(function(t){f={},t.hotkeys.map((function(t,e){t=(t=t.filter((function(t){return"Перекрестие"!==t}))).join(" + "),0===e?f[t]=function(){return""===p&&h.showWindowWH(),!1}:1===e||3===e?f[t]=function(){return"dimensions"===p?h.measureContainer=!!h.measureContainer:""===p&&h.showDocumentWH(),!1}:2===e?f[t]=function(){var t="dimensions";return p===t?(p="",h.stop(),!1):""===p&&(p=t,h.hideWHs(),!0)}:4===e?f[t]=function(){return u.create(),!1}:5===e?f[t]=function(){return""===p&&u.create(!0),!1}:6===e?f[t]=function(){return h.fixPositionRails(),!1}:7===e?f[t]=function(){return h.fixPositionRails(!0),!1}:8===e&&(f[t]=function(){return h.clearRails(),!1})}))})),chrome.runtime.onMessage.addListener((function(t,e,i){return t.action&&"function"==typeof m[t.action]&&m[t.action](t,e,i),!0})),window.addEventListener("keydown",(function(t){g.push(t.code);var e=g.join(" + ");g.length>=1&&"function"==typeof f[e]&&f[e]()&&chrome.runtime.sendMessage({optionActivate:p})})),window.addEventListener("keyup",(function(t){h.measureContainer=!1,g=g.filter((function(e){return t.code!==e}))})),window.addEventListener("mousemove",(function(t){h.handleMouseMove(t)}));var v=0,y=!1;["scroll","mousewheel"].forEach((function(t){window.addEventListener(t,(function(e){var i,s;"mousewheel"===t&&(i=800,s=100,"dimensions"===p&&!1===y&&(y=!0,v&&clearTimeout(v),v=setTimeout((function(){!1===f["AltLeft + KeyZ"]()&&setTimeout((function(){f["AltLeft + KeyZ"]()&&(chrome.runtime.sendMessage({optionActivate:p}),y=!1)}),s)}),i)))}),!1)}))}]);