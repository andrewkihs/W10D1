const DOMNodeCollection = require('./dom_node_collection');
let toDoQueue = [];

window.$l = function(arg1) {
    let result;
    if (typeof arg1 == 'string') {
        result = Array.prototype.slice.call(document.querySelectorAll(arg1));
    } else if(arg1 instanceof HTMLElement) {
        result = [arg1];
    } else if (typeof arg1 == 'function') {
        if (document.readyState === 'complete') {
            arg1();
        } else{
        toDoQueue.push(arg1);
        }
    }
    return new DOMNodeCollection(result);
} 

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        toDoQueue.forEach((func) => {
            func();
        })
    }
};

// let stateCheck = setInterval(() => {
//     if (document.readyState === 'complete') {
//         clearInterval(stateCheck)
//         toDoQueue.forEach((func) => {
//             func();
//         })
//     }
// }, 100);
