/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (function() {


// function positionCounter() {
//     function counter() {
//         if (counter.value >= itemsPerRow) {
//             return counter.value = 1
//         } else {
//             return counter.value++
//         }
//     }
//
//     counter.value = 0
//     return counter
// }
//
// let handlePosition = positionCounter()
//
// function setXPos() {
//     let step = 280
//     let xPos = 0;
//     return function () {
//         const position = handlePosition.value
//         console.log(`ЗНАЧЕНИЕ position в setXPos: ${position}`)
//         if (position >= itemsPerRow) {
//             console.log(`ЗНАЧЕНИЕ position в setXPos после is: ${position}`)
//             return xPos = 0
//         } else {
//             console.log(`ЗНАЧЕНИЕ position в setXPos после is: ${position}`)
//             return xPos = xPos + step
//         }
//     }
// }
//
// function setYPos() {
//     let step = 230
//     let yPos = 0;
//     return function () {
//         const position = handlePosition.value
//         console.log(`ЗНАЧЕНИЕ position в setYPos: ${position}`)
//         if (position == itemsPerRow) {
//             return yPos = yPos + step
//         } else {
//             return yPos
//         }
//     }
// }
//
// const setX = setXPos()
// const setY = setYPos()
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
        // function counterForXPosition() {
        //
        //     function counter() {
        //         if (counter.counterX >= itemsPerRow) {
        //             console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Х: ${counter.counterX}`)
        //             return counter.counterX = 1
        //         }
        //         else {
        //             console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Х: ${counter.counterX}`)
        //             return counter.counterX++
        //         }
        //     }
        //
        //     counter.counterX = 0
        //     return counter
        // }
        //
        // function counterForYPosition() {
        //     function counter() {
        //         if (counter.counterY >= itemsPerRow) {
        //             console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Y: ${counter.counterY}`)
        //             return counter.counterY = 1
        //         } else {
        //             console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Y: ${counter.counterY}`)
        //             return counter.counterY++
        //         }
        //     }
        //
        //     counter.counterY = 0
        //     return counter
        // }
        //
        // let handleXPosition = counterForXPosition();
        // let handleYPosition = counterForYPosition();
        //
        // function setXPos() {
        //     let step = 280
        //     let xPos = 0;
        //     return function () {
        //         const position = handleXPosition.counterX
        //         console.log(`ЗНАЧЕНИЕ position X: ${position}`)
        //         if (handleXPosition.counterX >= itemsPerRow ) {
        //             return xPos = 0
        //         } else {
        //             return xPos = xPos + step
        //         }
        //     }
        // }
        //
        // function setYPos() {
        //     let step = 230
        //     let yPos = 0;
        //     return function () {
        //         const position = handleYPosition.counterY
        //         if (position == itemsPerRow) {
        //             return yPos = yPos + step
        //         } else {
        //             return yPos
        //         }
        //     }
        // }
        //
        // const setX = setXPos()
        // const setY = setYPos()
        function positionCounter() {
            function counter() {
                if (counter.value >= itemsPerRow) {
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
            let step = 280;
            let xPos = 0;
            return function () {
                const position = handleXCounter.value;
                console.log(`ЗНАЧЕНИЕ position в setXPos: ${position}`);
                if (position >= itemsPerRow) {
                    //console.log(`ЗНАЧЕНИЕ position в setXPos после if: ${position}`)
                    return xPos = 0;
                }
                else {
                    // console.log(`ЗНАЧЕНИЕ position в setXPos после else: ${position}`)
                    return xPos = xPos + step;
                }
            };
        }
        function setYPos() {
            let step = 230;
            let yPos = 0;
            return function () {
                const position = handleYCounter.value;
                console.log(`ЗНАЧЕНИЕ position в setYPos: ${position}`);
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
                //console.log(`handleXPosition(): ${handleXPosition()}`)
                //console.log(`handleYPosition(): ${handleYPosition()}`)
                //console.log(`handleXPosition.counterX: ${handleXPosition.counterX}`)
                //console.log(`handleYPosition.counterY: ${handleYPosition.counterY}`)
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${handleXCounter()}`);
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${handleYCounter()}`);
                console.log(`setX: ${setX()}`);
                console.log(`setY: ${setY()}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFO0FBQ0E7QUFDQSwyREFBMkQsZ0JBQWdCLHNDQUFzQyxrQkFBa0IseUJBQXlCLGlCQUFpQjtBQUM3SztBQUNBLHVCQUF1Qix3QkFBd0Isb0JBQW9CO0FBQ25FO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVRTNRQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9JbWFnZSBjb2xsZWN0b3Ivd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG4vLyBmdW5jdGlvbiBwb3NpdGlvbkNvdW50ZXIoKSB7XHJcbi8vICAgICBmdW5jdGlvbiBjb3VudGVyKCkge1xyXG4vLyAgICAgICAgIGlmIChjb3VudGVyLnZhbHVlID49IGl0ZW1zUGVyUm93KSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlID0gMVxyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlKytcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBjb3VudGVyLnZhbHVlID0gMFxyXG4vLyAgICAgcmV0dXJuIGNvdW50ZXJcclxuLy8gfVxyXG4vL1xyXG4vLyBsZXQgaGFuZGxlUG9zaXRpb24gPSBwb3NpdGlvbkNvdW50ZXIoKVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBzZXRYUG9zKCkge1xyXG4vLyAgICAgbGV0IHN0ZXAgPSAyODBcclxuLy8gICAgIGxldCB4UG9zID0gMDtcclxuLy8gICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVQb3NpdGlvbi52YWx1ZVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVIHBvc2l0aW9uINCyIHNldFhQb3M6ICR7cG9zaXRpb259YClcclxuLy8gICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUgcG9zaXRpb24g0LIgc2V0WFBvcyDQv9C+0YHQu9C1IGlzOiAke3Bvc2l0aW9ufWApXHJcbi8vICAgICAgICAgICAgIHJldHVybiB4UG9zID0gMFxyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVIHBvc2l0aW9uINCyIHNldFhQb3Mg0L/QvtGB0LvQtSBpczogJHtwb3NpdGlvbn1gKVxyXG4vLyAgICAgICAgICAgICByZXR1cm4geFBvcyA9IHhQb3MgKyBzdGVwXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHNldFlQb3MoKSB7XHJcbi8vICAgICBsZXQgc3RlcCA9IDIzMFxyXG4vLyAgICAgbGV0IHlQb3MgPSAwO1xyXG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVBvc2l0aW9uLnZhbHVlXHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUgcG9zaXRpb24g0LIgc2V0WVBvczogJHtwb3NpdGlvbn1gKVxyXG4vLyAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBpdGVtc1BlclJvdykge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4geVBvcyA9IHlQb3MgKyBzdGVwXHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHlQb3NcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3Qgc2V0WCA9IHNldFhQb3MoKVxyXG4vLyBjb25zdCBzZXRZID0gc2V0WVBvcygpXHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XHJcbiAgICB3aWR0aDogNTAwLFxyXG4gICAgaGVpZ2h0OiAzNjAsXHJcbn0pO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBwbHVnaW5NZXNzYWdlID0+IHtcclxuICAgICgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBwbHVBcnIgPSBwbHVnaW5NZXNzYWdlLm5hbWVzQXJyO1xyXG4gICAgICAgIGNvbnN0IGxpbmtBcnIgPSBwbHVnaW5NZXNzYWdlLmxpbmtBcnI7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzQXJyID0gW107XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vL9GB0LjQvdGF0YDQvtC90L3Ri9C5INC30LDQv9GA0L7RgS8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBpdGVyTGlua3NBcnJheSA9IGxpbmtBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBpdGVyUGx1QXJyYXkgPSBwbHVBcnJbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGxldCBsaW5rc0FycmF5ID0gQXJyYXkuZnJvbShpdGVyTGlua3NBcnJheSk7XHJcbiAgICAgICAgbGV0IHBsdUFycmF5ID0gQXJyYXkuZnJvbShpdGVyUGx1QXJyYXkpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zUGVyUm93ID0gMTA7XHJcbiAgICAgICAgLy8gZnVuY3Rpb24gY291bnRlckZvclhQb3NpdGlvbigpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBmdW5jdGlvbiBjb3VudGVyKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGNvdW50ZXIuY291bnRlclggPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0JfQndCQ0KfQldCd0JjQlSDQodCn0JXQotCn0JjQmtCQINClOiAke2NvdW50ZXIuY291bnRlclh9YClcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gY291bnRlci5jb3VudGVyWCA9IDFcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVINCh0KfQldCi0KfQmNCa0JAg0KU6ICR7Y291bnRlci5jb3VudGVyWH1gKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLmNvdW50ZXJYKytcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGNvdW50ZXIuY291bnRlclggPSAwXHJcbiAgICAgICAgLy8gICAgIHJldHVybiBjb3VudGVyXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gY291bnRlckZvcllQb3NpdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgZnVuY3Rpb24gY291bnRlcigpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChjb3VudGVyLmNvdW50ZXJZID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CV0KLQp9CY0JrQkCBZOiAke2NvdW50ZXIuY291bnRlcll9YClcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gY291bnRlci5jb3VudGVyWSA9IDFcclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CV0KLQp9CY0JrQkCBZOiAke2NvdW50ZXIuY291bnRlcll9YClcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gY291bnRlci5jb3VudGVyWSsrXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBjb3VudGVyLmNvdW50ZXJZID0gMFxyXG4gICAgICAgIC8vICAgICByZXR1cm4gY291bnRlclxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBoYW5kbGVYUG9zaXRpb24gPSBjb3VudGVyRm9yWFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gbGV0IGhhbmRsZVlQb3NpdGlvbiA9IGNvdW50ZXJGb3JZUG9zaXRpb24oKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNldFhQb3MoKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBzdGVwID0gMjgwXHJcbiAgICAgICAgLy8gICAgIGxldCB4UG9zID0gMDtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaGFuZGxlWFBvc2l0aW9uLmNvdW50ZXJYXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhg0JfQndCQ0KfQldCd0JjQlSBwb3NpdGlvbiBYOiAke3Bvc2l0aW9ufWApXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoaGFuZGxlWFBvc2l0aW9uLmNvdW50ZXJYID49IGl0ZW1zUGVyUm93ICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiB4UG9zID0gMFxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4geFBvcyA9IHhQb3MgKyBzdGVwXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBmdW5jdGlvbiBzZXRZUG9zKCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgc3RlcCA9IDIzMFxyXG4gICAgICAgIC8vICAgICBsZXQgeVBvcyA9IDA7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVlQb3NpdGlvbi5jb3VudGVyWVxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHBvc2l0aW9uID09IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHlQb3MgPSB5UG9zICsgc3RlcFxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4geVBvc1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc3Qgc2V0WCA9IHNldFhQb3MoKVxyXG4gICAgICAgIC8vIGNvbnN0IHNldFkgPSBzZXRZUG9zKClcclxuICAgICAgICBmdW5jdGlvbiBwb3NpdGlvbkNvdW50ZXIoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlci52YWx1ZSA+PSBpdGVtc1BlclJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyLnZhbHVlKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFuZGxlWENvdW50ZXIgPSBwb3NpdGlvbkNvdW50ZXIoKTtcclxuICAgICAgICBsZXQgaGFuZGxlWUNvdW50ZXIgPSBwb3NpdGlvbkNvdW50ZXIoKTtcclxuICAgICAgICBmdW5jdGlvbiBzZXRYUG9zKCkge1xyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IDI4MDtcclxuICAgICAgICAgICAgbGV0IHhQb3MgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBoYW5kbGVYQ291bnRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVIHBvc2l0aW9uINCyIHNldFhQb3M6ICR7cG9zaXRpb259YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVIHBvc2l0aW9uINCyIHNldFhQb3Mg0L/QvtGB0LvQtSBpZjogJHtwb3NpdGlvbn1gKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4UG9zID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGDQl9Cd0JDQp9CV0J3QmNCVIHBvc2l0aW9uINCyIHNldFhQb3Mg0L/QvtGB0LvQtSBlbHNlOiAke3Bvc2l0aW9ufWApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSB4UG9zICsgc3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0WVBvcygpIHtcclxuICAgICAgICAgICAgbGV0IHN0ZXAgPSAyMzA7XHJcbiAgICAgICAgICAgIGxldCB5UG9zID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaGFuZGxlWUNvdW50ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0JfQndCQ0KfQldCd0JjQlSBwb3NpdGlvbiDQsiBzZXRZUG9zOiAke3Bvc2l0aW9ufWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlQb3MgPSB5UG9zICsgc3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5UG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRYID0gc2V0WFBvcygpO1xyXG4gICAgICAgIGNvbnN0IHNldFkgPSBzZXRZUG9zKCk7XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbSBvZiBsaW5rc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhPZkVsZW1lbnQgPSBsaW5rc0FycmF5LmluZGV4T2YoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEZyYW1lUG9zaXRpb25YID0gNTA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFtZUFuZFNwYWNlV2lkdGggPSA0NzUgKyA1MDtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVQb3NpdGlvblggPSBpbmRleE9mRWxlbWVudCAqIGZyYW1lQW5kU3BhY2VXaWR0aDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGhhbmRsZVhQb3NpdGlvbigpOiAke2hhbmRsZVhQb3NpdGlvbigpfWApXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBoYW5kbGVZUG9zaXRpb24oKTogJHtoYW5kbGVZUG9zaXRpb24oKX1gKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgaGFuZGxlWFBvc2l0aW9uLmNvdW50ZXJYOiAke2hhbmRsZVhQb3NpdGlvbi5jb3VudGVyWH1gKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgaGFuZGxlWVBvc2l0aW9uLmNvdW50ZXJZOiAke2hhbmRsZVlQb3NpdGlvbi5jb3VudGVyWX1gKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCDQpTogJHtoYW5kbGVYQ291bnRlcigpfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCBZOiAke2hhbmRsZVlDb3VudGVyKCl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc2V0WDogJHtzZXRYKCl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc2V0WTogJHtzZXRZKCl9YCk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWdMaW5rID0geWllbGQgZmlnbWEuY3JlYXRlSW1hZ2VBc3luYyhlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWdMaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0YW5nbGVPYmplY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGVPYmplY3QucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGVPYmplY3QuZmlsbHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdJTUFHRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGltZ0xpbmsuaGFzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTW9kZTogJ0ZJVCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1lWFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mRWxlbWVudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVhQb3NpdGlvbiA9IGZpcnN0RnJhbWVQb3NpdGlvblg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVhQb3NpdGlvbiA9IGN1cnJlbnRGcmFtZVBvc2l0aW9uWDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnggPSBzZXRYKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUueSA9IHNldFkoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5yZXNpemUoNDc1LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBsaW5rc0FycmF5LmluZGV4T2YoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lTmFtZSA9IHBsdUFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEZyYW1lTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RnJhbWVOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lLm5hbWUgPSBjdXJyZW50RnJhbWVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUic7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVjdGFuZ2xlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnNBcnIucHVzaChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5jaGFyYWN0ZXJzID0gKCdFUlJPUjonICsgJ1xcbicgKyAoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmZvbnRTaXplID0gMjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnkgPSBzZXRZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUucmVzaXplKDQ3NSwgNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVOYW1lID0gcGx1QXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChlcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvZyA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICBsb2cueCA9IDUwO1xyXG4gICAgICAgIGxvZy55ID0gLTUwO1xyXG4gICAgICAgIGxvZy5jaGFyYWN0ZXJzID0gKGDQmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0LjQvNGR0L06ICR7cGx1QXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGA0LDQsdC+0YLQsNC90L3Ri9GFINGB0YHRi9C70L7QujogJHtsaW5rc0FycmF5Lmxlbmd0aH0uIFxcbtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0YjQuNCx0L7QujogJHtlcnJvcnNBcnIubGVuZ3RofWApO1xyXG4gICAgICAgIGxvZy5mb250U2l6ZSA9IDE4O1xyXG4gICAgICAgIGxvZy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG4gICAgfSkpKCk7XHJcbn07XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvY29kZS50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9