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
        function counterForXPosition() {
            function counter() {
                if (counter.counterX >= itemsPerRow) {
                    console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Х: ${counter.counterX}`);
                    return counter.counterX = 1;
                }
                else {
                    console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Х: ${counter.counterX}`);
                    return counter.counterX++;
                }
            }
            counter.counterX = 0;
            return counter;
        }
        function counterForYPosition() {
            function counter() {
                if (counter.counterY >= itemsPerRow) {
                    console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Y: ${counter.counterY}`);
                    return counter.counterY = 1;
                }
                else {
                    console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Y: ${counter.counterY}`);
                    return counter.counterY++;
                }
            }
            counter.counterY = 0;
            return counter;
        }
        let handleXPosition = counterForXPosition();
        let handleYPosition = counterForYPosition();
        function setXPos() {
            let step = 280;
            let xPos = 0;
            return function () {
                const position = handleXPosition.counterX;
                console.log(`ЗНАЧЕНИЕ position X: ${position}`);
                if (handleXPosition.counterX >= itemsPerRow) {
                    return xPos = 0;
                }
                else {
                    return xPos = xPos + step;
                }
            };
        }
        function setYPos() {
            let step = 230;
            let yPos = 0;
            return function () {
                const position = handleYPosition.counterY;
                if (position == itemsPerRow) {
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
                console.log(`handleXPosition(): ${handleXPosition()}`);
                console.log(`handleYPosition(): ${handleYPosition()}`);
                console.log(`handleXPosition.counterX: ${handleXPosition.counterX}`);
                console.log(`handleYPosition.counterY: ${handleYPosition.counterY}`);
                console.log(`setX: ${setX()}`);
                console.log(`seY: ${setY()}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsaUJBQWlCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxpQkFBaUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlCQUFpQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsaUJBQWlCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrQkFBa0I7QUFDcEUsa0RBQWtELGtCQUFrQjtBQUNwRSx5REFBeUQseUJBQXlCO0FBQ2xGLHlEQUF5RCx5QkFBeUI7QUFDbEYscUNBQXFDLE9BQU87QUFDNUMsb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdCQUF3QixvQkFBb0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0Isc0NBQXNDLGtCQUFrQix5QkFBeUIsaUJBQWlCO0FBQzdLO0FBQ0EsdUJBQXVCLHdCQUF3QixvQkFBb0I7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VFdktBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XHJcbiAgICB3aWR0aDogNTAwLFxyXG4gICAgaGVpZ2h0OiAzNjAsXHJcbn0pO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBwbHVnaW5NZXNzYWdlID0+IHtcclxuICAgICgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBwbHVBcnIgPSBwbHVnaW5NZXNzYWdlLm5hbWVzQXJyO1xyXG4gICAgICAgIGNvbnN0IGxpbmtBcnIgPSBwbHVnaW5NZXNzYWdlLmxpbmtBcnI7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzQXJyID0gW107XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL9GB0LjQvdGF0YDQvtC90L3Ri9C5INC30LDQv9GA0L7RgS8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBpdGVyTGlua3NBcnJheSA9IGxpbmtBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBpdGVyUGx1QXJyYXkgPSBwbHVBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBsaW5rc0FycmF5ID0gQXJyYXkuZnJvbShpdGVyTGlua3NBcnJheSk7XHJcbiAgICAgICAgbGV0IHBsdUFycmF5ID0gQXJyYXkuZnJvbShpdGVyUGx1QXJyYXkpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zUGVyUm93ID0gMTA7XHJcbiAgICAgICAgZnVuY3Rpb24gY291bnRlckZvclhQb3NpdGlvbigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyLmNvdW50ZXJYID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CV0KLQp9CY0JrQkCDQpTogJHtjb3VudGVyLmNvdW50ZXJYfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLmNvdW50ZXJYID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQldCi0KfQmNCa0JAg0KU6ICR7Y291bnRlci5jb3VudGVyWH1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlci5jb3VudGVyWCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50ZXIuY291bnRlclggPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY291bnRlckZvcllQb3NpdGlvbigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyLmNvdW50ZXJZID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CV0KLQp9CY0JrQkCBZOiAke2NvdW50ZXIuY291bnRlcll9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIuY291bnRlclkgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CV0KLQp9CY0JrQkCBZOiAke2NvdW50ZXIuY291bnRlcll9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIuY291bnRlclkrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudGVyLmNvdW50ZXJZID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYW5kbGVYUG9zaXRpb24gPSBjb3VudGVyRm9yWFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IGhhbmRsZVlQb3NpdGlvbiA9IGNvdW50ZXJGb3JZUG9zaXRpb24oKTtcclxuICAgICAgICBmdW5jdGlvbiBzZXRYUG9zKCkge1xyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IDI4MDtcclxuICAgICAgICAgICAgbGV0IHhQb3MgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVYUG9zaXRpb24uY291bnRlclg7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0JfQndCQ0KfQldCd0JjQlSBwb3NpdGlvbiBYOiAke3Bvc2l0aW9ufWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZVhQb3NpdGlvbi5jb3VudGVyWCA+PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4UG9zID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4UG9zID0geFBvcyArIHN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFlQb3MoKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gMjMwO1xyXG4gICAgICAgICAgICBsZXQgeVBvcyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVlQb3NpdGlvbi5jb3VudGVyWTtcclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5UG9zID0geVBvcyArIHN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geVBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0WCA9IHNldFhQb3MoKTtcclxuICAgICAgICBjb25zdCBzZXRZID0gc2V0WVBvcygpO1xyXG4gICAgICAgIGZvciAobGV0IGVsZW0gb2YgbGlua3NBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4T2ZFbGVtZW50ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RGcmFtZVBvc2l0aW9uWCA9IDUwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWVBbmRTcGFjZVdpZHRoID0gNDc1ICsgNTA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lUG9zaXRpb25YID0gaW5kZXhPZkVsZW1lbnQgKiBmcmFtZUFuZFNwYWNlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaGFuZGxlWFBvc2l0aW9uKCk6ICR7aGFuZGxlWFBvc2l0aW9uKCl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaGFuZGxlWVBvc2l0aW9uKCk6ICR7aGFuZGxlWVBvc2l0aW9uKCl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaGFuZGxlWFBvc2l0aW9uLmNvdW50ZXJYOiAke2hhbmRsZVhQb3NpdGlvbi5jb3VudGVyWH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoYW5kbGVZUG9zaXRpb24uY291bnRlclk6ICR7aGFuZGxlWVBvc2l0aW9uLmNvdW50ZXJZfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNldFg6ICR7c2V0WCgpfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlWTogJHtzZXRZKCl9YCk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWdMaW5rID0geWllbGQgZmlnbWEuY3JlYXRlSW1hZ2VBc3luYyhlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWdMaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0YW5nbGVPYmplY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGVPYmplY3QucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGVPYmplY3QuZmlsbHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdJTUFHRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGltZ0xpbmsuaGFzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTW9kZTogJ0ZJVCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1lWFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mRWxlbWVudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVhQb3NpdGlvbiA9IGZpcnN0RnJhbWVQb3NpdGlvblg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVhQb3NpdGlvbiA9IGN1cnJlbnRGcmFtZVBvc2l0aW9uWDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnggPSBzZXRYKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUueSA9IHNldFkoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5yZXNpemUoNDc1LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBsaW5rc0FycmF5LmluZGV4T2YoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lTmFtZSA9IHBsdUFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEZyYW1lTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RnJhbWVOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBjdXJyZW50RnJhbWVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUic7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVjdGFuZ2xlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnNBcnIucHVzaChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5jaGFyYWN0ZXJzID0gKCdFUlJPUjonICsgJ1xcbicgKyAoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmZvbnRTaXplID0gMjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnkgPSBzZXRZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUucmVzaXplKDQ3NSwgNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVOYW1lID0gcGx1QXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChlcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvZyA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICBsb2cueCA9IDUwO1xyXG4gICAgICAgIGxvZy55ID0gLTUwO1xyXG4gICAgICAgIGxvZy5jaGFyYWN0ZXJzID0gKGDQmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0LjQvNGR0L06ICR7cGx1QXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGA0LDQsdC+0YLQsNC90L3Ri9GFINGB0YHRi9C70L7QujogJHtsaW5rc0FycmF5Lmxlbmd0aH0uIFxcbtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0YjQuNCx0L7QujogJHtlcnJvcnNBcnIubGVuZ3RofWApO1xyXG4gICAgICAgIGxvZy5mb250U2l6ZSA9IDE4O1xyXG4gICAgICAgIGxvZy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG4gICAgfSkpKCk7XHJcbn07XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvY29kZS50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9