export default class Dimension {
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
        this.midColor = this.getColorCursorPoint();
        this.parse(this.x, this.y, 'top');
        this.parse(this.x, this.y, 'bottom');
        this.parse(this.x, this.y, 'left');
        this.parse(this.x, this.y, 'right');
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

        this.drawLines();
    }

    drawLines() { //
    }

    parseScreenshot(png) {
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