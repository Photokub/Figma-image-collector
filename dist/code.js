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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CreateImage {
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
        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr = [];
        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);
        const newRectangle = new _components_Rectangle_Rectangle__WEBPACK_IMPORTED_MODULE_1__.CreateRectangle;
        const newImage = new _components_Image_Image__WEBPACK_IMPORTED_MODULE_2__.CreateImage;
        const newFrame = new _components_Frame_Frame__WEBPACK_IMPORTED_MODULE_0__.CreateFrame;
        for (let elem of linksArray) {
            if (typeof elem === "string") {
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${_utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__.handleXCounter.value}`);
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${_utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__.handleYCounter.value}`);
                (0,_utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__.handleXCounter)();
                (0,_utils_positionSetter__WEBPACK_IMPORTED_MODULE_5__.handleYCounter)();
                try {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGlDQUFpQyw0RUFBZTtBQUNoRCw2QkFBNkIsZ0VBQVc7QUFDeEMsNkJBQTZCLGdFQUFXO0FBQ3hDO0FBQ0E7QUFDQSxvREFBb0QsdUVBQW9CLENBQUM7QUFDekUsb0RBQW9ELHVFQUFvQixDQUFDO0FBQ3pFLGdCQUFnQixxRUFBYztBQUM5QixnQkFBZ0IscUVBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUVBQWtCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGdCQUFnQixzQ0FBc0Msa0JBQWtCLHlCQUF5QixpQkFBaUI7QUFDN0s7QUFDQSx1QkFBdUIsd0JBQXdCLG9CQUFvQjtBQUNuRTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci8uL2NvbXBvbmVudHMvRXJyb3IvRXJyb3IudHMiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yLy4vY29tcG9uZW50cy9GcmFtZS9GcmFtZS50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9jb21wb25lbnRzL0ltYWdlL0ltYWdlLnRzIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci8uL2NvbXBvbmVudHMvUmVjdGFuZ2xlL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9jb21wb25lbnRzL1RleHQvVGV4dC50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi91dGlscy9jb3VudGVyLnRzIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci8uL3V0aWxzL3Bvc2l0aW9uU2V0dGVyLnRzIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgQ3JlYXRlVGV4dCB9IGZyb20gXCIuLi9UZXh0L1RleHRcIjtcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUVycm9yTWVzc2FnZSBleHRlbmRzIENyZWF0ZVRleHQge1xyXG4gICAgY3JlYXRlRXJyb3JNZXNzYWdlKGRlZmF1bHRFcnJNZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0geWllbGQgdGhpcy5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgIGVycm9yVGV4dC5yZXNpemUoMzk1LCAzMjApO1xyXG4gICAgICAgICAgICBlcnJvclRleHQueCA9IDA7XHJcbiAgICAgICAgICAgIGVycm9yVGV4dC55ID0gMDtcclxuICAgICAgICAgICAgZXJyb3JUZXh0LmNoYXJhY3RlcnMgPSAoJ0VSUk9SOicgKyAnXFxuJyArIChkZWZhdWx0RXJyTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBlcnJvclRleHQuZm9udFNpemUgPSAyNDtcclxuICAgICAgICAgICAgZXJyb3JUZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3JUZXh0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNldFlQb3MsIHNldFhQb3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zaXRpb25TZXR0ZXJcIjtcclxuY29uc3Qgc2V0WCA9IHNldFhQb3MoKTtcclxuY29uc3Qgc2V0WSA9IHNldFlQb3MoKTtcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUZyYW1lIHtcclxuICAgIGNyZWF0ZUZyYW1lKGZpbGxpbmcsIG5hbWVzQXJyYXksIGxpbmtzQXJyYXksIHBsdUFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgICAgIGZyYW1lLnggPSBzZXRYKCk7XHJcbiAgICAgICAgZnJhbWUueSA9IHNldFkoKTtcclxuICAgICAgICBmcmFtZS5yZXNpemUoNDc1LCA0MDApO1xyXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBsaW5rc0FycmF5LmluZGV4T2YobmFtZXNBcnJheSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZU5hbWUgPSBwbHVBcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudEZyYW1lTmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBmcmFtZS5uYW1lID0gY3VycmVudEZyYW1lTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcclxuICAgICAgICBmcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xyXG4gICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGZpbGxpbmcpO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUltYWdlIHtcclxuICAgIGNyZWF0ZUltYWdlQXN5bmMoaW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBmaWdtYS5jcmVhdGVJbWFnZUFzeW5jKGltYWdlRGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGhhc2g6IGltYWdlLmhhc2ggfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ3JlYXRlUmVjdGFuZ2xlIHtcclxuICAgIGNyZWF0ZVJlY3RhbmdsZShpbWFnZURhdGEpIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgaWYgKGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICByZWN0LnJlc2l6ZSgzOTUsIDMyMCk7XHJcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnSU1BR0UnLCBpbWFnZUhhc2g6IGltYWdlRGF0YS5oYXNoLCBzY2FsZU1vZGU6ICdGSVQnIH1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVUZXh0IHtcclxuICAgIGNyZWF0ZVRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGl0ZW1zUGVyUm93ID0gMTA7XHJcbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkNvdW50ZXIoKSB7XHJcbiAgICBmdW5jdGlvbiBjb3VudGVyKCkge1xyXG4gICAgICAgIGlmIChjb3VudGVyLnZhbHVlID09IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY291bnRlci52YWx1ZSA9IDA7XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBwb3NpdGlvbkNvdW50ZXIgfSBmcm9tIFwiLi9jb3VudGVyXCI7XHJcbmNvbnN0IGl0ZW1zUGVyUm93ID0gMTA7XHJcbmxldCBoYW5kbGVYQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG5sZXQgaGFuZGxlWUNvdW50ZXIgPSBwb3NpdGlvbkNvdW50ZXIoKTtcclxuZnVuY3Rpb24gc2V0WFBvcygpIHtcclxuICAgIGxldCBzdGVwID0gNTI1O1xyXG4gICAgbGV0IHhQb3MgPSAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVhDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICByZXR1cm4geFBvcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geFBvcyA9IHhQb3MgKyBzdGVwO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gc2V0WVBvcygpIHtcclxuICAgIGxldCBzdGVwID0gNDUwO1xyXG4gICAgbGV0IHlQb3MgPSAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVlDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICByZXR1cm4geVBvcyA9IHlQb3MgKyBzdGVwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHlQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgeyBzZXRYUG9zLCBzZXRZUG9zLCBoYW5kbGVYQ291bnRlciwgaGFuZGxlWUNvdW50ZXIgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IENyZWF0ZUZyYW1lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRnJhbWUvRnJhbWVcIjtcclxuaW1wb3J0IHsgQ3JlYXRlUmVjdGFuZ2xlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVjdGFuZ2xlL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgeyBDcmVhdGVJbWFnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ltYWdlL0ltYWdlXCI7XHJcbmltcG9ydCB7IENyZWF0ZUVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Vycm9yL0Vycm9yXCI7XHJcbmltcG9ydCB7IENyZWF0ZVRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0L1RleHRcIjtcclxuaW1wb3J0IHsgaGFuZGxlWUNvdW50ZXIsIGhhbmRsZVhDb3VudGVyIH0gZnJvbSBcIi4uL3V0aWxzL3Bvc2l0aW9uU2V0dGVyXCI7XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xyXG4gICAgd2lkdGg6IDUwMCxcclxuICAgIGhlaWdodDogMzYwLFxyXG59KTtcclxuZmlnbWEudWkub25tZXNzYWdlID0gcGx1Z2luTWVzc2FnZSA9PiB7XHJcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGx1QXJyID0gcGx1Z2luTWVzc2FnZS5uYW1lc0FycjtcclxuICAgICAgICBjb25zdCBsaW5rQXJyID0gcGx1Z2luTWVzc2FnZS5saW5rQXJyO1xyXG4gICAgICAgIGNvbnN0IGVycm9yc0FyciA9IFtdO1xyXG4gICAgICAgIGxldCBpdGVyTGlua3NBcnJheSA9IGxpbmtBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBpdGVyUGx1QXJyYXkgPSBwbHVBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBsaW5rc0FycmF5ID0gQXJyYXkuZnJvbShpdGVyTGlua3NBcnJheSk7XHJcbiAgICAgICAgbGV0IHBsdUFycmF5ID0gQXJyYXkuZnJvbShpdGVyUGx1QXJyYXkpO1xyXG4gICAgICAgIGNvbnN0IG5ld1JlY3RhbmdsZSA9IG5ldyBDcmVhdGVSZWN0YW5nbGU7XHJcbiAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgQ3JlYXRlSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgbmV3RnJhbWUgPSBuZXcgQ3JlYXRlRnJhbWU7XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBsaW5rc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCDQpTogJHtoYW5kbGVYQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQgdCi0KfQmNCa0JAgWTogJHtoYW5kbGVZQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVhDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVZQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IHlpZWxkIG5ld0ltYWdlLmNyZWF0ZUltYWdlQXN5bmMoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdGFuZ2xlV2l0aEltYWdlID0gbmV3UmVjdGFuZ2xlLmNyZWF0ZVJlY3RhbmdsZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RnJhbWUuY3JlYXRlRnJhbWUocmVjdGFuZ2xlV2l0aEltYWdlLCBlbGVtLCBsaW5rc0FycmF5LCBwbHVBcnJheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzQXJyLnB1c2goZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFcnJvciA9IG5ldyBDcmVhdGVFcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBuZXdFcnJvci5jcmVhdGVFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGcmFtZS5jcmVhdGVGcmFtZShlcnJvciwgZWxlbSwgbGlua3NBcnJheSwgcGx1QXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld0xvZyA9IG5ldyBDcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgY29uc3QgbG9nID0geWllbGQgbmV3TG9nLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICBsb2cueCA9IDUwO1xyXG4gICAgICAgIGxvZy55ID0gLTUwO1xyXG4gICAgICAgIGxvZy5jaGFyYWN0ZXJzID0gKGDQmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0LjQvNGR0L06ICR7cGx1QXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGA0LDQsdC+0YLQsNC90L3Ri9GFINGB0YHRi9C70L7QujogJHtsaW5rc0FycmF5Lmxlbmd0aH0uIFxcbtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0YjQuNCx0L7QujogJHtlcnJvcnNBcnIubGVuZ3RofWApO1xyXG4gICAgICAgIGxvZy5mb250U2l6ZSA9IDE4O1xyXG4gICAgICAgIGxvZy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG4gICAgfSkpKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==