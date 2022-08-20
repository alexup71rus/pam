!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}t.exports=function(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,i){i(7),t.exports=i(3)},function(t,e,i){},,,,function(t,e,i){"use strict";i.r(e);var s=i(0),o=i.n(s),n=i(1),r=i.n(n),a=function(){function t(){o()(this,t),this.image=new Image,this.canvas=document.createElement("canvas"),this.colorHold=8,this.imgData=[],this.x=0,this.y=0,this.top=0,this.bottom=0,this.left=0,this.right=0,this.screenWidth=0,this.screenHeight=0,this.debounceUpdate={timer:0,rangeX:0,rangeY:0},this.midColor={r:255,g:255,b:255,a:255},this.create()}return r()(t,[{key:"create",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="js-dimension" style="left: 0px; top: 0px;">\n            <div class="x js-dimension__axis" style="left: 0px; width: 0px;"></div>\n            <div class="y js-dimension__axis" style="top: 0px; height: 0px;"></div>\n            <div class="js-dimension__tooltip"></div>\n        </div>\n        <div class="dimension__nocursor"></div>\n        '),this.nodes={point:document.querySelector(".js-dimension"),x:document.querySelector(".js-dimension__axis.x"),y:document.querySelector(".js-dimension__axis.y"),tooltip:document.querySelector(".js-dimension__tooltip")}}},{key:"stop",value:function(){this.imgData=[],this.screenWidth=0,this.screenHeight=0,this.debounceUpdate={timer:0,rangeX:0,rangeY:0},this.nodes.tooltip.innerHTML="",this.nodes.point.classList.remove("on")}},{key:"handleMouseMove",value:function(t){var e=this;this.x=t.clientX,this.y=t.clientY,this.debounceUpdate.timer&&(clearTimeout(this.debounceUpdate.timer),this.debounceUpdate.timer=0),this.imgData&&this.imgData.length&&(t.clientX>this.debounceUpdate.rangeX+5||t.clientX<this.debounceUpdate.rangeX-5||t.clientY>this.debounceUpdate.rangeY+5||t.clientY<this.debounceUpdate.rangeY-5?this.debounceUpdate.timer=setTimeout((function(){e.update()}),5):this.debounceUpdate.timer=setTimeout((function(){e.update()}),1))}},{key:"update",value:function(){this.debounceUpdate.rangeX=this.x,this.debounceUpdate.rangeY=this.y,this.measureArea(),this.draw(this.debounceUpdate.rangeX,this.debounceUpdate.rangeY)}},{key:"measureArea",value:function(){var t=this.x,e=this.y;this.midColor=this.getColorCursorPoint(),this.parse(t,e,"top"),this.parse(t,e,"bottom"),this.parse(t,e,"left"),this.parse(t,e,"right")}},{key:"parse",value:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5e3;switch(i){case"top":e-=1;break;case"bottom":e+=1;break;case"left":t+=1;break;case"right":t-=1}var n=this.inBoundaries(t,e)?4*(e*this.screenWidth+t):-1;if(n>-1){var r={r:this.imgData[n],g:this.imgData[n+1],b:this.imgData[n+2],a:this.imgData[n+3]},a=r.r<this.midColor.r+this.colorHold&&r.r>this.midColor.r-this.colorHold&&r.g<this.midColor.g+this.colorHold&&r.g>this.midColor.g-this.colorHold&&r.b<this.midColor.b+this.colorHold&&r.b>this.midColor.b-this.colorHold&&r.a<this.midColor.a+this.colorHold&&r.a>this.midColor.a-this.colorHold;a?o&&this.parse(t,e,i,++s,--o):this[i]=s}else this[i]=s}},{key:"draw",value:function(t,e){t+100>window.innerWidth?this.nodes.tooltip.classList.add("translateX"):this.nodes.tooltip.classList.remove("translateX"),e-100<0?this.nodes.tooltip.classList.add("translateY"):this.nodes.tooltip.classList.remove("translateY"),this.top=this.top+1,this.left=this.left+1,this.nodes.point.classList.add("on"),this.nodes.point.style.top=e+"px",this.nodes.point.style.left=t+"px",this.nodes.tooltip.innerHTML="".concat(this.left+this.right," x ").concat(this.top+this.bottom),this.nodes.y.style.marginTop="-"+this.top+"px",this.nodes.y.style.height=this.top+this.bottom+"px",this.nodes.x.style.marginLeft="-"+this.right+"px",this.nodes.x.style.width=this.left+this.right+"px",this.drawLines()}},{key:"drawLines",value:function(){}},{key:"fixPositionRails",value:function(){var t=this.nodes.x.getBoundingClientRect(),e=this.nodes.y.getBoundingClientRect(),i=document.createElement("div");i.classList.add("js-rail"),parseInt(this.nodes.x.style.width)<parseInt(this.nodes.y.style.height)?(i.classList.add("rail-x"),i.style.width=this.nodes.x.style.width,i.style.top=window.scrollY+t.top+"px",i.style.left=window.scrollX+t.left+"px",i.title=this.nodes.x.style.width):(i.classList.add("rail-y"),i.style.height=this.nodes.y.style.height,i.style.top=window.scrollY+e.top+"px",i.style.left=window.scrollX+e.left+"px",i.title=this.nodes.y.style.height),document.body.appendChild(i)}},{key:"parseScreenshot",value:function(t){this.image.onload=this.loadImage(this.screenshotProcessed.bind(this)),this.image.src=t}},{key:"inBoundaries",value:function(t,e){return t>=0&&t<this.screenWidth&&e>=0&&e<this.screenHeight}},{key:"getLightnessAt",value:function(){return this.inBoundaries(this.x,this.y)?this.y*this.screenWidth+this.x:-1}},{key:"screenshotProcessed",value:function(t){this.imgData=new Uint8ClampedArray(t.imgData),this.screenWidth=t.width,this.screenHeight=t.height}},{key:"getColorCursorPoint",value:function(){var t=4*this.getLightnessAt();return{r:this.imgData[t],g:this.imgData[t+1],b:this.imgData[t+2],a:this.imgData[t+3]}}},{key:"loadImage",value:function(t){var e=this;setTimeout((function(){if(window.innerWidth&&window.innerHeight){e.ctx=e.canvas.getContext("2d"),e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight,e.ctx.drawImage(e.image,0,0,e.canvas.width,e.canvas.height);var i=e.ctx.getImageData(0,0,e.canvas.width,e.canvas.height).data;t({type:"imgData",imgData:i.buffer,width:e.canvas.width,height:e.canvas.height}),e.update()}}),100)}}]),t}(),l=function(){function t(){o()(this,t),this.action="",this.resizeSide="",this.rect={},this.rectangleNode=!1,this.tooltipSizeNode=!1,this.tooltipPosNode=!1,this.bind()}return r()(t,[{key:"create",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="js-rectangle-ruler rectangle-ruler" style="">\n            <div class="js-rectangle rectangle-ruler__rectangle ui-resizable" data-action="move">\n                <div class="rectangle-ruler__nav">\n                    <div class="js-rectangle-close rectangle-close" data-action="close"></div>\n                    <div class="js-rectangle-pin rectangle-pin" data-action="pin"></div>\n                </div>\n                <div class="rectangle-ruler__tooltip" data-action="move">\n                    <div class="js-rectangle-tooltip-size rectangle-tooltip__size tooltip__bottom" data-action="move">500x300</div>\n                    <div class="js-rectangle-tooltip-pos rectangle-tooltip__pos tooltip__bottom hide" data-action="move">500x300</div>\n                </div>\n                <div class="ui-resizable-n" data-action="resize" data-resize="n"></div>\n                <div class="ui-resizable-w" data-action="resize" data-resize="w"></div>\n                <div class="ui-resizable-s" data-action="resize" data-resize="s"></div>\n                <div class="ui-resizable-e" data-action="resize" data-resize="e"></div>\n                <div class="ui-resizable-se" data-action="resize" data-resize="se"></div>\n            </div>\n            <div class="rectangle-ruler__no-cursor"></div>\n        </div>\n        ')}},{key:"getRuler",value:function(t,e){if(t.classList.contains(e))return t;var i=t.closest(".js-rectangle-ruler");if("js-rectangle-ruler"===e)return i;if(i){var s=i.querySelector("."+e);return s||!1}return!1}},{key:"bind",value:function(){document.addEventListener("mousedown",this.mouseDown.bind(this)),document.addEventListener("mouseup",this.mouseUp.bind(this)),document.addEventListener("mousemove",this.mouseMove.bind(this)),document.addEventListener("keydown",this.keyDown.bind(this))}},{key:"mouseDown",value:function(t){var e;if(this.rulerNode=this.getRuler(t.target,"js-rectangle-ruler"),this.rulerNode){if(this.rectangleNode=this.rulerNode.querySelector(".js-rectangle"),this.tooltipSizeNode=this.rulerNode.querySelector(".js-rectangle-tooltip-size"),this.tooltipPosNode=this.rulerNode.querySelector(".js-rectangle-tooltip-pos"),this.action=null===(e=t.target.dataset)||void 0===e?void 0:e.action,this.action&&this.rectangleNode&&this.tooltipSizeNode&&this.tooltipPosNode)if("resize"===this.action){var i,s=null===(i=t.target.dataset)||void 0===i?void 0:i.resize;this.rect={startLeft:this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?window.scrollX+this.rectangleNode.getBoundingClientRect().left:this.rectangleNode.getBoundingClientRect().left,startTop:this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?window.scrollY+this.rectangleNode.getBoundingClientRect().top:this.rectangleNode.getBoundingClientRect().top,shiftX:window.scrollX+(t.clientX-this.rectangleNode.getBoundingClientRect().left),shiftY:window.scrollY+(t.clientY-this.rectangleNode.getBoundingClientRect().top),startX:t.clientX,startY:t.clientY,shiftWidth:this.rectangleNode.getBoundingClientRect().width,shiftHeight:this.rectangleNode.getBoundingClientRect().height},this.resizeSide=s||""}else"move"===this.action&&(this.rect={startLeft:this.rectangleNode.getBoundingClientRect().left,startTop:this.rectangleNode.getBoundingClientRect().top,shiftX:this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?t.clientX-this.rectangleNode.getBoundingClientRect().left:window.scrollX+(t.clientX-this.rectangleNode.getBoundingClientRect().left),shiftY:this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?t.clientY-this.rectangleNode.getBoundingClientRect().top:window.scrollY+(t.clientY-this.rectangleNode.getBoundingClientRect().top),startX:t.clientX,startY:t.clientY,shiftWidth:this.rectangleNode.getBoundingClientRect().width,shiftHeight:this.rectangleNode.getBoundingClientRect().height},this.debounce(this.showPos.bind(this),0))}else this.rectangleNode=!1,this.tooltipSizeNode=!1,this.tooltipPosNode=!1,this.action="",this.resizeSide="",this.offsetY=0,this.offsetX=0}},{key:"mouseUp",value:function(t){if(this.action&&this.rulerNode)if("close"===this.action)this.rulerNode&&this.rulerNode.remove();else if("pin"===this.action){var e=this.rectangleNode.querySelector(".js-rectangle-pin");if(e)if(e.classList.contains("active")){var i=window.scrollY+(t.clientY-this.rectangleNode.getBoundingClientRect().top),s=window.scrollX+(t.clientX-this.rectangleNode.getBoundingClientRect().left);this.rectangleNode.style.top=t.pageY-i+"px",this.rectangleNode.style.left=t.pageX-s+"px",e.classList.remove("active"),this.rectangleNode.classList.remove("rectangle-ruler__rectangle_fix")}else{var o=t.clientY-this.rectangleNode.getBoundingClientRect().top,n=t.clientX-this.rectangleNode.getBoundingClientRect().left;this.rectangleNode.style.top=t.pageY-o+"px",this.rectangleNode.style.left=t.pageX-n+"px",e.classList.add("active"),this.rectangleNode.classList.add("rectangle-ruler__rectangle_fix")}}else this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),1e3);this.action="",this.resizeSide="",this.offsetY=0,this.offsetX=0}},{key:"showPos",value:function(){this.tooltipPosNode.classList.remove("hide"),this.tooltipSizeNode.classList.add("hide")}},{key:"hidePos",value:function(){this.tooltipPosNode.classList.add("hide"),this.tooltipSizeNode.classList.remove("hide")}},{key:"mouseMove",value:function(t){if("move"===this.action){this.rectangleNode.getBoundingClientRect();this.rectangleNode.style.top=t.pageY-this.rect.shiftY+"px",this.rectangleNode.style.left=t.pageX-this.rect.shiftX+"px",this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode)}else if("resize"===this.action){if("se"===this.resizeSide)this.rectangleNode.style.width=this.rect.shiftWidth+t.clientX-this.rect.startX+"px",this.rectangleNode.style.height=this.rect.shiftHeight+t.clientY-this.rect.startY+"px";else if("e"===this.resizeSide)this.rectangleNode.style.width=this.rect.shiftWidth+t.clientX-this.rect.startX+"px";else if("s"===this.resizeSide)this.rectangleNode.style.height=this.rect.shiftHeight+t.clientY-this.rect.startY+"px";else if("w"===this.resizeSide){var e=t.pageX-this.rect.shiftX;this.rectangleNode.style.left=e+"px",this.rectangleNode.style.width=this.rect.shiftWidth+(this.rect.startLeft-e)+"px"}else if("n"===this.resizeSide){var i=this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?window.scrollY+(t.pageY-this.rect.shiftY):t.pageY-this.rect.shiftY;this.rectangleNode.style.top=i+"px",this.rectangleNode.style.height=this.rect.shiftHeight+(this.rect.startTop-i)+"px"}this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode)}}},{key:"keyDown",value:function(t){this.rectangleNode&&("ArrowUp"===t.key?(t.preventDefault(),t.stopPropagation(),this.rectangleNode.style.top=+this.rectangleNode.style.top.replace("px","")-1+"px",this.showPos(),this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),500)):"ArrowDown"===t.key?(t.preventDefault(),t.stopPropagation(),this.rectangleNode.style.top=+this.rectangleNode.style.top.replace("px","")+1+"px",this.showPos(),this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),500)):"ArrowLeft"===t.key?(t.preventDefault(),t.stopPropagation(),this.rectangleNode.style.left=+this.rectangleNode.style.left.replace("px","")-1+"px",this.showPos(),this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),500)):"ArrowRight"===t.key&&(t.preventDefault(),t.stopPropagation(),this.rectangleNode.style.left=+this.rectangleNode.style.left.replace("px","")+1+"px",this.showPos(),this.updateTooltip(this.rectangleNode,this.tooltipSizeNode,this.tooltipPosNode),this.debounce(this.hidePos.bind(this),500)))}},{key:"updateTooltip",value:function(t,e,i){var s=t.getBoundingClientRect();e.innerHTML=s.width+"x"+s.height,this.rectangleNode.classList.contains("rectangle-ruler__rectangle_fix")?i.innerHTML=t.offsetLeft+"x"+t.offsetTop:i.innerHTML=s.left+"x"+s.top}},{key:"debounce",value:function(t,e){this.debId&&(clearTimeout(this.debId),this.debId=0),this.debId=setTimeout(t,e)}}]),t}(),d=new a,c=new l,h=[],u="",g={"AltLeft + KeyZ":function(){var t="dimensions";return u===t?(u="",d.stop(),!1):""===u?(u=t,!0):void 0},"AltLeft + KeyX":function(){return c.create(),!1},"AltLeft + KeyC":function(){return!1},"AltLeft + KeyS":function(){return d.fixPositionRails(),!1}},p={takeScreenshot:function(t,e,i){d.parseScreenshot(t.screenPng)}};chrome.runtime.onMessage.addListener((function(t,e,i){return t.action&&"function"==typeof p[t.action]&&p[t.action](t,e,i),!0})),window.addEventListener("keydown",(function(t){h.push(t.code),2===h.length&&"function"==typeof g[h.join(" + ")]&&g[h.join(" + ")]()&&chrome.runtime.sendMessage({optionActivate:u})})),window.addEventListener("keyup",(function(t){h=[]})),window.addEventListener("mousemove",(function(t){d.handleMouseMove(t)}));var f=0,v=!1;["scroll","mousewheel"].forEach((function(t){window.addEventListener(t,(function(e){var i,s;"mousewheel"===t&&(i=800,s=100,"dimensions"===u&&!1===v&&(v=!0,f&&clearTimeout(f),f=setTimeout((function(){g["AltLeft + KeyZ"](),setTimeout((function(){g["AltLeft + KeyZ"]()&&(chrome.runtime.sendMessage({optionActivate:u}),v=!1)}),s)}),i)))}),!1)}))}]);