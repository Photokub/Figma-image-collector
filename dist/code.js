/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/Error/Error.ts":
/*!***********************************!*\
  !*** ./components/Error/Error.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateErrorMessage": () => (/* binding */ CreateErrorMessage)
/* harmony export */ });
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text/Text */ "./components/Text/Text.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CreateErrorMessage extends _Text_Text__WEBPACK_IMPORTED_MODULE_0__.CreateText {
    createErrorMessage(defaultErrMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorText = yield this.createText();
            errorText.resize(395, 320);
            errorText.x = 0;
            errorText.y = 0;
            errorText.characters = ('ERROR:' + '\n' + (defaultErrMessage));
            errorText.fontSize = 24;
            errorText.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
            return errorText;
        });
    }
}


/***/ }),

/***/ "./components/Frame/Frame.ts":
/*!***********************************!*\
  !*** ./components/Frame/Frame.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateFrame": () => (/* binding */ CreateFrame)
/* harmony export */ });
/* harmony import */ var _utils_positionSetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/positionSetter */ "./utils/positionSetter.ts");

const setX = (0,_utils_positionSetter__WEBPACK_IMPORTED_MODULE_0__.setXPos)();
const setY = (0,_utils_positionSetter__WEBPACK_IMPORTED_MODULE_0__.setYPos)();
class CreateFrame {
    createFrame(filling, namesArray, linksArray, pluArray) {
        const frame = figma.createFrame();
        frame.x = setX();
        frame.y = setY();
        frame.resize(475, 400);
        let currentIndex = linksArray.indexOf(namesArray);
        let currentFrameName = pluArray[currentIndex];
        if (typeof currentFrameName === "string") {
            frame.name = currentFrameName;
        }
        frame.layoutMode = 'HORIZONTAL';
        frame.horizontalPadding = 40;
        frame.counterAxisAlignItems = 'CENTER';
        frame.appendChild(filling);
    }
}


/***/ }),

/***/ "./components/Image/Image.ts":
/*!***********************************!*\
  !*** ./components/Image/Image.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateImage": () => (/* binding */ CreateImage)
/* harmony export */ });
/* harmony import */ var _Rectangle_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Rectangle/Rectangle */ "./components/Rectangle/Rectangle.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CreateImage extends _Rectangle_Rectangle__WEBPACK_IMPORTED_MODULE_0__.CreateRectangle {
    createImageAsync(imageData) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield figma.createImageAsync(imageData);
            return { hash: image.hash };
        });
    }
}


/***/ }),

/***/ "./components/Rectangle/Rectangle.ts":
/*!*******************************************!*\
  !*** ./components/Rectangle/Rectangle.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateRectangle": () => (/* binding */ CreateRectangle)
/* harmony export */ });
class CreateRectangle {
    createRectangle(imageData) {
        const rect = figma.createRectangle();
        if (imageData) {
            rect.resize(395, 320);
            rect.fills = [{ type: 'IMAGE', imageHash: imageData.hash, scaleMode: 'FIT' }];
        }
        return rect;
    }
}


/***/ }),

/***/ "./components/Text/Text.ts":
/*!*********************************!*\
  !*** ./components/Text/Text.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateText": () => (/* binding */ CreateText)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CreateText {
    createText() {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield figma.createText();
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            return text;
        });
    }
}


/***/ }),

/***/ "./utils/counter.ts":
/*!**************************!*\
  !*** ./utils/counter.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positionCounter": () => (/* binding */ positionCounter)
/* harmony export */ });
const itemsPerRow = 10;
function positionCounter() {
    function counter() {
        if (counter.value == itemsPerRow) {
            return counter.value = 1;
        }
        else {
            return counter.value++;
        }
    }
    counter.value = 0;
    return counter;
}


/***/ }),

/***/ "./utils/positionSetter.ts":
/*!*********************************!*\
  !*** ./utils/positionSetter.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleXCounter": () => (/* binding */ handleXCounter),
/* harmony export */   "handleYCounter": () => (/* binding */ handleYCounter),
/* harmony export */   "setXPos": () => (/* binding */ setXPos),
/* harmony export */   "setYPos": () => (/* binding */ setYPos)
/* harmony export */ });
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ "./utils/counter.ts");

const itemsPerRow = 10;
let handleXCounter = (0,_counter__WEBPACK_IMPORTED_MODULE_0__.positionCounter)();
let handleYCounter = (0,_counter__WEBPACK_IMPORTED_MODULE_0__.positionCounter)();
function setXPos() {
    let step = 525;
    let xPos = 0;
    return function () {
        const position = handleXCounter.value;
        if (position >= itemsPerRow) {
            return xPos = 0;
        }
        else {
            return xPos = xPos + step;
        }
    };
}
function setYPos() {
    let step = 450;
    let yPos = 0;
    return function () {
        const position = handleYCounter.value;
        if (position >= itemsPerRow) {
            return yPos = yPos + step;
        }
        else {
            return yPos;
        }
    };
}



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Frame_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Frame/Frame */ "./components/Frame/Frame.ts");
/* harmony import */ var _components_Rectangle_Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Rectangle/Rectangle */ "./components/Rectangle/Rectangle.ts");
/* harmony import */ var _components_Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Image/Image */ "./components/Image/Image.ts");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Error/Error */ "./components/Error/Error.ts");
/* harmony import */ var _components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Text/Text */ "./components/Text/Text.ts");
/* harmony import */ var _utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/positionSetter */ "./utils/positionSetter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






figma.showUI(__html__, {
    width: 500,
    height: 360,
});
figma.ui.onmessage = pluginMessage => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        //const app = pluginMessage.app;
        //const preloader = pluginMessage.preloader;
        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr = [];
        /////////////синхронный запрос///////////////
        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);
        // function showPreloader() {
        //     preloader()
        //     //preloader.classList.add('preloader__visible')
        //     //document.body.classList.add('loaded');
        // }
        //await showPreloader()
        //console.log(app)
        // function preloader(): string {
        //     document.body.innerHTML = '<p>LOADING</p>'
        //     // return `
        //     // <p>LOADING</p>>
        //     // `
        // }
        // function preloader(){
        //     pluginMessage.document.body.innerHTML = '<p>LOADING</p>'
        //     // return `
        //     // <p>LOADING</p>>
        //     // `
        // }
        //
        // preloader()
        for (let elem of linksArray) {
            if (typeof elem === "string") {
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${_utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__.handleXCounter.value}`);
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${_utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__.handleYCounter.value}`);
                (0,_utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__.handleXCounter)();
                (0,_utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__.handleYCounter)();
                const newFrame = new _components_Frame_Frame__WEBPACK_IMPORTED_MODULE_0__.CreateFrame;
                try {
                    const newRectangle = new _components_Rectangle_Rectangle__WEBPACK_IMPORTED_MODULE_1__.CreateRectangle;
                    const newImage = new _components_Image_Image__WEBPACK_IMPORTED_MODULE_2__.CreateImage;
                    const image = yield newImage.createImageAsync(elem);
                    const rectangleWithImage = newRectangle.createRectangle(image);
                    newFrame.createFrame(rectangleWithImage, elem, linksArray, pluArray);
                }
                catch (err) {
                    errorsArr.push(err);
                    const newError = new _components_Error_Error__WEBPACK_IMPORTED_MODULE_3__.CreateErrorMessage;
                    const error = yield newError.createErrorMessage(err);
                    newFrame.createFrame(error, elem, linksArray, pluArray);
                }
            }
        }
        const newLog = new _components_Text_Text__WEBPACK_IMPORTED_MODULE_4__.CreateText();
        const log = yield newLog.createText();
        log.x = 50;
        log.y = -50;
        log.characters = (`Количество обработанных имён: ${pluArray.length}. \nКоличество обработанных ссылок: ${linksArray.length}. \nКоличество ошибок: ${errorsArr.length}`);
        log.fontSize = 18;
        log.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
        yield figma.closePlugin();
    }))();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHVFQUFvQixDQUFDO0FBQ3pFLG9EQUFvRCx1RUFBb0IsQ0FBQztBQUN6RSxnQkFBZ0IscUVBQWM7QUFDOUIsZ0JBQWdCLHFFQUFjO0FBQzlCLHFDQUFxQyxnRUFBVztBQUNoRDtBQUNBLDZDQUE2Qyw0RUFBZTtBQUM1RCx5Q0FBeUMsZ0VBQVc7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVFQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0Isc0NBQXNDLGtCQUFrQix5QkFBeUIsaUJBQWlCO0FBQzdLO0FBQ0EsdUJBQXVCLHdCQUF3QixvQkFBb0I7QUFDbkU7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9jb21wb25lbnRzL0Vycm9yL0Vycm9yLnRzIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci8uL2NvbXBvbmVudHMvRnJhbWUvRnJhbWUudHMiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yLy4vY29tcG9uZW50cy9JbWFnZS9JbWFnZS50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9jb21wb25lbnRzL1JlY3RhbmdsZS9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yLy4vY29tcG9uZW50cy9UZXh0L1RleHQudHMiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yLy4vdXRpbHMvY291bnRlci50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi91dGlscy9wb3NpdGlvblNldHRlci50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IENyZWF0ZVRleHQgfSBmcm9tIFwiLi4vVGV4dC9UZXh0XCI7XHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDcmVhdGVUZXh0IHtcclxuICAgIGNyZWF0ZUVycm9yTWVzc2FnZShkZWZhdWx0RXJyTWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IHlpZWxkIHRoaXMuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgICAgICBlcnJvclRleHQucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgZXJyb3JUZXh0LnggPSAwO1xyXG4gICAgICAgICAgICBlcnJvclRleHQueSA9IDA7XHJcbiAgICAgICAgICAgIGVycm9yVGV4dC5jaGFyYWN0ZXJzID0gKCdFUlJPUjonICsgJ1xcbicgKyAoZGVmYXVsdEVyck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgZXJyb3JUZXh0LmZvbnRTaXplID0gMjQ7XHJcbiAgICAgICAgICAgIGVycm9yVGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yVGV4dDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZXRZUG9zLCBzZXRYUG9zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc2l0aW9uU2V0dGVyXCI7XHJcbmNvbnN0IHNldFggPSBzZXRYUG9zKCk7XHJcbmNvbnN0IHNldFkgPSBzZXRZUG9zKCk7XHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVGcmFtZSB7XHJcbiAgICBjcmVhdGVGcmFtZShmaWxsaW5nLCBuYW1lc0FycmF5LCBsaW5rc0FycmF5LCBwbHVBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgIGZyYW1lLnkgPSBzZXRZKCk7XHJcbiAgICAgICAgZnJhbWUucmVzaXplKDQ3NSwgNDAwKTtcclxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKG5hbWVzQXJyYXkpO1xyXG4gICAgICAgIGxldCBjdXJyZW50RnJhbWVOYW1lID0gcGx1QXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCc7XHJcbiAgICAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcclxuICAgICAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJztcclxuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChmaWxsaW5nKTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IENyZWF0ZVJlY3RhbmdsZSB9IGZyb20gXCIuLi9SZWN0YW5nbGUvUmVjdGFuZ2xlXCI7XHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVJbWFnZSBleHRlbmRzIENyZWF0ZVJlY3RhbmdsZSB7XHJcbiAgICBjcmVhdGVJbWFnZUFzeW5jKGltYWdlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0geWllbGQgZmlnbWEuY3JlYXRlSW1hZ2VBc3luYyhpbWFnZURhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBoYXNoOiBpbWFnZS5oYXNoIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENyZWF0ZVJlY3RhbmdsZSB7XHJcbiAgICBjcmVhdGVSZWN0YW5nbGUoaW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgIGlmIChpbWFnZURhdGEpIHtcclxuICAgICAgICAgICAgcmVjdC5yZXNpemUoMzk1LCAzMjApO1xyXG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ0lNQUdFJywgaW1hZ2VIYXNoOiBpbWFnZURhdGEuaGFzaCwgc2NhbGVNb2RlOiAnRklUJyB9XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnQgY2xhc3MgQ3JlYXRlVGV4dCB7XHJcbiAgICBjcmVhdGVUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB5aWVsZCBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBpdGVtc1BlclJvdyA9IDEwO1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25Db3VudGVyKCkge1xyXG4gICAgZnVuY3Rpb24gY291bnRlcigpIHtcclxuICAgICAgICBpZiAoY291bnRlci52YWx1ZSA9PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlci52YWx1ZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlci52YWx1ZSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvdW50ZXIudmFsdWUgPSAwO1xyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgcG9zaXRpb25Db3VudGVyIH0gZnJvbSBcIi4vY291bnRlclwiO1xyXG5jb25zdCBpdGVtc1BlclJvdyA9IDEwO1xyXG5sZXQgaGFuZGxlWENvdW50ZXIgPSBwb3NpdGlvbkNvdW50ZXIoKTtcclxubGV0IGhhbmRsZVlDb3VudGVyID0gcG9zaXRpb25Db3VudGVyKCk7XHJcbmZ1bmN0aW9uIHNldFhQb3MoKSB7XHJcbiAgICBsZXQgc3RlcCA9IDUyNTtcclxuICAgIGxldCB4UG9zID0gMDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVYQ291bnRlci52YWx1ZTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSB4UG9zICsgc3RlcDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHNldFlQb3MoKSB7XHJcbiAgICBsZXQgc3RlcCA9IDQ1MDtcclxuICAgIGxldCB5UG9zID0gMDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVZQ291bnRlci52YWx1ZTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHlQb3MgPSB5UG9zICsgc3RlcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5UG9zO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0IHsgc2V0WFBvcywgc2V0WVBvcywgaGFuZGxlWENvdW50ZXIsIGhhbmRsZVlDb3VudGVyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBDcmVhdGVGcmFtZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ZyYW1lL0ZyYW1lXCI7XHJcbmltcG9ydCB7IENyZWF0ZVJlY3RhbmdsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1JlY3RhbmdsZS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgQ3JlYXRlSW1hZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbWFnZS9JbWFnZVwiO1xyXG5pbXBvcnQgeyBDcmVhdGVFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvci9FcnJvclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVUZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGV4dC9UZXh0XCI7XHJcbmltcG9ydCB7IGhhbmRsZVlDb3VudGVyLCBoYW5kbGVYQ291bnRlciB9IGZyb20gXCIuLi91dGlscy9wb3NpdGlvblNldHRlclwiO1xyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBoZWlnaHQ6IDM2MCxcclxufSk7XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IHBsdWdpbk1lc3NhZ2UgPT4ge1xyXG4gICAgKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIC8vY29uc3QgYXBwID0gcGx1Z2luTWVzc2FnZS5hcHA7XHJcbiAgICAgICAgLy9jb25zdCBwcmVsb2FkZXIgPSBwbHVnaW5NZXNzYWdlLnByZWxvYWRlcjtcclxuICAgICAgICBjb25zdCBwbHVBcnIgPSBwbHVnaW5NZXNzYWdlLm5hbWVzQXJyO1xyXG4gICAgICAgIGNvbnN0IGxpbmtBcnIgPSBwbHVnaW5NZXNzYWdlLmxpbmtBcnI7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzQXJyID0gW107XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL9GB0LjQvdGF0YDQvtC90L3Ri9C5INC30LDQv9GA0L7RgS8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBpdGVyTGlua3NBcnJheSA9IGxpbmtBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBpdGVyUGx1QXJyYXkgPSBwbHVBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBsaW5rc0FycmF5ID0gQXJyYXkuZnJvbShpdGVyTGlua3NBcnJheSk7XHJcbiAgICAgICAgbGV0IHBsdUFycmF5ID0gQXJyYXkuZnJvbShpdGVyUGx1QXJyYXkpO1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNob3dQcmVsb2FkZXIoKSB7XHJcbiAgICAgICAgLy8gICAgIHByZWxvYWRlcigpXHJcbiAgICAgICAgLy8gICAgIC8vcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWRlcl9fdmlzaWJsZScpXHJcbiAgICAgICAgLy8gICAgIC8vZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy9hd2FpdCBzaG93UHJlbG9hZGVyKClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGFwcClcclxuICAgICAgICAvLyBmdW5jdGlvbiBwcmVsb2FkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPHA+TE9BRElORzwvcD4nXHJcbiAgICAgICAgLy8gICAgIC8vIHJldHVybiBgXHJcbiAgICAgICAgLy8gICAgIC8vIDxwPkxPQURJTkc8L3A+PlxyXG4gICAgICAgIC8vICAgICAvLyBgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHByZWxvYWRlcigpe1xyXG4gICAgICAgIC8vICAgICBwbHVnaW5NZXNzYWdlLmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJzxwPkxPQURJTkc8L3A+J1xyXG4gICAgICAgIC8vICAgICAvLyByZXR1cm4gYFxyXG4gICAgICAgIC8vICAgICAvLyA8cD5MT0FESU5HPC9wPj5cclxuICAgICAgICAvLyAgICAgLy8gYFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHByZWxvYWRlcigpXHJcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBsaW5rc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCDQpTogJHtoYW5kbGVYQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQgdCi0KfQmNCa0JAgWTogJHtoYW5kbGVZQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVhDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVZQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RnJhbWUgPSBuZXcgQ3JlYXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlY3RhbmdsZSA9IG5ldyBDcmVhdGVSZWN0YW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgQ3JlYXRlSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBuZXdJbWFnZS5jcmVhdGVJbWFnZUFzeW5jKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3RhbmdsZVdpdGhJbWFnZSA9IG5ld1JlY3RhbmdsZS5jcmVhdGVSZWN0YW5nbGUoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZyYW1lLmNyZWF0ZUZyYW1lKHJlY3RhbmdsZVdpdGhJbWFnZSwgZWxlbSwgbGlua3NBcnJheSwgcGx1QXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yc0Fyci5wdXNoKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RXJyb3IgPSBuZXcgQ3JlYXRlRXJyb3JNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0geWllbGQgbmV3RXJyb3IuY3JlYXRlRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RnJhbWUuY3JlYXRlRnJhbWUoZXJyb3IsIGVsZW0sIGxpbmtzQXJyYXksIHBsdUFycmF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdMb2cgPSBuZXcgQ3JlYXRlVGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IGxvZyA9IHlpZWxkIG5ld0xvZy5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgbG9nLnggPSA1MDtcclxuICAgICAgICBsb2cueSA9IC01MDtcclxuICAgICAgICBsb2cuY2hhcmFjdGVycyA9IChg0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGA0LDQsdC+0YLQsNC90L3Ri9GFINC40LzRkdC9OiAke3BsdUFycmF5Lmxlbmd0aH0uIFxcbtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDRgdGB0YvQu9C+0Lo6ICR7bGlua3NBcnJheS5sZW5ndGh9LiBcXG7QmtC+0LvQuNGH0LXRgdGC0LLQviDQvtGI0LjQsdC+0Lo6ICR7ZXJyb3JzQXJyLmxlbmd0aH1gKTtcclxuICAgICAgICBsb2cuZm9udFNpemUgPSAxODtcclxuICAgICAgICBsb2cuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XHJcbiAgICAgICAgeWllbGQgZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxuICAgIH0pKSgpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=