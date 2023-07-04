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
        // function setXPos() {
        //     let step = 525
        //     let xPos = 0;
        //     return function () {
        //         const position = handleXCounter.value
        //         if (position >= itemsPerRow) {
        //             return xPos = 0;
        //         } else {
        //             return xPos = xPos + step
        //         }
        //     }
        // }
        //
        // function setYPos() {
        //     let step = 450
        //     let yPos = 0;
        //     return function () {
        //         const position = handleYCounter.value
        //         if (position >= itemsPerRow) {
        //             return yPos = yPos + step
        //         } else {
        //             return yPos
        //         }
        //     }
        // }
        // const setX = setXPos()
        // const setY = setYPos()
        function setPosition(counter, stepRate, position) {
            const counterValue = counter.value;
            if (counter === 'handleXCounter') {
                if (counterValue >= itemsPerRow) {
                    return position = 0;
                }
                else {
                    return position = position + stepRate;
                }
            }
            else {
                if (counterValue >= itemsPerRow) {
                    return position = position + stepRate;
                }
                else {
                    return position;
                }
            }
        }
        const setX = setPosition(handleXCounter, 525, 0);
        const setY = setPosition(handleYCounter, 450, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxxQkFBcUI7QUFDekUsb0RBQW9ELHFCQUFxQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdCQUF3QixvQkFBb0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0Isc0NBQXNDLGtCQUFrQix5QkFBeUIsaUJBQWlCO0FBQzdLO0FBQ0EsdUJBQXVCLHdCQUF3QixvQkFBb0I7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VFeEtBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3IvLi9zcmMvY29kZS50cyIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XHJcbiAgICB3aWR0aDogNTAwLFxyXG4gICAgaGVpZ2h0OiAzNjAsXHJcbn0pO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBwbHVnaW5NZXNzYWdlID0+IHtcclxuICAgICgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBwbHVBcnIgPSBwbHVnaW5NZXNzYWdlLm5hbWVzQXJyO1xyXG4gICAgICAgIGNvbnN0IGxpbmtBcnIgPSBwbHVnaW5NZXNzYWdlLmxpbmtBcnI7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzQXJyID0gW107XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL9GB0LjQvdGF0YDQvtC90L3Ri9C5INC30LDQv9GA0L7RgS8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBpdGVyTGlua3NBcnJheSA9IGxpbmtBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBpdGVyUGx1QXJyYXkgPSBwbHVBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBsaW5rc0FycmF5ID0gQXJyYXkuZnJvbShpdGVyTGlua3NBcnJheSk7XHJcbiAgICAgICAgbGV0IHBsdUFycmF5ID0gQXJyYXkuZnJvbShpdGVyUGx1QXJyYXkpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zUGVyUm93ID0gMTA7XHJcbiAgICAgICAgZnVuY3Rpb24gcG9zaXRpb25Db3VudGVyKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIudmFsdWUgPT0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlci52YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlci52YWx1ZSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50ZXIudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhhbmRsZVhDb3VudGVyID0gcG9zaXRpb25Db3VudGVyKCk7XHJcbiAgICAgICAgbGV0IGhhbmRsZVlDb3VudGVyID0gcG9zaXRpb25Db3VudGVyKCk7XHJcbiAgICAgICAgLy8gZnVuY3Rpb24gc2V0WFBvcygpIHtcclxuICAgICAgICAvLyAgICAgbGV0IHN0ZXAgPSA1MjVcclxuICAgICAgICAvLyAgICAgbGV0IHhQb3MgPSAwO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVYQ291bnRlci52YWx1ZVxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHBvc2l0aW9uID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSAwO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4geFBvcyA9IHhQb3MgKyBzdGVwXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBmdW5jdGlvbiBzZXRZUG9zKCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgc3RlcCA9IDQ1MFxyXG4gICAgICAgIC8vICAgICBsZXQgeVBvcyA9IDA7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVlDb3VudGVyLnZhbHVlXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4geVBvcyA9IHlQb3MgKyBzdGVwXHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiB5UG9zXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc3Qgc2V0WCA9IHNldFhQb3MoKVxyXG4gICAgICAgIC8vIGNvbnN0IHNldFkgPSBzZXRZUG9zKClcclxuICAgICAgICBmdW5jdGlvbiBzZXRQb3NpdGlvbihjb3VudGVyLCBzdGVwUmF0ZSwgcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgY291bnRlclZhbHVlID0gY291bnRlci52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPT09ICdoYW5kbGVYQ291bnRlcicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyVmFsdWUgPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uID0gcG9zaXRpb24gKyBzdGVwUmF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyVmFsdWUgPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb24gPSBwb3NpdGlvbiArIHN0ZXBSYXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFggPSBzZXRQb3NpdGlvbihoYW5kbGVYQ291bnRlciwgNTI1LCAwKTtcclxuICAgICAgICBjb25zdCBzZXRZID0gc2V0UG9zaXRpb24oaGFuZGxlWUNvdW50ZXIsIDQ1MCwgMCk7XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBsaW5rc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhPZkVsZW1lbnQgPSBsaW5rc0FycmF5LmluZGV4T2YoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lUG9zaXRpb25YID0gNTA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZUFuZFNwYWNlV2lkdGggPSA0NzUgKyA1MDtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVQb3NpdGlvblggPSBpbmRleE9mRWxlbWVudCAqIGZyYW1lQW5kU3BhY2VXaWR0aDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQgdCi0KfQmNCa0JAg0KU6ICR7aGFuZGxlWENvdW50ZXIudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0JfQndCQ0KfQldCd0JjQlSDQodCn0IHQotCn0JjQmtCQIFk6ICR7aGFuZGxlWUNvdW50ZXIudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVYQ291bnRlcigpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlWUNvdW50ZXIoKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZ0xpbmsgPSB5aWVsZCBmaWdtYS5jcmVhdGVJbWFnZUFzeW5jKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZ0xpbmspO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3RhbmdsZU9iamVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3RhbmdsZU9iamVjdC5yZXNpemUoMzk1LCAzMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3RhbmdsZU9iamVjdC5maWxscyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0lNQUdFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSGFzaDogaW1nTGluay5oYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVNb2RlOiAnRklUJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZnJhbWVYUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2ZFbGVtZW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lWFBvc2l0aW9uID0gZmlyc3RGcmFtZVBvc2l0aW9uWDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lWFBvc2l0aW9uID0gY3VycmVudEZyYW1lUG9zaXRpb25YO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUueCA9IHNldFgoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS55ID0gc2V0WSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnJlc2l6ZSg0NzUsIDQwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGxpbmtzQXJyYXkuaW5kZXhPZihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVOYW1lID0gcGx1QXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RnJhbWVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZWN0YW5nbGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yc0Fyci5wdXNoKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0geWllbGQgZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5yZXNpemUoMzk1LCAzMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmNoYXJhY3RlcnMgPSAoJ0VSUk9SOicgKyAnXFxuJyArIChlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQuZm9udFNpemUgPSAyNDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAxLCBnOiAwLCBiOiAwIH0gfV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnggPSBzZXRYKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUueSA9IHNldFkoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5yZXNpemUoNDc1LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBsaW5rc0FycmF5LmluZGV4T2YoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZU5hbWUgPSBwbHVBcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEZyYW1lTmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS5uYW1lID0gY3VycmVudEZyYW1lTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbG9nID0geWllbGQgZmlnbWEuY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xyXG4gICAgICAgIGxvZy54ID0gNTA7XHJcbiAgICAgICAgbG9nLnkgPSAtNTA7XHJcbiAgICAgICAgbG9nLmNoYXJhY3RlcnMgPSAoYNCa0L7Qu9C40YfQtdGB0YLQstC+INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDQuNC80ZHQvTogJHtwbHVBcnJheS5sZW5ndGh9LiBcXG7QmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0YHRgdGL0LvQvtC6OiAke2xpbmtzQXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7RiNC40LHQvtC6OiAke2Vycm9yc0Fyci5sZW5ndGh9YCk7XHJcbiAgICAgICAgbG9nLmZvbnRTaXplID0gMTg7XHJcbiAgICAgICAgbG9nLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgIHlpZWxkIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgICB9KSkoKTtcclxufTtcclxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=