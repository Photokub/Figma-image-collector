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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFLG9EQUFvRCxxQkFBcUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtQ0FBbUM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx3QkFBd0Isb0JBQW9CO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFO0FBQ0E7QUFDQSwyREFBMkQsZ0JBQWdCLHNDQUFzQyxrQkFBa0IseUJBQXlCLGlCQUFpQjtBQUM3SztBQUNBLHVCQUF1Qix3QkFBd0Isb0JBQW9CO0FBQ25FO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVRWpLQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xyXG4gICAgd2lkdGg6IDUwMCxcclxuICAgIGhlaWdodDogMzYwLFxyXG59KTtcclxuZmlnbWEudWkub25tZXNzYWdlID0gcGx1Z2luTWVzc2FnZSA9PiB7XHJcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGx1QXJyID0gcGx1Z2luTWVzc2FnZS5uYW1lc0FycjtcclxuICAgICAgICBjb25zdCBsaW5rQXJyID0gcGx1Z2luTWVzc2FnZS5saW5rQXJyO1xyXG4gICAgICAgIGNvbnN0IGVycm9yc0FyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBwbHVnaW5NZXNzYWdlLmhhbmRsZVhDb3VudGVyO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy/RgdC40L3RhdGA0L7QvdC90YvQuSDQt9Cw0L/RgNC+0YEvLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBsZXQgaXRlckxpbmtzQXJyYXkgPSBsaW5rQXJyW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgICAgICBsZXQgaXRlclBsdUFycmF5ID0gcGx1QXJyW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgICAgICBsZXQgbGlua3NBcnJheSA9IEFycmF5LmZyb20oaXRlckxpbmtzQXJyYXkpO1xyXG4gICAgICAgIGxldCBwbHVBcnJheSA9IEFycmF5LmZyb20oaXRlclBsdUFycmF5KTtcclxuICAgICAgICBjb25zdCBpdGVtc1BlclJvdyA9IDEwO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ291bnRlcigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyLnZhbHVlID09IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIudmFsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIudmFsdWUrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYW5kbGVYQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG4gICAgICAgIGxldCBoYW5kbGVZQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFhQb3MoKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gNTI1O1xyXG4gICAgICAgICAgICBsZXQgeFBvcyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVhDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSB4UG9zICsgc3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0WVBvcygpIHtcclxuICAgICAgICAgICAgbGV0IHN0ZXAgPSA0NTA7XHJcbiAgICAgICAgICAgIGxldCB5UG9zID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaGFuZGxlWUNvdW50ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geVBvcyA9IHlQb3MgKyBzdGVwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFggPSBzZXRYUG9zKCk7XHJcbiAgICAgICAgY29uc3Qgc2V0WSA9IHNldFlQb3MoKTtcclxuICAgICAgICBjb25zdCBjYXJkID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJycsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IGVsZW0gb2YgbGlua3NBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4T2ZFbGVtZW50ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RGcmFtZVBvc2l0aW9uWCA9IDUwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWVBbmRTcGFjZVdpZHRoID0gNDc1ICsgNTA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lUG9zaXRpb25YID0gaW5kZXhPZkVsZW1lbnQgKiBmcmFtZUFuZFNwYWNlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0JfQndCQ0KfQldCd0JjQlSDQodCn0IHQotCn0JjQmtCQINClOiAke2hhbmRsZVhDb3VudGVyLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCBZOiAke2hhbmRsZVlDb3VudGVyLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlWENvdW50ZXIoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVlDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWdMaW5rID0geWllbGQgZmlnbWEuY3JlYXRlSW1hZ2VBc3luYyhlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWdMaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0YW5nbGVPYmplY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGVPYmplY3QucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGVPYmplY3QuZmlsbHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdJTUFHRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGltZ0xpbmsuaGFzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTW9kZTogJ0ZJVCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1lWFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mRWxlbWVudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVhQb3NpdGlvbiA9IGZpcnN0RnJhbWVQb3NpdGlvblg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVhQb3NpdGlvbiA9IGN1cnJlbnRGcmFtZVBvc2l0aW9uWDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnggPSBzZXRYKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUueSA9IHNldFkoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5yZXNpemUoNDc1LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBsaW5rc0FycmF5LmluZGV4T2YoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lTmFtZSA9IHBsdUFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEZyYW1lTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RnJhbWVOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBjdXJyZW50RnJhbWVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUic7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVjdGFuZ2xlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnNBcnIucHVzaChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5jaGFyYWN0ZXJzID0gKCdFUlJPUjonICsgJ1xcbicgKyAoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmZvbnRTaXplID0gMjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnkgPSBzZXRZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUucmVzaXplKDQ3NSwgNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVOYW1lID0gcGx1QXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChlcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvZyA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICBsb2cueCA9IDUwO1xyXG4gICAgICAgIGxvZy55ID0gLTUwO1xyXG4gICAgICAgIGxvZy5jaGFyYWN0ZXJzID0gKGDQmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0LjQvNGR0L06ICR7cGx1QXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGA0LDQsdC+0YLQsNC90L3Ri9GFINGB0YHRi9C70L7QujogJHtsaW5rc0FycmF5Lmxlbmd0aH0uIFxcbtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0YjQuNCx0L7QujogJHtlcnJvcnNBcnIubGVuZ3RofWApO1xyXG4gICAgICAgIGxvZy5mb250U2l6ZSA9IDE4O1xyXG4gICAgICAgIGxvZy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG4gICAgfSkpKCk7XHJcbn07XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvY29kZS50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9