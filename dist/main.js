/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(arr) {\n        this.arr = arr;\n    }\n\n    html(arg) {\n        if (typeof arg == 'undefined') {\n            return this.arr[0].innerHTML;\n        } else {\n            this.arr.forEach(el => {\n                el.innerHTML = arg;\n            });\n        };\n    }\n\n    empty () {\n        this.html(\"\");\n    }  \n    \n\n    append(...args) {\n        this.arr.forEach(outer => {\n            args.forEach(inner  => {\n                if (inner instanceof HTMLElement) {\n                    outer.innerHTML += inner.outerHTML;\n                } else if (inner instanceof DOMNodeCollection){\n                    inner.arr.forEach(finalChild => {\n                        outer.innerHTML += finalChild.outerHTML;\n                    });\n                } else if (typeof inner == \"string\") {\n                    outer.innerHTML += inner;\n                }\n            });\n        })\n    }\n\n    attr(attributeName, value) {\n        if (typeof value == 'undefined') {\n            let result = this.arr[0].getAttribute(attributeName);\n            return result;\n        } else {\n            this.arr.forEach ( (ele) => {\n                ele.setAttribute(attributeName, value);\n            })\n        }\n    }\n\n    addClass(className) {\n        this.arr.forEach((ele) => {\n            let currClasses = ele.getAttribute('class') || '';\n            currClasses += ` ${className}`;\n            ele.setAttribute('class', currClasses.trim());\n        })\n    }\n\n    removeClass(className) {\n        this.arr.forEach((ele) => {\n            let currClasses = ele.getAttribute('class');\n            let currClassesArr = currClasses.split(' ');\n            console.log(`currClassesArr = ${currClassesArr}`)\n            let newArr = [];\n            newArr = currClassesArr.filter(ele => ele !== className);\n            console.log(`newArr = ${newArr}`)\n            let newClasses = newArr.join(' ')\n            if (newClasses == '') {\n                ele.removeAttribute('class');\n            } else {\n            ele.setAttribute('class', newClasses.trim());\n            }\n        })\n    }\n\n    children() {\n        let allChildren = [];\n        this.arr.forEach(ele => {\n            let eleChildren = ele.children;\n            allChildren = allChildren.concat(Array.prototype.slice.call(eleChildren));\n        })\n        return new DOMNodeCollection(allChildren);\n    }\n\n    parent(){\n        let allParents = [];\n        this.arr.forEach(ele => {\n            let eleParent = ele.parentElement;\n            if (!allParents.includes(eleParent)){\n                allParents.push(eleParent);\n            }\n        })\n        return new DOMNodeCollection(allParents)\n    }\n\n    find(selector) {\n        let retArr = []\n        this.arr.forEach(ele => {\n            let selected = ele.querySelectorAll(selector)\n            retArr = retArr.concat(Array.prototype.slice.call(selected));\n        })\n        return new DOMNodeCollection(retArr);\n    }\n\n    remove() {\n        this.arr.forEach(ele => {\n            ele.remove();\n        });\n    }\n\n    on(type, callback) {\n        this.arr.forEach( (ele) => {\n            ele.addEventListener(type, callback);\n            ele[`callback:${type}`] = callback;\n        })\n    }\n\n    off(type) {\n        this.arr.forEach((ele) => {\n            let func = ele[`callback:${type}`];\n            ele.removeEventListener(type, func);\n            ele[`callback:${type}`] = null;\n        })\n        \n    }\n}\n\nmodule.exports = DOMNodeCollection\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\nlet toDoQueue = [];\n\nwindow.$l = function(arg1) {\n    let result;\n    if (typeof arg1 == 'string') {\n        result = Array.prototype.slice.call(document.querySelectorAll(arg1));\n    } else if(arg1 instanceof HTMLElement) {\n        result = [arg1];\n    } else if (typeof arg1 == 'function') {\n        if (document.readyState === 'complete') {\n            arg1();\n        } else{\n        toDoQueue.push(arg1);\n        }\n    }\n    return new DOMNodeCollection(result);\n} \n\ndocument.onreadystatechange = () => {\n    if (document.readyState === 'complete') {\n        toDoQueue.forEach((func) => {\n            func();\n        })\n    }\n};\n\n// let stateCheck = setInterval(() => {\n//     if (document.readyState === 'complete') {\n//         clearInterval(stateCheck)\n//         toDoQueue.forEach((func) => {\n//             func();\n//         })\n//     }\n// }, 100);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;