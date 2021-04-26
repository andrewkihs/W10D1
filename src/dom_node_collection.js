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
}

module.exports = DOMNodeCollection