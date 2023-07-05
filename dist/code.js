/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
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
const card = {
    name: '',
    frame: {
        width: '',
        height: '',
    },
    image: {
        width: '',
        height: '',
        src: '',
    },
};
figma.ui.onmessage = pluginMessage => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr = [];
        const counter = pluginMessage.handleXCounter;
        /////////////синхронный запрос///////////////
        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);
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
        let handleXCounter = positionCounter();
        let handleYCounter = positionCounter();
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
        const setX = setXPos();
        const setY = setYPos();
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
        class CreateImage extends CreateRectangle {
            createImageAsync(imageData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const image = yield figma.createImageAsync(imageData);
                    return { hash: image.hash };
                });
            }
        }
        class CreateFrame {
            createFrame(filling, namesArray) {
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
        class CreateErrorMessage {
            createErrorMessage(defaultErrMessage) {
                return __awaiter(this, void 0, void 0, function* () {
                    const errorText = yield figma.createText();
                    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
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
        for (let elem of linksArray) {
            if (typeof elem === "string") {
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${handleXCounter.value}`);
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${handleYCounter.value}`);
                handleXCounter();
                handleYCounter();
                try {
                    const newRectangle = new CreateRectangle();
                    const newImage = new CreateImage();
                    const newFrame = new CreateFrame();
                    const image = yield newImage.createImageAsync(elem);
                    const rectangleWithImage = newRectangle.createRectangle(image);
                    const frameWithFilling = newFrame.createFrame(rectangleWithImage, elem);
                }
                catch (err) {
                    errorsArr.push(err);
                    const newFrame = new CreateFrame();
                    const newError = new CreateErrorMessage();
                    const error = yield newError.createErrorMessage(err);
                    const frameWithError = newFrame.createFrame(error, elem);
                }
            }
        }
        const log = yield figma.createText();
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        log.x = 50;
        log.y = -50;
        log.characters = (`Количество обработанных имён: ${pluArray.length}. \nКоличество обработанных ссылок: ${linksArray.length}. \nКоличество ошибок: ${errorsArr.length}`);
        log.fontSize = 18;
        log.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
        yield figma.closePlugin();
    }))();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDREQUE0RDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdCQUF3QixvQkFBb0I7QUFDckY7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFLG9EQUFvRCxxQkFBcUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0Isc0NBQXNDLGtCQUFrQix5QkFBeUIsaUJBQWlCO0FBQzdLO0FBQ0EsdUJBQXVCLHdCQUF3QixvQkFBb0I7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VFbEtBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XHJcbiAgICB3aWR0aDogNTAwLFxyXG4gICAgaGVpZ2h0OiAzNjAsXHJcbn0pO1xyXG5jb25zdCBjYXJkID0ge1xyXG4gICAgbmFtZTogJycsXHJcbiAgICBmcmFtZToge1xyXG4gICAgICAgIHdpZHRoOiAnJyxcclxuICAgICAgICBoZWlnaHQ6ICcnLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6ICcnLFxyXG4gICAgICAgIGhlaWdodDogJycsXHJcbiAgICAgICAgc3JjOiAnJyxcclxuICAgIH0sXHJcbn07XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IHBsdWdpbk1lc3NhZ2UgPT4ge1xyXG4gICAgKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHBsdUFyciA9IHBsdWdpbk1lc3NhZ2UubmFtZXNBcnI7XHJcbiAgICAgICAgY29uc3QgbGlua0FyciA9IHBsdWdpbk1lc3NhZ2UubGlua0FycjtcclxuICAgICAgICBjb25zdCBlcnJvcnNBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBjb3VudGVyID0gcGx1Z2luTWVzc2FnZS5oYW5kbGVYQ291bnRlcjtcclxuICAgICAgICAvLy8vLy8vLy8vLy8v0YHQuNC90YXRgNC+0L3QvdGL0Lkg0LfQsNC/0YDQvtGBLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgbGV0IGl0ZXJMaW5rc0FycmF5ID0gbGlua0FycltTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbiAgICAgICAgbGV0IGl0ZXJQbHVBcnJheSA9IHBsdUFycltTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbiAgICAgICAgbGV0IGxpbmtzQXJyYXkgPSBBcnJheS5mcm9tKGl0ZXJMaW5rc0FycmF5KTtcclxuICAgICAgICBsZXQgcGx1QXJyYXkgPSBBcnJheS5mcm9tKGl0ZXJQbHVBcnJheSk7XHJcbiAgICAgICAgY29uc3QgaXRlbXNQZXJSb3cgPSAxMDtcclxuICAgICAgICBmdW5jdGlvbiBwb3NpdGlvbkNvdW50ZXIoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlci52YWx1ZSA9PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFuZGxlWENvdW50ZXIgPSBwb3NpdGlvbkNvdW50ZXIoKTtcclxuICAgICAgICBsZXQgaGFuZGxlWUNvdW50ZXIgPSBwb3NpdGlvbkNvdW50ZXIoKTtcclxuICAgICAgICBmdW5jdGlvbiBzZXRYUG9zKCkge1xyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IDUyNTtcclxuICAgICAgICAgICAgbGV0IHhQb3MgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVYQ291bnRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4UG9zID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4UG9zID0geFBvcyArIHN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFlQb3MoKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gNDUwO1xyXG4gICAgICAgICAgICBsZXQgeVBvcyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVlDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlQb3MgPSB5UG9zICsgc3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5UG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRYID0gc2V0WFBvcygpO1xyXG4gICAgICAgIGNvbnN0IHNldFkgPSBzZXRZUG9zKCk7XHJcbiAgICAgICAgY2xhc3MgQ3JlYXRlUmVjdGFuZ2xlIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjdGFuZ2xlKGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3QucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ0lNQUdFJywgaW1hZ2VIYXNoOiBpbWFnZURhdGEuaGFzaCwgc2NhbGVNb2RlOiAnRklUJyB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzIENyZWF0ZUltYWdlIGV4dGVuZHMgQ3JlYXRlUmVjdGFuZ2xlIHtcclxuICAgICAgICAgICAgY3JlYXRlSW1hZ2VBc3luYyhpbWFnZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBmaWdtYS5jcmVhdGVJbWFnZUFzeW5jKGltYWdlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaGFzaDogaW1hZ2UuaGFzaCB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3MgQ3JlYXRlRnJhbWUge1xyXG4gICAgICAgICAgICBjcmVhdGVGcmFtZShmaWxsaW5nLCBuYW1lc0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUueSA9IHNldFkoKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lLnJlc2l6ZSg0NzUsIDQwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKG5hbWVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZU5hbWUgPSBwbHVBcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RnJhbWVOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcclxuICAgICAgICAgICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZmlsbGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3MgQ3JlYXRlRXJyb3JNZXNzYWdlIHtcclxuICAgICAgICAgICAgY3JlYXRlRXJyb3JNZXNzYWdlKGRlZmF1bHRFcnJNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5jaGFyYWN0ZXJzID0gKCdFUlJPUjonICsgJ1xcbicgKyAoZGVmYXVsdEVyck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQuZm9udFNpemUgPSAyNDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAwLCBiOiAwIH0gfV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yVGV4dDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGVsZW0gb2YgbGlua3NBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQgdCi0KfQmNCa0JAg0KU6ICR7aGFuZGxlWENvdW50ZXIudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0JfQndCQ0KfQldCd0JjQlSDQodCn0IHQotCn0JjQmtCQIFk6ICR7aGFuZGxlWUNvdW50ZXIudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVYQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlWUNvdW50ZXIoKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UmVjdGFuZ2xlID0gbmV3IENyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IENyZWF0ZUltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RnJhbWUgPSBuZXcgQ3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IHlpZWxkIG5ld0ltYWdlLmNyZWF0ZUltYWdlQXN5bmMoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdGFuZ2xlV2l0aEltYWdlID0gbmV3UmVjdGFuZ2xlLmNyZWF0ZVJlY3RhbmdsZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVXaXRoRmlsbGluZyA9IG5ld0ZyYW1lLmNyZWF0ZUZyYW1lKHJlY3RhbmdsZVdpdGhJbWFnZSwgZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzQXJyLnB1c2goZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdGcmFtZSA9IG5ldyBDcmVhdGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Vycm9yID0gbmV3IENyZWF0ZUVycm9yTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0geWllbGQgbmV3RXJyb3IuY3JlYXRlRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVXaXRoRXJyb3IgPSBuZXdGcmFtZS5jcmVhdGVGcmFtZShlcnJvciwgZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbG9nID0geWllbGQgZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xyXG4gICAgICAgIGxvZy54ID0gNTA7XHJcbiAgICAgICAgbG9nLnkgPSAtNTA7XHJcbiAgICAgICAgbG9nLmNoYXJhY3RlcnMgPSAoYNCa0L7Qu9C40YfQtdGB0YLQstC+INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDQuNC80ZHQvTogJHtwbHVBcnJheS5sZW5ndGh9LiBcXG7QmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0YHRgdGL0LvQvtC6OiAke2xpbmtzQXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7RiNC40LHQvtC6OiAke2Vycm9yc0Fyci5sZW5ndGh9YCk7XHJcbiAgICAgICAgbG9nLmZvbnRTaXplID0gMTg7XHJcbiAgICAgICAgbG9nLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgICB9KSkoKTtcclxufTtcclxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=