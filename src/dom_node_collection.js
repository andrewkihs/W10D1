class DOMNodeCollection {
    constructor(arr) {
        this.arr = arr;
    }

    html(arg) {
        if (typeof arg == 'undefined') {
            return this.arr[0].innerHTML;
        } else {
            this.arr.forEach(el => {
                el.innerHTML = arg;
            });
        };
    }

    empty () {
        this.html("");
    }  
    

    append(...args) {
        //works for string

        this.arr.forEach(outer => {
            args.forEach(inner  => {
                if (inner instanceof HTMLElement) {
                    outer.innerHTML += inner.outerHTML;
                } else if (inner instanceof DOMNodeCollection){
                    inner.arr.forEach(finalChild => {
                        outer.innerHTML += finalChild.outerHTML;
                    });
                } else if (typeof inner == "string") {
                    outer.innerHTML += inner;
                }
            });
        })
    }

    attr(attributeName, value) {
        if (typeof value == 'undefined') {
            //getter
            let result = this.arr[0].getAttribute(attributeName);
            return result;
        } else {
            this.arr.forEach ( (ele) => {
                ele.setAttribute(attributeName, value);
            })
        }
    }

    addClass(className) {
        this.arr.forEach((ele) => {
            let currClasses = ele.getAttribute('class') || '';
            currClasses += ` ${className}`;
            ele.setAttribute('class', currClasses.trim());
        })
    }

    removeClass(className) {
        this.arr.forEach((ele) => {
            let currClasses = ele.getAttribute('class');
            let currClassesArr = currClasses.split(' ');
            console.log(`currClassesArr = ${currClassesArr}`)
            let newArr = [];
            newArr = currClassesArr.filter(ele => ele !== className);
            console.log(`newArr = ${newArr}`)
            let newClasses = newArr.join(' ')
            if (newClasses == '') {
                ele.removeAttribute('class');
            } else {
            ele.setAttribute('class', newClasses.trim());
            }
        })
    }
}

module.exports = DOMNodeCollection