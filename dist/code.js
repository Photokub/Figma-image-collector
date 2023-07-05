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
figma.ui.onmessage = pluginMessage => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr = [];
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
                const newFrame = new CreateFrame;
                try {
                    const newRectangle = new CreateRectangle;
                    const newImage = new CreateImage;
                    const image = yield newImage.createImageAsync(elem);
                    const rectangleWithImage = newRectangle.createRectangle(image);
                    newFrame.createFrame(rectangleWithImage, elem);
                }
                catch (err) {
                    errorsArr.push(err);
                    const newError = new CreateErrorMessage;
                    const error = yield newError.createErrorMessage(err);
                    newFrame.createFrame(error, elem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDREQUE0RDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdCQUF3QixvQkFBb0I7QUFDckY7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFLG9EQUFvRCxxQkFBcUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFO0FBQ0E7QUFDQSwyREFBMkQsZ0JBQWdCLHNDQUFzQyxrQkFBa0IseUJBQXlCLGlCQUFpQjtBQUM3SztBQUNBLHVCQUF1Qix3QkFBd0Isb0JBQW9CO0FBQ25FO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVRXBKQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xyXG4gICAgd2lkdGg6IDUwMCxcclxuICAgIGhlaWdodDogMzYwLFxyXG59KTtcclxuZmlnbWEudWkub25tZXNzYWdlID0gcGx1Z2luTWVzc2FnZSA9PiB7XHJcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGx1QXJyID0gcGx1Z2luTWVzc2FnZS5uYW1lc0FycjtcclxuICAgICAgICBjb25zdCBsaW5rQXJyID0gcGx1Z2luTWVzc2FnZS5saW5rQXJyO1xyXG4gICAgICAgIGNvbnN0IGVycm9yc0FyciA9IFtdO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy/RgdC40L3RhdGA0L7QvdC90YvQuSDQt9Cw0L/RgNC+0YEvLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBsZXQgaXRlckxpbmtzQXJyYXkgPSBsaW5rQXJyW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgICAgICBsZXQgaXRlclBsdUFycmF5ID0gcGx1QXJyW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgICAgICBsZXQgbGlua3NBcnJheSA9IEFycmF5LmZyb20oaXRlckxpbmtzQXJyYXkpO1xyXG4gICAgICAgIGxldCBwbHVBcnJheSA9IEFycmF5LmZyb20oaXRlclBsdUFycmF5KTtcclxuICAgICAgICBjb25zdCBpdGVtc1BlclJvdyA9IDEwO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ291bnRlcigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyLnZhbHVlID09IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIudmFsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIudmFsdWUrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYW5kbGVYQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG4gICAgICAgIGxldCBoYW5kbGVZQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFhQb3MoKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gNTI1O1xyXG4gICAgICAgICAgICBsZXQgeFBvcyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVhDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSB4UG9zICsgc3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0WVBvcygpIHtcclxuICAgICAgICAgICAgbGV0IHN0ZXAgPSA0NTA7XHJcbiAgICAgICAgICAgIGxldCB5UG9zID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaGFuZGxlWUNvdW50ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geVBvcyA9IHlQb3MgKyBzdGVwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFggPSBzZXRYUG9zKCk7XHJcbiAgICAgICAgY29uc3Qgc2V0WSA9IHNldFlQb3MoKTtcclxuICAgICAgICBjbGFzcyBDcmVhdGVSZWN0YW5nbGUge1xyXG4gICAgICAgICAgICBjcmVhdGVSZWN0YW5nbGUoaW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdC5yZXNpemUoMzk1LCAzMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnSU1BR0UnLCBpbWFnZUhhc2g6IGltYWdlRGF0YS5oYXNoLCBzY2FsZU1vZGU6ICdGSVQnIH1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3MgQ3JlYXRlSW1hZ2UgZXh0ZW5kcyBDcmVhdGVSZWN0YW5nbGUge1xyXG4gICAgICAgICAgICBjcmVhdGVJbWFnZUFzeW5jKGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IHlpZWxkIGZpZ21hLmNyZWF0ZUltYWdlQXN5bmMoaW1hZ2VEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBoYXNoOiBpbWFnZS5oYXNoIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzcyBDcmVhdGVGcmFtZSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUZyYW1lKGZpbGxpbmcsIG5hbWVzQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lLnggPSBzZXRYKCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS55ID0gc2V0WSgpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUucmVzaXplKDQ3NSwgNDAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBsaW5rc0FycmF5LmluZGV4T2YobmFtZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lTmFtZSA9IHBsdUFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5uYW1lID0gY3VycmVudEZyYW1lTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCc7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUic7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChmaWxsaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzcyBDcmVhdGVFcnJvck1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBjcmVhdGVFcnJvck1lc3NhZ2UoZGVmYXVsdEVyck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0geWllbGQgZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5yZXNpemUoMzk1LCAzMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmNoYXJhY3RlcnMgPSAoJ0VSUk9SOicgKyAnXFxuJyArIChkZWZhdWx0RXJyTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5mb250U2l6ZSA9IDI0O1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBsaW5rc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCDQpTogJHtoYW5kbGVYQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQgdCi0KfQmNCa0JAgWTogJHtoYW5kbGVZQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVhDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVZQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RnJhbWUgPSBuZXcgQ3JlYXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlY3RhbmdsZSA9IG5ldyBDcmVhdGVSZWN0YW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgQ3JlYXRlSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBuZXdJbWFnZS5jcmVhdGVJbWFnZUFzeW5jKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3RhbmdsZVdpdGhJbWFnZSA9IG5ld1JlY3RhbmdsZS5jcmVhdGVSZWN0YW5nbGUoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZyYW1lLmNyZWF0ZUZyYW1lKHJlY3RhbmdsZVdpdGhJbWFnZSwgZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzQXJyLnB1c2goZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFcnJvciA9IG5ldyBDcmVhdGVFcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBuZXdFcnJvci5jcmVhdGVFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGcmFtZS5jcmVhdGVGcmFtZShlcnJvciwgZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbG9nID0geWllbGQgZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xyXG4gICAgICAgIGxvZy54ID0gNTA7XHJcbiAgICAgICAgbG9nLnkgPSAtNTA7XHJcbiAgICAgICAgbG9nLmNoYXJhY3RlcnMgPSAoYNCa0L7Qu9C40YfQtdGB0YLQstC+INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDQuNC80ZHQvTogJHtwbHVBcnJheS5sZW5ndGh9LiBcXG7QmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0YHRgdGL0LvQvtC6OiAke2xpbmtzQXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7RiNC40LHQvtC6OiAke2Vycm9yc0Fyci5sZW5ndGh9YCk7XHJcbiAgICAgICAgbG9nLmZvbnRTaXplID0gMTg7XHJcbiAgICAgICAgbG9nLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgICB9KSkoKTtcclxufTtcclxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=