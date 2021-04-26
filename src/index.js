const DOMNodeCollection = require('./dom_node_collection');

// console.log(DOMNodeCollection.prototype.html)
// console.log("test index.js")
window.$l = function(arg1) {
    let result;
    if (typeof arg1 == 'string') {
        result = Array.prototype.slice.call(document.querySelectorAll(arg1));
    } else if(arg1 instanceof HTMLElement) {
        result = [arg1];
    }
    return new DOMNodeCollection(result);
} 
