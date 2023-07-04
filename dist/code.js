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
        class Card {
            constructor(name, image) {
                this._name = name;
                this._image = image;
            }
        }
        for (let elem of linksArray) {
            if (typeof elem === "string") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHFCQUFxQjtBQUN6RSxvREFBb0QscUJBQXFCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdCQUF3QixvQkFBb0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0Isc0NBQXNDLGtCQUFrQix5QkFBeUIsaUJBQWlCO0FBQzdLO0FBQ0EsdUJBQXVCLHdCQUF3QixvQkFBb0I7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VFNUpBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XHJcbiAgICB3aWR0aDogNTAwLFxyXG4gICAgaGVpZ2h0OiAzNjAsXHJcbn0pO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBwbHVnaW5NZXNzYWdlID0+IHtcclxuICAgICgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBwbHVBcnIgPSBwbHVnaW5NZXNzYWdlLm5hbWVzQXJyO1xyXG4gICAgICAgIGNvbnN0IGxpbmtBcnIgPSBwbHVnaW5NZXNzYWdlLmxpbmtBcnI7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgY291bnRlciA9IHBsdWdpbk1lc3NhZ2UuaGFuZGxlWENvdW50ZXI7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL9GB0LjQvdGF0YDQvtC90L3Ri9C5INC30LDQv9GA0L7RgS8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBpdGVyTGlua3NBcnJheSA9IGxpbmtBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBpdGVyUGx1QXJyYXkgPSBwbHVBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBsaW5rc0FycmF5ID0gQXJyYXkuZnJvbShpdGVyTGlua3NBcnJheSk7XHJcbiAgICAgICAgbGV0IHBsdUFycmF5ID0gQXJyYXkuZnJvbShpdGVyUGx1QXJyYXkpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zUGVyUm93ID0gMTA7XHJcbiAgICAgICAgZnVuY3Rpb24gcG9zaXRpb25Db3VudGVyKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIudmFsdWUgPT0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlci52YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlci52YWx1ZSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhhbmRsZVhDb3VudGVyID0gcG9zaXRpb25Db3VudGVyKCk7XHJcbiAgICAgICAgbGV0IGhhbmRsZVlDb3VudGVyID0gcG9zaXRpb25Db3VudGVyKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0WFBvcygpIHtcclxuICAgICAgICAgICAgbGV0IHN0ZXAgPSA1MjU7XHJcbiAgICAgICAgICAgIGxldCB4UG9zID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaGFuZGxlWENvdW50ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geFBvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geFBvcyA9IHhQb3MgKyBzdGVwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzZXRZUG9zKCkge1xyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IDQ1MDtcclxuICAgICAgICAgICAgbGV0IHlQb3MgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVZQ291bnRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5UG9zID0geVBvcyArIHN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geVBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0WCA9IHNldFhQb3MoKTtcclxuICAgICAgICBjb25zdCBzZXRZID0gc2V0WVBvcygpO1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBmcmFtZToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJycsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xhc3MgQ2FyZCB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBsaW5rc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCDQpTogJHtoYW5kbGVYQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQgdCi0KfQmNCa0JAgWTogJHtoYW5kbGVZQ291bnRlci52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVhDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVZQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nTGluayA9IHlpZWxkIGZpZ21hLmNyZWF0ZUltYWdlQXN5bmMoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1nTGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdGFuZ2xlT2JqZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlT2JqZWN0LnJlc2l6ZSgzOTUsIDMyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlT2JqZWN0LmZpbGxzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSU1BR0UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VIYXNoOiBpbWdMaW5rLmhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZU1vZGU6ICdGSVQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnkgPSBzZXRZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUucmVzaXplKDQ3NSwgNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZU5hbWUgPSBwbHVBcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGcmFtZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEZyYW1lTmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5uYW1lID0gY3VycmVudEZyYW1lTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHJlY3RhbmdsZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzQXJyLnB1c2goZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvclRleHQgPSB5aWVsZCBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnJlc2l6ZSgzOTUsIDMyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQuY2hhcmFjdGVycyA9ICgnRVJST1I6JyArICdcXG4nICsgKGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5mb250U2l6ZSA9IDI0O1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDEsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUueCA9IHNldFgoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS55ID0gc2V0WSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnJlc2l6ZSg0NzUsIDQwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGxpbmtzQXJyYXkuaW5kZXhPZihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lTmFtZSA9IHBsdUFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RnJhbWVOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBjdXJyZW50RnJhbWVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUic7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZXJyb3JUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2cgPSB5aWVsZCBmaWdtYS5jcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XHJcbiAgICAgICAgbG9nLnggPSA1MDtcclxuICAgICAgICBsb2cueSA9IC01MDtcclxuICAgICAgICBsb2cuY2hhcmFjdGVycyA9IChg0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGA0LDQsdC+0YLQsNC90L3Ri9GFINC40LzRkdC9OiAke3BsdUFycmF5Lmxlbmd0aH0uIFxcbtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDRgdGB0YvQu9C+0Lo6ICR7bGlua3NBcnJheS5sZW5ndGh9LiBcXG7QmtC+0LvQuNGH0LXRgdGC0LLQviDQvtGI0LjQsdC+0Lo6ICR7ZXJyb3JzQXJyLmxlbmd0aH1gKTtcclxuICAgICAgICBsb2cuZm9udFNpemUgPSAxODtcclxuICAgICAgICBsb2cuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XHJcbiAgICAgICAgeWllbGQgZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxuICAgIH0pKSgpO1xyXG59O1xyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvZGUudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==