export default class RectangleRuler {
    constructor() {
        this.action = '';
        this.resizeSide = '';
        this.rect = {};
        this.rectangleNode = false;
        this.tooltipSizeNode = false;
        this.tooltipPosNode = false;

        this.bind();
    }

    create() {
        const html = `
        <div class="js-rectangle-ruler rectangle-ruler" style="">
            <div class="js-rectangle rectangle-ruler__rectangle ui-resizable" data-action="move">
                <div class="rectangle-ruler__nav">
                    <div class="js-rectangle-close rectangle-close" data-action="close"></div>
                    <div class="js-rectangle-pin rectangle-pin" data-action="pin"></div>
                </div>
                <div class="rectangle-ruler__tooltip" data-action="move">
                    <div class="js-rectangle-tooltip-size rectangle-tooltip__size tooltip__bottom" data-action="move">500x300</div>
                    <div class="js-rectangle-tooltip-pos rectangle-tooltip__pos tooltip__bottom hide" data-action="move">500x300</div>
                </div>
                <div class="ui-resizable-n" data-action="resize" data-resize="n"></div>
                <div class="ui-resizable-w" data-action="resize" data-resize="w"></div>
                <div class="ui-resizable-s" data-action="resize" data-resize="s"></div>
                <div class="ui-resizable-e" data-action="resize" data-resize="e"></div>
                <div class="ui-resizable-se" data-action="resize" data-resize="se"></div>
            </div>
            <div class="rectangle-ruler__no-cursor"></div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
    }

    getRuler(target, selector) {
        let container = false;

        if (target.classList.contains(selector)) {
            return target;
        } else {
            const ruler = target.closest('.js-rectangle-ruler');

            if (selector === 'js-rectangle-ruler') {
                return ruler;
            } else if (ruler) {
                const result =  ruler.querySelector('.' + selector);

                if (result) {
                    return result;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    bind() {
        document.addEventListener('mousedown', this.mouseDown.bind(this))
        document.addEventListener('mouseup', this.mouseUp.bind(this))
        document.addEventListener('mousemove', this.mouseMove.bind(this))
        document.addEventListener('keydown', this.keyDown.bind(this))
    }

    mouseDown(ev) {
        this.rulerNode = this.getRuler(ev.target, 'js-rectangle-ruler');

        if (this.rulerNode) {
            this.rectangleNode = this.rulerNode.querySelector('.js-rectangle');
            this.tooltipSizeNode = this.rulerNode.querySelector('.js-rectangle-tooltip-size');
            this.tooltipPosNode = this.rulerNode.querySelector('.js-rectangle-tooltip-pos');
            this.action = ev.target.dataset?.action;

            if (this.action && this.rectangleNode && this.tooltipSizeNode && this.tooltipPosNode) {
                if (this.action === 'resize') {
                    const resize = ev.target.dataset?.resize;

                    this.rect = {
                        startLeft: this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix')
                            ? window.scrollX + this.rectangleNode.getBoundingClientRect().left
                            : this.rectangleNode.getBoundingClientRect().left,
                        startTop: this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix')
                            ? window.scrollY + this.rectangleNode.getBoundingClientRect().top
                            : this.rectangleNode.getBoundingClientRect().top,
                        shiftX: window.scrollX + (ev.clientX - this.rectangleNode.getBoundingClientRect().left),
                        shiftY: window.scrollY + (ev.clientY - this.rectangleNode.getBoundingClientRect().top),
                        startX: ev.clientX,
                        startY: ev.clientY,
                        shiftWidth: this.rectangleNode.getBoundingClientRect().width,
                        shiftHeight: this.rectangleNode.getBoundingClientRect().height,
                    };
                    this.resizeSide = resize ? resize : '';
                } else if (this.action === 'move') {
                    this.rect = {
                        startLeft: this.rectangleNode.getBoundingClientRect().left,
                        startTop: this.rectangleNode.getBoundingClientRect().top,
                        shiftX: this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix')
                            ? (ev.clientX - this.rectangleNode.getBoundingClientRect().left)
                            : window.scrollX + (ev.clientX - this.rectangleNode.getBoundingClientRect().left),
                        shiftY: this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix')
                            ? (ev.clientY - this.rectangleNode.getBoundingClientRect().top)
                            : window.scrollY + (ev.clientY - this.rectangleNode.getBoundingClientRect().top),
                        startX: ev.clientX,
                        startY: ev.clientY,
                        shiftWidth: this.rectangleNode.getBoundingClientRect().width,
                        shiftHeight: this.rectangleNode.getBoundingClientRect().height,
                    };

                    this.debounce(this.showPos.bind(this), 0);
                }
            }
        } else {
            this.rectangleNode = false;
            this.tooltipSizeNode = false;
            this.tooltipPosNode = false;
            this.action = '';
            this.resizeSide = '';
            this.offsetY = 0;
            this.offsetX = 0;
        }
    }

    mouseUp(ev) {
        if (this.action && this.rulerNode) {
            if (this.action === 'close') {
                if (this.rulerNode) {
                    this.rulerNode.remove();
                }
            } else if (this.action === 'pin') {
                const btn = this.rectangleNode.querySelector('.js-rectangle-pin');

                if (btn) {
                    if (btn.classList.contains('active')) {
                        const y = window.scrollY + (ev.clientY - this.rectangleNode.getBoundingClientRect().top);
                        const x = window.scrollX + (ev.clientX - this.rectangleNode.getBoundingClientRect().left);
                        this.rectangleNode.style.top = (ev.pageY - y) + 'px';
                        this.rectangleNode.style.left = (ev.pageX - x) + 'px';

                        btn.classList.remove('active');
                        this.rectangleNode.classList.remove('rectangle-ruler__rectangle_fix');
                    } else {
                        const y = (ev.clientY - this.rectangleNode.getBoundingClientRect().top);
                        const x = (ev.clientX - this.rectangleNode.getBoundingClientRect().left);
                        this.rectangleNode.style.top = (ev.pageY - y) + 'px';
                        this.rectangleNode.style.left = (ev.pageX - x) + 'px';

                        btn.classList.add('active');
                        this.rectangleNode.classList.add('rectangle-ruler__rectangle_fix');
                    }
                } else {
                    debugger;
                }
            } else {
                this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);

                this.debounce(this.hidePos.bind(this), 1000);
            }
        }

        this.action = '';
        this.resizeSide = '';
        this.offsetY = 0;
        this.offsetX = 0;
    }

    showPos() {
        this.tooltipPosNode.classList.remove('hide');
        this.tooltipSizeNode.classList.add('hide');
    }

    hidePos() {
        this.tooltipPosNode.classList.add('hide');
        this.tooltipSizeNode.classList.remove('hide');
    }

    mouseMove(ev) {
        if (this.action === 'move') {
            const rect = this.rectangleNode.getBoundingClientRect();

            this.rectangleNode.style.top = (ev.pageY - this.rect.shiftY) + 'px';
            this.rectangleNode.style.left = (ev.pageX - this.rect.shiftX) + 'px';

            this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
        } else if (this.action === 'resize') {
            if (this.resizeSide === 'se') {
                this.rectangleNode.style.width = (this.rect.shiftWidth + ev.clientX - this.rect.startX) + 'px';
                this.rectangleNode.style.height = (this.rect.shiftHeight + ev.clientY - this.rect.startY) + 'px';
            } else if (this.resizeSide === 'e') {
                this.rectangleNode.style.width = (this.rect.shiftWidth + ev.clientX - this.rect.startX) + 'px';
            } else if (this.resizeSide === 's') {
                this.rectangleNode.style.height = (this.rect.shiftHeight + ev.clientY - this.rect.startY) + 'px';
            } else if (this.resizeSide === 'w') {
                const newLeft = (ev.pageX - this.rect.shiftX);
                this.rectangleNode.style.left = newLeft + 'px';
                this.rectangleNode.style.width = (this.rect.shiftWidth + (this.rect.startLeft - newLeft)) + 'px';
            } else if (this.resizeSide === 'n') {
                const newTop = (this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix'))
                    ? window.scrollY + (ev.pageY - this.rect.shiftY)
                    : (ev.pageY - this.rect.shiftY);
                console.log(window.scrollY, newTop)
                this.rectangleNode.style.top = newTop + 'px';
                this.rectangleNode.style.height = (this.rect.shiftHeight + (this.rect.startTop - newTop)) + 'px';
            }

            this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
        }
    }

    keyDown(ev) {
        if (this.rectangleNode) {
            if (ev.key === 'ArrowUp') {
                ev.preventDefault();
                ev.stopPropagation();
                this.rectangleNode.style.top = +this.rectangleNode.style.top
                    .replace('px', '') - 1 + 'px';
                this.showPos();
                this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
                this.debounce(this.hidePos.bind(this), 500);
            } else if (ev.key === 'ArrowDown') {
                ev.preventDefault();
                ev.stopPropagation();
                this.rectangleNode.style.top = +this.rectangleNode.style.top
                    .replace('px', '') + 1 + 'px';
                this.showPos();
                this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
                this.debounce(this.hidePos.bind(this), 500);
            } else if (ev.key === 'ArrowLeft') {
                ev.preventDefault();
                ev.stopPropagation();
                this.rectangleNode.style.left = +this.rectangleNode.style.left
                    .replace('px', '') - 1 + 'px';
                this.showPos();
                this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
                this.debounce(this.hidePos.bind(this), 500);
            } else if (ev.key === 'ArrowRight') {
                ev.preventDefault();
                ev.stopPropagation();
                this.rectangleNode.style.left = +this.rectangleNode.style.left
                    .replace('px', '') + 1 + 'px';
                this.showPos();
                this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
                this.debounce(this.hidePos.bind(this), 500);
            }
        }
    }

    updateTooltip(rectangle, tooltipSize, tooltipPos) {
        const rect = rectangle.getBoundingClientRect();

        tooltipSize.innerHTML = rect.width + 'x' + rect.height;

        if (this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix')) {
            tooltipPos.innerHTML = rectangle.offsetLeft + 'x' + rectangle.offsetTop;
        } else {
            tooltipPos.innerHTML = rect.left + 'x' + rect.top;
        }
    }

    debounce(func, delay) {
        if (this.debId) {
            clearTimeout(this.debId);
            this.debId = 0;
        }

        this.debId = setTimeout(func, delay);
    }
}