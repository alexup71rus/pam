export default class Dimension {
    measureContainer = false;

    constructor() {
        this.image = new Image();
        this.canvas = document.createElement('canvas');
        this.colorHold = 8;
        this.imgData = [];
        this.x = 0;
        this.y = 0;
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
        this.screenWidth = 0;
        this.screenHeight = 0;
        this.debounceUpdate = {
            timer: 0,
            rangeX: 0,
            rangeY: 0,
        };
        this.midColor = {r:255, g:255, b:255, a:255};
        this.create();
    }

    create() {
        const html = `
        <div class="js-dimension" style="left: 0px; top: 0px;">
            <div class="x js-dimension__axis" style="left: 0px; width: 0px;"></div>
            <div class="y js-dimension__axis" style="top: 0px; height: 0px;"></div>
            <div class="js-dimension__tooltip"></div>
        </div>
        <div class="dimension__nocursor"></div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);

        this.nodes = {
            point: document.querySelector('.js-dimension'),
            x: document.querySelector('.js-dimension__axis.x'),
            y: document.querySelector('.js-dimension__axis.y'),
            tooltip: document.querySelector('.js-dimension__tooltip'),
        };
    }

    stop() {
        this.imgData = [];
        this.screenWidth = 0;
        this.screenHeight = 0;
        this.debounceUpdate = {
            timer: 0,
            rangeX: 0,
            rangeY: 0,
        };

        this.nodes.tooltip.innerHTML = '';
        this.nodes.point.classList.remove('on');
    }

    handleMouseMove(ev) {
        this.x = ev.clientX;
        this.y = ev.clientY;

        if (this.debounceUpdate.timer) {
            clearTimeout(this.debounceUpdate.timer);
            this.debounceUpdate.timer = 0;
        }

        if (this.imgData && this.imgData.length) {
            if (
                ev.clientX > (this.debounceUpdate.rangeX + 5) ||
                ev.clientX < (this.debounceUpdate.rangeX - 5) ||
                ev.clientY > (this.debounceUpdate.rangeY + 5) ||
                ev.clientY < (this.debounceUpdate.rangeY - 5)
            ) {
                this.debounceUpdate.timer = setTimeout(() => {
                    this.update();
                }, 5);
            } else {
                this.debounceUpdate.timer = setTimeout(() => {
                    this.update();
                }, 1);
            }
        }
    }

    update() {
        this.debounceUpdate.rangeX = this.x;
        this.debounceUpdate.rangeY = this.y;

        this.measureArea();
        this.draw(this.debounceUpdate.rangeX, this.debounceUpdate.rangeY);
    }

    measureArea() {
        let x = this.x;
        let y = this.y;

        this.midColor = this.getColorCursorPoint();
        this.parse(x, y, 'top');
        this.parse(x, y, 'bottom');
        this.parse(x, y, 'left');
        this.parse(x, y, 'right');
    }

    parse(x, y, type, i = 0, maxStep = 5000) {
        switch (type) {
            case 'top':
                y = y-1;
                break;
            case 'bottom':
                y = y+1;
                break;
            case 'left':
                x = x+1;
                break;
            case 'right':
                x = x-1;
                break;
        }

        const length = this.inBoundaries(x, y) ? ((y * this.screenWidth + x) * 4) : -1;

        if (length > -1) {
            const RGBA = {
                r: this.imgData[length], g: this.imgData[length + 1], b: this.imgData[length + 2], a: this.imgData[length + 3]
            };
            const isSame = (
                (RGBA.r < this.midColor.r + this.colorHold && RGBA.r > this.midColor.r - this.colorHold) &&
                (RGBA.g < this.midColor.g + this.colorHold && RGBA.g > this.midColor.g - this.colorHold) &&
                (RGBA.b < this.midColor.b + this.colorHold && RGBA.b > this.midColor.b - this.colorHold) &&
                (RGBA.a < this.midColor.a + this.colorHold && RGBA.a > this.midColor.a - this.colorHold)
            )

            if (isSame) {
                if (maxStep) {
                    this.parse(x, y, type, ++i, --maxStep);
                } else {
                }
            } else {
                this[type] = i;
            }
        } else {
            this[type] = i;
        }
    }

    draw(clientX, clientY) {
        let x = clientX;
        let y = clientY;
        const noCursorDiv = document.querySelector('.dimension__nocursor');

        if (clientX + 100 > window.innerWidth) {
            this.nodes.tooltip.classList.add('translateX');
        } else {
            this.nodes.tooltip.classList.remove('translateX');
        }

        if (clientY - 100 < 0) {
            this.nodes.tooltip.classList.add('translateY')
        } else {
            this.nodes.tooltip.classList.remove('translateY');
        }

        if (this.measureContainer) {
            const elemOverCursor = document.elementFromPoint(x, y);

            if (elemOverCursor) {
                if (noCursorDiv) {
                    noCursorDiv.classList.add('dimension__nocursor_hide');
                }

                const top = Math.ceil(elemOverCursor.getBoundingClientRect().top);
                const left = Math.ceil(elemOverCursor.getBoundingClientRect().left);
                const width = Math.ceil(elemOverCursor.getBoundingClientRect().width);
                const height = Math.ceil(elemOverCursor.getBoundingClientRect().height);

                this.top = this.top+1;
                this.left = this.left+1;
                this.nodes.point.classList.add('on');
                this.nodes.point.style.top = (top + (height/2)) + 'px';
                this.nodes.point.style.left = (left + (width/2)) + 'px';
                this.nodes.tooltip.innerHTML = `${width} x ${height}`;

                this.nodes.y.style.marginTop = -(height/2) + 'px';
                this.nodes.y.style.height = height + 'px';

                this.nodes.x.style.marginLeft = -(width/2) + 'px';
                this.nodes.x.style.width = width + 'px';
            } else {
                if (noCursorDiv) {
                    noCursorDiv.classList.remove('dimension__nocursor_hide');
                }

                this.top = this.top+1;
                this.left = this.left+1;
                this.nodes.point.classList.add('on');
                this.nodes.point.style.top = clientY + 'px';
                this.nodes.point.style.left = clientX + 'px';
                this.nodes.tooltip.innerHTML = `${this.left + this.right} x ${this.top + this.bottom}`;

                this.nodes.y.style.marginTop = '-' + this.top + 'px';
                this.nodes.y.style.height = this.top + this.bottom + 'px';

                this.nodes.x.style.marginLeft = '-' + this.right + 'px';
                this.nodes.x.style.width = this.left + this.right + 'px';
            }
        } else {
            if (noCursorDiv) {
                noCursorDiv.classList.remove('dimension__nocursor_hide');
            }

            this.top = this.top+1;
            this.left = this.left+1;
            this.nodes.point.classList.add('on');
            this.nodes.point.style.top = clientY + 'px';
            this.nodes.point.style.left = clientX + 'px';
            this.nodes.tooltip.innerHTML = `${this.left + this.right} x ${this.top + this.bottom}`;

            this.nodes.y.style.marginTop = '-' + this.top + 'px';
            this.nodes.y.style.height = this.top + this.bottom + 'px';

            this.nodes.x.style.marginLeft = '-' + this.right + 'px';
            this.nodes.x.style.width = this.left + this.right + 'px';
        }
    }

    fixPositionRails(isAllSet = false) { //
        const rectX = this.nodes.x.getBoundingClientRect();
        const rectY = this.nodes.y.getBoundingClientRect();

        if (isAllSet) {
            const railX = document.createElement('div');
            railX.classList.add('js-rail');
            railX.classList.add('rail-x');
            railX.style.width = this.nodes.x.style.width;
            railX.style.top = window.scrollY + rectX.top + 'px';
            railX.style.left = window.scrollX + rectX.left + 'px';
            railX.title = this.nodes.x.style.width;
            document.body.appendChild(railX);

            const railY = document.createElement('div');
            railY.classList.add('js-rail');
            railY.classList.add('rail-y');
            railY.style.height = this.nodes.y.style.height;
            railY.style.top = window.scrollY + rectY.top + 'px';
            railY.style.left = window.scrollX + rectY.left + 'px';
            railY.title = this.nodes.y.style.height;
            document.body.appendChild(railY);

        } else {
            const rail = document.createElement('div');
            rail.classList.add('js-rail');

            if (parseInt(this.nodes.x.style.width) < parseInt(this.nodes.y.style.height)) {
                rail.classList.add('rail-x');
                rail.style.width = this.nodes.x.style.width;
                rail.style.top = window.scrollY + rectX.top + 'px';
                rail.style.left = window.scrollX + rectX.left + 'px';
                rail.title = this.nodes.x.style.width;
            } else {
                rail.classList.add('rail-y');
                rail.style.height = this.nodes.y.style.height;
                rail.style.top = window.scrollY + rectY.top + 'px';
                rail.style.left = window.scrollX + rectY.left + 'px';
                rail.title = this.nodes.y.style.height;
            }

            document.body.appendChild(rail);
        }
    }

    clearRails() {
        const rails = document.querySelectorAll('.js-rail');

        if (rails) {
            rails.forEach(rail => {
                rail.remove();
            });
        }
    }

    showWindowWH() {
        const divContainer = document.createElement('div');

        divContainer.classList.add('js-window-wh');
        divContainer.classList.add('window-wh');
        divContainer.classList.add('window-wh_show');
        divContainer.innerHTML = window.innerWidth + 'x' + window.innerHeight;

        document.body.appendChild(divContainer);

        setTimeout(() => {
            if (divContainer) {
                divContainer.classList.remove('window-wh_show');
            }
        }, 800);
        setTimeout(() => {
            if (divContainer) {
                divContainer.remove();
            }
        }, 1000);
    }

    showDocumentWH() {
        const divContainer = document.createElement('div');
        const body = document.body;
        const html = document.documentElement;
        const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth,
            html.offsetWidth);
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight,
            html.offsetHeight);
        const windowWHs = document.querySelectorAll('.js-window-wh');

        if (windowWHs) {
            windowWHs.forEach(div => {
                div.remove();
            })
        }

        divContainer.classList.add('js-window-wh');
        divContainer.classList.add('window-wh');
        divContainer.classList.add('window-wh_show');
        divContainer.innerHTML = width + 'x' + height;

        document.body.appendChild(divContainer);

        setTimeout(() => {
            divContainer.classList.remove('window-wh_show');
        }, 1000);
        setTimeout(() => {
            divContainer.remove();
        }, 1200);
    }

    hideWHs() {
        const windowWHs = document.querySelectorAll('.js-window-wh');

        if (windowWHs) {
            windowWHs.forEach(div => {
                div.remove();
            })
        }
    }

    parseScreenshot(png, hold) {
        this.colorHold = hold;
        this.image.onload = this.loadImage(this.screenshotProcessed.bind(this));
        this.image.src = png;
    }

    inBoundaries(x, y){
        return (x >= 0 && x < this.screenWidth && y >= 0 && y < this.screenHeight);
    }

    getLightnessAt() { // получает позицию курсора в массиве
        return this.inBoundaries(this.x, this.y) ?(this.y * this.screenWidth + this.x) : -1;
    }

    screenshotProcessed(data) { // получает свойства скриншота и вызывает методы вычисления
        this.imgData = new Uint8ClampedArray(data.imgData);
        this.screenWidth = data.width;
        this.screenHeight = data.height;
    }

    getColorCursorPoint() { // получает цвет пикселя под курсором
        const length = this.getLightnessAt() * 4;
        const RGBA = {
            r: this.imgData[length], g: this.imgData[length + 1], b: this.imgData[length + 2], a: this.imgData[length + 3]
        };

        return RGBA;
    }

    loadImage(fn) {
        setTimeout(() => {
            if (window.innerWidth && window.innerHeight) {
                this.ctx = this.canvas.getContext('2d');

                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;

                this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);

                let imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;

                fn({
                    type: 'imgData',
                    imgData: imgData.buffer,
                    width: this.canvas.width,
                    height: this.canvas.height
                });

                this.update();
            }
        }, 100)
    }
}