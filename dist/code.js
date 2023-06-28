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
        for (let elem of linksArray) {
            if (typeof elem === "string") {
                const indexOfElement = linksArray.indexOf(elem);
                const firstFramePositionX = 50;
                const frameAndSpaceWidth = 475 + 50;
                let currentFramePositionX = indexOfElement * frameAndSpaceWidth;
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${handleXCounter.value}`);
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${handleYCounter.value}`);
                handleXCounter();
                handleYCounter();
                try {
                    console.log(elem);
                    let imgLink = yield figma.createImageAsync(elem);
                    console.log(imgLink);
                    const rectangleObject = figma.createRectangle();
                    rectangleObject.resize(395, 320);
                    rectangleObject.fills = [
                        {
                            type: 'IMAGE',
                            imageHash: imgLink.hash,
                            scaleMode: 'FIT'
                        }
                    ];
                    let frameXPosition;
                    if (indexOfElement === 0) {
                        frameXPosition = firstFramePositionX;
                    }
                    else {
                        frameXPosition = currentFramePositionX;
                    }
                    const frame = figma.createFrame();
                    frame.x = setX();
                    frame.y = setY();
                    frame.resize(475, 400);
                    let currentIndex = linksArray.indexOf(elem);
                    console.log(currentIndex);
                    let currentFrameName = pluArray[currentIndex];
                    console.log(currentFrameName);
                    if (typeof currentFrameName === "string") {
                        frame.name = currentFrameName;
                    }
                    frame.layoutMode = 'HORIZONTAL';
                    frame.horizontalPadding = 40;
                    frame.counterAxisAlignItems = 'CENTER';
                    frame.appendChild(rectangleObject);
                }
                catch (err) {
                    errorsArr.push(err);
                    const errorText = yield figma.createText();
                    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
                    errorText.resize(395, 320);
                    errorText.x = 0;
                    errorText.y = 0;
                    errorText.characters = ('ERROR:' + '\n' + (err));
                    errorText.fontSize = 24;
                    errorText.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
                    const frame = figma.createFrame();
                    frame.x = setX();
                    frame.y = setY();
                    frame.resize(475, 400);
                    let currentIndex = linksArray.indexOf(elem);
                    let currentFrameName = pluArray[currentIndex];
                    if (typeof currentFrameName === "string") {
                        frame.name = currentFrameName;
                    }
                    frame.layoutMode = 'HORIZONTAL';
                    frame.horizontalPadding = 40;
                    frame.counterAxisAlignItems = 'CENTER';
                    frame.appendChild(errorText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFLG9EQUFvRCxxQkFBcUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtQ0FBbUM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx3QkFBd0Isb0JBQW9CO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFO0FBQ0E7QUFDQSwyREFBMkQsZ0JBQWdCLHNDQUFzQyxrQkFBa0IseUJBQXlCLGlCQUFpQjtBQUM3SztBQUNBLHVCQUF1Qix3QkFBd0Isb0JBQW9CO0FBQ25FO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVRXBKQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xyXG4gICAgd2lkdGg6IDUwMCxcclxuICAgIGhlaWdodDogMzYwLFxyXG59KTtcclxuZmlnbWEudWkub25tZXNzYWdlID0gcGx1Z2luTWVzc2FnZSA9PiB7XHJcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGx1QXJyID0gcGx1Z2luTWVzc2FnZS5uYW1lc0FycjtcclxuICAgICAgICBjb25zdCBsaW5rQXJyID0gcGx1Z2luTWVzc2FnZS5saW5rQXJyO1xyXG4gICAgICAgIGNvbnN0IGVycm9yc0FyciA9IFtdO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy/RgdC40L3RhdGA0L7QvdC90YvQuSDQt9Cw0L/RgNC+0YEvLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBsZXQgaXRlckxpbmtzQXJyYXkgPSBsaW5rQXJyW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgICAgICBsZXQgaXRlclBsdUFycmF5ID0gcGx1QXJyW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgICAgICBsZXQgbGlua3NBcnJheSA9IEFycmF5LmZyb20oaXRlckxpbmtzQXJyYXkpO1xyXG4gICAgICAgIGxldCBwbHVBcnJheSA9IEFycmF5LmZyb20oaXRlclBsdUFycmF5KTtcclxuICAgICAgICBjb25zdCBpdGVtc1BlclJvdyA9IDEwO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ291bnRlcigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyLnZhbHVlID09IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIudmFsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIudmFsdWUrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYW5kbGVYQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG4gICAgICAgIGxldCBoYW5kbGVZQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFhQb3MoKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gNTI1O1xyXG4gICAgICAgICAgICBsZXQgeFBvcyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVhDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSB4UG9zICsgc3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0WVBvcygpIHtcclxuICAgICAgICAgICAgbGV0IHN0ZXAgPSA0NTA7XHJcbiAgICAgICAgICAgIGxldCB5UG9zID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaGFuZGxlWUNvdW50ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geVBvcyA9IHlQb3MgKyBzdGVwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFggPSBzZXRYUG9zKCk7XHJcbiAgICAgICAgY29uc3Qgc2V0WSA9IHNldFlQb3MoKTtcclxuICAgICAgICBmb3IgKGxldCBlbGVtIG9mIGxpbmtzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleE9mRWxlbWVudCA9IGxpbmtzQXJyYXkuaW5kZXhPZihlbGVtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0RnJhbWVQb3NpdGlvblggPSA1MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lQW5kU3BhY2VXaWR0aCA9IDQ3NSArIDUwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZVBvc2l0aW9uWCA9IGluZGV4T2ZFbGVtZW50ICogZnJhbWVBbmRTcGFjZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCDQpTogJHtoYW5kbGVYQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQgdCi0KfQmNCa0JAgWTogJHtoYW5kbGVZQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVhDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVZQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nTGluayA9IHlpZWxkIGZpZ21hLmNyZWF0ZUltYWdlQXN5bmMoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1nTGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdGFuZ2xlT2JqZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlT2JqZWN0LnJlc2l6ZSgzOTUsIDMyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlT2JqZWN0LmZpbGxzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSU1BR0UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VIYXNoOiBpbWdMaW5rLmhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZU1vZGU6ICdGSVQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZVhQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZkVsZW1lbnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVYUG9zaXRpb24gPSBmaXJzdEZyYW1lUG9zaXRpb25YO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVYUG9zaXRpb24gPSBjdXJyZW50RnJhbWVQb3NpdGlvblg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnkgPSBzZXRZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUucmVzaXplKDQ3NSwgNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZU5hbWUgPSBwbHVBcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGcmFtZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEZyYW1lTmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5uYW1lID0gY3VycmVudEZyYW1lTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHJlY3RhbmdsZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzQXJyLnB1c2goZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvclRleHQgPSB5aWVsZCBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnJlc2l6ZSgzOTUsIDMyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQuY2hhcmFjdGVycyA9ICgnRVJST1I6JyArICdcXG4nICsgKGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5mb250U2l6ZSA9IDI0O1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUueCA9IHNldFgoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS55ID0gc2V0WSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnJlc2l6ZSg0NzUsIDQwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGxpbmtzQXJyYXkuaW5kZXhPZihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lTmFtZSA9IHBsdUFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RnJhbWVOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBjdXJyZW50RnJhbWVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUic7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2cgPSB5aWVsZCBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XHJcbiAgICAgICAgbG9nLnggPSA1MDtcclxuICAgICAgICBsb2cueSA9IC01MDtcclxuICAgICAgICBsb2cuY2hhcmFjdGVycyA9IChg0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGA0LDQsdC+0YLQsNC90L3Ri9GFINC40LzRkdC9OiAke3BsdUFycmF5Lmxlbmd0aH0uIFxcbtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDRgdGB0YvQu9C+0Lo6ICR7bGlua3NBcnJheS5sZW5ndGh9LiBcXG7QmtC+0LvQuNGH0LXRgdGC0LLQviDQvtGI0LjQsdC+0Lo6ICR7ZXJyb3JzQXJyLmxlbmd0aH1gKTtcclxuICAgICAgICBsb2cuZm9udFNpemUgPSAxODtcclxuICAgICAgICBsb2cuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XHJcbiAgICAgICAgeWllbGQgZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxuICAgIH0pKSgpO1xyXG59O1xyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvZGUudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==