/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
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
        class CreateText {
            createText() {
                return __awaiter(this, void 0, void 0, function* () {
                    const text = yield figma.createText();
                    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
                    return text;
                });
            }
        }
        class CreateErrorMessage extends CreateText {
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
        const newLog = new CreateText();
        const log = yield newLog.createText();
        log.x = 50;
        log.y = -50;
        log.characters = (`Количество обработанных имён: ${pluArray.length}. \nКоличество обработанных ссылок: ${linksArray.length}. \nКоличество ошибок: ${errorsArr.length}`);
        log.fontSize = 18;
        log.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
        yield figma.closePlugin();
    }))();
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNERBQTREO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUNBQW1DO0FBQ25GO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0JBQXdCLG9CQUFvQjtBQUNyRjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxxQkFBcUI7QUFDekUsb0RBQW9ELHFCQUFxQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0Isc0NBQXNDLGtCQUFrQix5QkFBeUIsaUJBQWlCO0FBQzdLO0FBQ0EsdUJBQXVCLHdCQUF3QixvQkFBb0I7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7QUFDVSIsInNvdXJjZXMiOlsid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBoZWlnaHQ6IDM2MCxcclxufSk7XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IHBsdWdpbk1lc3NhZ2UgPT4ge1xyXG4gICAgKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHBsdUFyciA9IHBsdWdpbk1lc3NhZ2UubmFtZXNBcnI7XHJcbiAgICAgICAgY29uc3QgbGlua0FyciA9IHBsdWdpbk1lc3NhZ2UubGlua0FycjtcclxuICAgICAgICBjb25zdCBlcnJvcnNBcnIgPSBbXTtcclxuICAgICAgICAvLy8vLy8vLy8vLy8v0YHQuNC90YXRgNC+0L3QvdGL0Lkg0LfQsNC/0YDQvtGBLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgbGV0IGl0ZXJMaW5rc0FycmF5ID0gbGlua0FycltTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbiAgICAgICAgbGV0IGl0ZXJQbHVBcnJheSA9IHBsdUFycltTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbiAgICAgICAgbGV0IGxpbmtzQXJyYXkgPSBBcnJheS5mcm9tKGl0ZXJMaW5rc0FycmF5KTtcclxuICAgICAgICBsZXQgcGx1QXJyYXkgPSBBcnJheS5mcm9tKGl0ZXJQbHVBcnJheSk7XHJcbiAgICAgICAgY29uc3QgaXRlbXNQZXJSb3cgPSAxMDtcclxuICAgICAgICBmdW5jdGlvbiBwb3NpdGlvbkNvdW50ZXIoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlci52YWx1ZSA9PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFuZGxlWENvdW50ZXIgPSBwb3NpdGlvbkNvdW50ZXIoKTtcclxuICAgICAgICBsZXQgaGFuZGxlWUNvdW50ZXIgPSBwb3NpdGlvbkNvdW50ZXIoKTtcclxuICAgICAgICBmdW5jdGlvbiBzZXRYUG9zKCkge1xyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IDUyNTtcclxuICAgICAgICAgICAgbGV0IHhQb3MgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVYQ291bnRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4UG9zID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4UG9zID0geFBvcyArIHN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFlQb3MoKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gNDUwO1xyXG4gICAgICAgICAgICBsZXQgeVBvcyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVlDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlQb3MgPSB5UG9zICsgc3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5UG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRYID0gc2V0WFBvcygpO1xyXG4gICAgICAgIGNvbnN0IHNldFkgPSBzZXRZUG9zKCk7XHJcbiAgICAgICAgY2xhc3MgQ3JlYXRlUmVjdGFuZ2xlIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjdGFuZ2xlKGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3QucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0LmZpbGxzID0gW3sgdHlwZTogJ0lNQUdFJywgaW1hZ2VIYXNoOiBpbWFnZURhdGEuaGFzaCwgc2NhbGVNb2RlOiAnRklUJyB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzIENyZWF0ZUltYWdlIGV4dGVuZHMgQ3JlYXRlUmVjdGFuZ2xlIHtcclxuICAgICAgICAgICAgY3JlYXRlSW1hZ2VBc3luYyhpbWFnZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBmaWdtYS5jcmVhdGVJbWFnZUFzeW5jKGltYWdlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaGFzaDogaW1hZ2UuaGFzaCB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3MgQ3JlYXRlRnJhbWUge1xyXG4gICAgICAgICAgICBjcmVhdGVGcmFtZShmaWxsaW5nLCBuYW1lc0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUueSA9IHNldFkoKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lLnJlc2l6ZSg0NzUsIDQwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKG5hbWVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZU5hbWUgPSBwbHVBcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RnJhbWVOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcclxuICAgICAgICAgICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZmlsbGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3MgQ3JlYXRlVGV4dCB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRleHQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSB5aWVsZCBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzcyBDcmVhdGVFcnJvck1lc3NhZ2UgZXh0ZW5kcyBDcmVhdGVUZXh0IHtcclxuICAgICAgICAgICAgY3JlYXRlRXJyb3JNZXNzYWdlKGRlZmF1bHRFcnJNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IHlpZWxkIHRoaXMuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5yZXNpemUoMzk1LCAzMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmNoYXJhY3RlcnMgPSAoJ0VSUk9SOicgKyAnXFxuJyArIChkZWZhdWx0RXJyTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5mb250U2l6ZSA9IDI0O1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBsaW5rc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCDQpTogJHtoYW5kbGVYQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQgdCi0KfQmNCa0JAgWTogJHtoYW5kbGVZQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVhDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVZQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RnJhbWUgPSBuZXcgQ3JlYXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlY3RhbmdsZSA9IG5ldyBDcmVhdGVSZWN0YW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgQ3JlYXRlSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBuZXdJbWFnZS5jcmVhdGVJbWFnZUFzeW5jKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3RhbmdsZVdpdGhJbWFnZSA9IG5ld1JlY3RhbmdsZS5jcmVhdGVSZWN0YW5nbGUoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZyYW1lLmNyZWF0ZUZyYW1lKHJlY3RhbmdsZVdpdGhJbWFnZSwgZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzQXJyLnB1c2goZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFcnJvciA9IG5ldyBDcmVhdGVFcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB5aWVsZCBuZXdFcnJvci5jcmVhdGVFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGcmFtZS5jcmVhdGVGcmFtZShlcnJvciwgZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3TG9nID0gbmV3IENyZWF0ZVRleHQoKTtcclxuICAgICAgICBjb25zdCBsb2cgPSB5aWVsZCBuZXdMb2cuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgIGxvZy54ID0gNTA7XHJcbiAgICAgICAgbG9nLnkgPSAtNTA7XHJcbiAgICAgICAgbG9nLmNoYXJhY3RlcnMgPSAoYNCa0L7Qu9C40YfQtdGB0YLQstC+INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDQuNC80ZHQvTogJHtwbHVBcnJheS5sZW5ndGh9LiBcXG7QmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0YHRgdGL0LvQvtC6OiAke2xpbmtzQXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7RiNC40LHQvtC6OiAke2Vycm9yc0Fyci5sZW5ndGh9YCk7XHJcbiAgICAgICAgbG9nLmZvbnRTaXplID0gMTg7XHJcbiAgICAgICAgbG9nLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgICB9KSkoKTtcclxufTtcclxuZXhwb3J0IHt9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=