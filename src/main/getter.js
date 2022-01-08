////////////////////////////////////////
class Devi {
    constructor(data) {
        this.norm = typeof (data) == 'object' ?
            data.length === 0 || data.length === undefined ?
                [data] : data : data.indexOf('<') > -1 ?
                [document.createElement(data.replace(/[></]/mig, ''))] : document.querySelectorAll(data);
    }
    /////////////////////////////////////////
    get length() {
        return this.norm.length;
    }
    ////////////////////////////////////
    addClass(x) {
        x.split(' ').forEach(c => {
            this.norm.forEach(e => {
                e.classList.add(c);
            });
        });
        return this;
    }
    ////////////////////////////////////
    removeClass(x) {
        x.split(' ').forEach(c => {
            this.norm.forEach(e => {
                e.classList.remove(c);
            });
        });
        return this;
    }
    hasClass(x) {
        if (x !== undefined) {
            return this.norm[0].classList.contains(x);
        }
    }
    ////////////////////////////////////
    css(x, z) {
        if (z !== undefined) {
            this.norm.forEach(e => {
                e.style[x] = z;
            });
            return this;
        } else {
            if (typeof x === 'string') {
                return this.norm[0].style[x];
            }
            else {
                if (x === undefined) {
                    return this.norm[0].style
                } else {
                    this.norm.forEach(e => {
                        for (let key in x) {
                            e.style[key] = x[key];
                        }
                    });
                    return this;
                }
            }
        }
    }
    ////////////////////////////////////
    attr(x, z) {
        if (z !== undefined) {
            this.norm.forEach(e => {
                e.setAttribute(x, z);
            });
            return this;
        } else {
            return this.norm[0].getAttribute(x);
        }
    }
    removeAttr(x) {
        x.split(' ').forEach(c => {
            this.norm.forEach(e => {
                e.removeAttribute(c);
            });
        });
        return this;
    }
    hasAttr(x) {
        if (x !== undefined) {
            return this.one.hasAttribute(x);
        }
    }
    ////////////////////////////////////////////////////
    width(x) {
        if (x !== undefined) {
            this.norm.forEach(e => {
                e.style['width'] = `${parseFloat(x)}px`;
            });
            return this;
        } else {
            return this.norm[0].clientWidth;
        }
    }
    ////////////////////////////////////////////////////
    height(x) {
        if (x !== undefined) {
            this.norm.forEach(e => {
                e.style['height'] = `${parseFloat(x)}px`;
            });
            return this;
        } else {
            return this.norm[0].clientHeight;
        }
    }
    ////////////////////////////////////////////////////
    client() {
        const rect = this.norm[0].getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            right: rect.right + window.scrollX,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
        };
    }
    ///////////////////////////////////////////////////
    get heightOff() {
        var parent = this.norm[0].parentNode;
        var tempId = 'tmp-id';
        var elem = this.norm[0].cloneNode(true);
        elem.style = `position: absolute;height: auto;transition:0`;
        elem.id = tempId;
        parent.appendChild(elem);
        elem.style = `left: -100000em;display: flex;`;
        var h = document.getElementById(tempId).clientHeight;
        document.getElementById(tempId).remove()
        return h;
    }
}
////////////////////////////////////
export default (data) => { return new Devi(data) };


/*

class Devi {
    constructor(data) {
        this.elem = typeof (data) === 'object' ?
            data.length === 0 || data.length === undefined ?
                [data] : data : document.querySelectorAll(data);
    }
    ////////////////////////////////////
    css(x, z) {
        if (z !== undefined) {
            this.elem.forEach(e => {
                e.style[x] = z;
            });
            return this;
        } else {
            if (typeof x === 'string') {
                return this.elem[0].style[x];
            }
            else {
                if (x === undefined) {
                    return this.elem[0].style
                } else {
                    this.elem.forEach(e => {
                        for (let key in x) {
                            e.style[key] = x[key];
                        }
                    });
                    return this;
                }
            }
        }
    }
    ////////////////////////////////////////////////////
    attr(x, z) {
        if (z !== undefined) {
            this.elem.forEach(e => {
                e.setAttribute(x, z);
            });
            return this;
        } else {
            return this.elem[0].getAttribute(x);
        }
    }
    ////////////////////////////////////////////////////
    on(x, call, cond = false) {
        x.split(' ').forEach((e) => {
            this.elem.forEach((z) => {
                if (document.addEventListener) z.addEventListener(e, call, cond);
                else if (document.attachEvent) z.attachEvent(`on${e}`, call, cond);
            });
        });
        return this;
    }
    ////////////////////////////////////////////////////
    width(x) {
        if (x !== undefined) {
            this.elem.forEach(e => {
                e.style['width'] = `${parseFloat(x)}px`;
            });
            return this;
        } else {
            return this.elem[0].clientWidth;
        }
    }
    ////////////////////////////////////////////////////
    height(x) {
        if (x !== undefined) {
            this.elem.forEach(e => {
                e.style['height'] = `${parseFloat(x)}px`;
            });
            return this;
        } else {
            return this.elem[0].clientHeight;
        }
    }
    ////////////////////////////////////////////////////
    client() {
        const rect = this.elem[0].getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            right: rect.right + window.scrollX,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
        };
    }
    ////////////////////////////////////////////
    detectPhone() {
        let expressMop = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|ipad|playbook|silk|Android|webOS|iPhone|iPod|IEMobile|Mobi/i);
        return expressMop.test(navigator.userAgent) || expressMop.test(navigator.platform);
    }
    ////////////////////////////////////////////
    drag(target = {}, {
        drag = () => { },
        down = () => { },
        up = () => { }
    }) {
        ////////////////////////////////////////
        let $ = devi(target);
        let beginDrag = false;
        let starter = 0;
        let call = (e) => {
            let tag = this.elem[0].tagName;
            let classs = this.elem[0].className === undefined ||
                this.elem[0].className === null ||
                this.elem[0].className === "" ? "" : this.elem[0].className;
            let closet = `${tag.toLowerCase()}.${classs.split(' ').join('.')}`;
            //console.log("Devi -> call -> closet", closet)
            let target = (e.targetTouches) ?
                document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
                : e.target;
            //devi(target).elem[0].closest(this.elem[0])
            //console.log("Devi -> call -> target", target.closest(closet), closet)
            //if (target.closest(closet)) {
            let info = {
                event: e,
                $,
                x: (e.targetTouches) ? e.targetTouches[0].clientX - this.client().left : e.clientX - this.client().left,
                y: (e.targetTouches) ? e.targetTouches[0].clientY - this.client().top : e.clientY - this.client().top,
                width: this.width(),
                dir: 1, dist: 0,
                height: this.height(),
                target
            }
            if (e.type === 'mousedown') {
                beginDrag = true;
                starter = info.x;
                down(info);
            }
            ////////////////////////////////////
            if (e.type === 'mousemove' && beginDrag && info.x <= info.width && info.x >= 0) {
                if (starter < info.x) info.dir = 1;
                else info.dir = -1;
                info.dist = Math.abs(info.x - starter);
                drag(info);
                starter = info.x;
            }
            if (e.type === 'mouseup') {
                beginDrag = false;
                up(info);
            }
            //}
            // // //////////////////////////////
            //if (e.type === 'mouseup') beginDrag = false, up(e);
        };
        ////////////////////////////////////////
        this.on('mousedown mousemove mouseup', call);
        //devi(window).on('mousedown mousemove mouseup', call);
    }
}

const devi = (data) => new Devi(data);

*/