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
// class Card {
//     private _name: any;
//     private _image: any;
//     private _imgLink: Image;
//     private _rectangleObject: RectangleNode;
//     private _frame: FrameNode;
//
//     async constructor(name, image, linksArray, pluArray) {
//         this._name = name;
//         this._image = image;
//         this._imgLink = await figma.createImageAsync(this._image)
//         this._rectangleObject = figma.createRectangle()
//         this._frame = figma.createFrame();
//     }
//
//     // _generateRectangleObject() {
//     //     return {
//     //         rectangleObject: this.rectangleObject,
//     //     }
//     // }
//
//     generateRectangleObject() {
//         this._rectangleObject.resize(395, 320)
//         this._rectangleObject.fills = [
//             {
//                 type: 'IMAGE',
//                 imageHash: this._imgLink.hash,
//                 scaleMode: 'FIT'
//             }
//         ]
//     }
//
//     generateFrame(){
//         this._frame.x = setX()
//         this._frame.y = setY()
//         this._frame.resize(475, 400)
//         let currentIndex = linksArray.indexOf(this);
//         let currentFrameName = pluArray[currentIndex]
//         if (typeof currentFrameName === "string") {
//             this._frame.name = currentFrameName
//         }
//         this._frame.layoutMode = 'HORIZONTAL'
//         this._frame.horizontalPadding = 40
//         this._frame.counterAxisAlignItems = 'CENTER'
//         this._frame.appendChild(this._rectangleObject)
//     }
// }
// rectangleObject.resize(395, 320)
// rectangleObject.fills = [
//     {
//         type: 'IMAGE',
//         imageHash: imgLink.hash,
//         scaleMode: 'FIT'
//     }
// ]
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
        // class Card {
        //     private _name: any;
        //     private readonly _image: any;
        //     private _imgLink: Image;
        //     private readonly _rectangleObject: RectangleNode;
        //     private _frame: FrameNode;
        //
        //     constructor(
        //         // name,
        //         // image,
        //         // linksArray,
        //         // pluArray
        //     ) {
        //         //this._name = name;
        //         //this._image = image;
        //         this._imgLink = await figma.createImageAsync(this._image)
        //         this._rectangleObject = figma.createRectangle()
        //         this._frame = figma.createFrame();
        //     }
        //
        //     // _generateRectangleObject() {
        //     //     return {
        //     //         rectangleObject: this.rectangleObject,
        //     //     }
        //     // }
        //
        //     generateRectangleObject() {
        //         this._rectangleObject.resize(395, 320)
        //         this._rectangleObject.fills = [
        //             {
        //                 type: 'IMAGE',
        //                 imageHash: this._imgLink.hash,
        //                 scaleMode: 'FIT'
        //             }
        //         ]
        //     }
        //
        //     generateFrame(){
        //         this._frame.x = setX()
        //         this._frame.y = setY()
        //         this._frame.resize(475, 400)
        //         let currentIndex = linksArray.indexOf(this);
        //         let currentFrameName = pluArray[currentIndex]
        //         if (typeof currentFrameName === "string") {
        //             this._frame.name = currentFrameName
        //         }
        //         this._frame.layoutMode = 'HORIZONTAL'
        //         this._frame.horizontalPadding = 40
        //         this._frame.counterAxisAlignItems = 'CENTER'
        //         this._frame.appendChild(this._rectangleObject)
        //     }
        // }
        class CreateRectangle {
            createRectangle(imageData) {
                const rect = figma.createRectangle();
                if (imageData) {
                    rect.resize(395, 320);
                    //rect.resize(imageData.width, imageData.height);
                    rect.fills = [{ type: 'IMAGE', imageHash: imageData.hash, scaleMode: 'FIT' }];
                }
                return rect;
            }
        }
        class CreateImage extends CreateRectangle {
            createImageAsync(imageData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const image = yield figma.createImageAsync(imageData);
                    //const { width, height } = await image.getSizeAsync();
                    return { hash: image.hash };
                    //return {hash: image.hash, width, height};
                    //return image
                });
            }
        }
        for (let elem of linksArray) {
            if (typeof elem === "string") {
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${handleXCounter.value}`);
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${handleYCounter.value}`);
                handleXCounter();
                handleYCounter();
                // let currentIndex = linksArray.indexOf(elem);
                // console.log(currentIndex)
                // let currentFrameName = pluArray[currentIndex]
                try {
                    const newRectangle = new CreateRectangle();
                    const newImage = new CreateImage();
                    const image = yield newImage.createImageAsync(elem);
                    newRectangle.createRectangle(image);
                    console.log(image);
                    //elem = new Card()
                    //
                    // let imgLink = await figma.createImageAsync(elem)
                    // console.log(imgLink)
                    // const rectangleObject = figma.createRectangle()
                    // rectangleObject.resize(395, 320)
                    // rectangleObject.fills = [
                    //     {
                    //         type: 'IMAGE',
                    //         imageHash: imgLink.hash,
                    //         scaleMode: 'FIT'
                    //     }
                    // ]
                    //
                    // const frame = figma.createFrame();
                    // frame.x = setX()
                    // frame.y = setY()
                    // frame.resize(475, 400)
                    // let currentIndex = linksArray.indexOf(elem);
                    // console.log(currentIndex)
                    // let currentFrameName = pluArray[currentIndex]
                    // console.log(currentFrameName)
                    // if (typeof currentFrameName === "string") {
                    //     frame.name = currentFrameName
                    // }
                    // frame.layoutMode = 'HORIZONTAL'
                    // frame.horizontalPadding = 40
                    // frame.counterAxisAlignItems = 'CENTER'
                    // frame.appendChild(rectangleObject)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7QUFDTDs7Ozs7Ozs7VUVqU0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0ltYWdlIGNvbGxlY3Rvci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vSW1hZ2UgY29sbGVjdG9yL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBoZWlnaHQ6IDM2MCxcclxufSk7XHJcbmNvbnN0IGNhcmQgPSB7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGZyYW1lOiB7XHJcbiAgICAgICAgd2lkdGg6ICcnLFxyXG4gICAgICAgIGhlaWdodDogJycsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICB3aWR0aDogJycsXHJcbiAgICAgICAgaGVpZ2h0OiAnJyxcclxuICAgICAgICBzcmM6ICcnLFxyXG4gICAgfSxcclxufTtcclxuLy8gY2xhc3MgQ2FyZCB7XHJcbi8vICAgICBwcml2YXRlIF9uYW1lOiBhbnk7XHJcbi8vICAgICBwcml2YXRlIF9pbWFnZTogYW55O1xyXG4vLyAgICAgcHJpdmF0ZSBfaW1nTGluazogSW1hZ2U7XHJcbi8vICAgICBwcml2YXRlIF9yZWN0YW5nbGVPYmplY3Q6IFJlY3RhbmdsZU5vZGU7XHJcbi8vICAgICBwcml2YXRlIF9mcmFtZTogRnJhbWVOb2RlO1xyXG4vL1xyXG4vLyAgICAgYXN5bmMgY29uc3RydWN0b3IobmFtZSwgaW1hZ2UsIGxpbmtzQXJyYXksIHBsdUFycmF5KSB7XHJcbi8vICAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbi8vICAgICAgICAgdGhpcy5faW1hZ2UgPSBpbWFnZTtcclxuLy8gICAgICAgICB0aGlzLl9pbWdMaW5rID0gYXdhaXQgZmlnbWEuY3JlYXRlSW1hZ2VBc3luYyh0aGlzLl9pbWFnZSlcclxuLy8gICAgICAgICB0aGlzLl9yZWN0YW5nbGVPYmplY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKVxyXG4vLyAgICAgICAgIHRoaXMuX2ZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIC8vIF9nZW5lcmF0ZVJlY3RhbmdsZU9iamVjdCgpIHtcclxuLy8gICAgIC8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgLy8gICAgICAgICByZWN0YW5nbGVPYmplY3Q6IHRoaXMucmVjdGFuZ2xlT2JqZWN0LFxyXG4vLyAgICAgLy8gICAgIH1cclxuLy8gICAgIC8vIH1cclxuLy9cclxuLy8gICAgIGdlbmVyYXRlUmVjdGFuZ2xlT2JqZWN0KCkge1xyXG4vLyAgICAgICAgIHRoaXMuX3JlY3RhbmdsZU9iamVjdC5yZXNpemUoMzk1LCAzMjApXHJcbi8vICAgICAgICAgdGhpcy5fcmVjdGFuZ2xlT2JqZWN0LmZpbGxzID0gW1xyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICB0eXBlOiAnSU1BR0UnLFxyXG4vLyAgICAgICAgICAgICAgICAgaW1hZ2VIYXNoOiB0aGlzLl9pbWdMaW5rLmhhc2gsXHJcbi8vICAgICAgICAgICAgICAgICBzY2FsZU1vZGU6ICdGSVQnXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICBdXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBnZW5lcmF0ZUZyYW1lKCl7XHJcbi8vICAgICAgICAgdGhpcy5fZnJhbWUueCA9IHNldFgoKVxyXG4vLyAgICAgICAgIHRoaXMuX2ZyYW1lLnkgPSBzZXRZKClcclxuLy8gICAgICAgICB0aGlzLl9mcmFtZS5yZXNpemUoNDc1LCA0MDApXHJcbi8vICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGxpbmtzQXJyYXkuaW5kZXhPZih0aGlzKTtcclxuLy8gICAgICAgICBsZXQgY3VycmVudEZyYW1lTmFtZSA9IHBsdUFycmF5W2N1cnJlbnRJbmRleF1cclxuLy8gICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5fZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWVcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgdGhpcy5fZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJ1xyXG4vLyAgICAgICAgIHRoaXMuX2ZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gNDBcclxuLy8gICAgICAgICB0aGlzLl9mcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJ1xyXG4vLyAgICAgICAgIHRoaXMuX2ZyYW1lLmFwcGVuZENoaWxkKHRoaXMuX3JlY3RhbmdsZU9iamVjdClcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyByZWN0YW5nbGVPYmplY3QucmVzaXplKDM5NSwgMzIwKVxyXG4vLyByZWN0YW5nbGVPYmplY3QuZmlsbHMgPSBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgdHlwZTogJ0lNQUdFJyxcclxuLy8gICAgICAgICBpbWFnZUhhc2g6IGltZ0xpbmsuaGFzaCxcclxuLy8gICAgICAgICBzY2FsZU1vZGU6ICdGSVQnXHJcbi8vICAgICB9XHJcbi8vIF1cclxuZmlnbWEudWkub25tZXNzYWdlID0gcGx1Z2luTWVzc2FnZSA9PiB7XHJcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgcGx1QXJyID0gcGx1Z2luTWVzc2FnZS5uYW1lc0FycjtcclxuICAgICAgICBjb25zdCBsaW5rQXJyID0gcGx1Z2luTWVzc2FnZS5saW5rQXJyO1xyXG4gICAgICAgIGNvbnN0IGVycm9yc0FyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBwbHVnaW5NZXNzYWdlLmhhbmRsZVhDb3VudGVyO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy/RgdC40L3RhdGA0L7QvdC90YvQuSDQt9Cw0L/RgNC+0YEvLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBsZXQgaXRlckxpbmtzQXJyYXkgPSBsaW5rQXJyW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgICAgICBsZXQgaXRlclBsdUFycmF5ID0gcGx1QXJyW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxuICAgICAgICBsZXQgbGlua3NBcnJheSA9IEFycmF5LmZyb20oaXRlckxpbmtzQXJyYXkpO1xyXG4gICAgICAgIGxldCBwbHVBcnJheSA9IEFycmF5LmZyb20oaXRlclBsdUFycmF5KTtcclxuICAgICAgICBjb25zdCBpdGVtc1BlclJvdyA9IDEwO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ291bnRlcigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyLnZhbHVlID09IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIudmFsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXIudmFsdWUrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYW5kbGVYQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG4gICAgICAgIGxldCBoYW5kbGVZQ291bnRlciA9IHBvc2l0aW9uQ291bnRlcigpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFhQb3MoKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gNTI1O1xyXG4gICAgICAgICAgICBsZXQgeFBvcyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGhhbmRsZVhDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IGl0ZW1zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhQb3MgPSB4UG9zICsgc3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0WVBvcygpIHtcclxuICAgICAgICAgICAgbGV0IHN0ZXAgPSA0NTA7XHJcbiAgICAgICAgICAgIGxldCB5UG9zID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaGFuZGxlWUNvdW50ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPj0gaXRlbXNQZXJSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geVBvcyA9IHlQb3MgKyBzdGVwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFggPSBzZXRYUG9zKCk7XHJcbiAgICAgICAgY29uc3Qgc2V0WSA9IHNldFlQb3MoKTtcclxuICAgICAgICAvLyBjbGFzcyBDYXJkIHtcclxuICAgICAgICAvLyAgICAgcHJpdmF0ZSBfbmFtZTogYW55O1xyXG4gICAgICAgIC8vICAgICBwcml2YXRlIHJlYWRvbmx5IF9pbWFnZTogYW55O1xyXG4gICAgICAgIC8vICAgICBwcml2YXRlIF9pbWdMaW5rOiBJbWFnZTtcclxuICAgICAgICAvLyAgICAgcHJpdmF0ZSByZWFkb25seSBfcmVjdGFuZ2xlT2JqZWN0OiBSZWN0YW5nbGVOb2RlO1xyXG4gICAgICAgIC8vICAgICBwcml2YXRlIF9mcmFtZTogRnJhbWVOb2RlO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gbmFtZSxcclxuICAgICAgICAvLyAgICAgICAgIC8vIGltYWdlLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gbGlua3NBcnJheSxcclxuICAgICAgICAvLyAgICAgICAgIC8vIHBsdUFycmF5XHJcbiAgICAgICAgLy8gICAgICkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy90aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIC8vdGhpcy5faW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2ltZ0xpbmsgPSBhd2FpdCBmaWdtYS5jcmVhdGVJbWFnZUFzeW5jKHRoaXMuX2ltYWdlKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fcmVjdGFuZ2xlT2JqZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKClcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2ZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIC8vIF9nZW5lcmF0ZVJlY3RhbmdsZU9iamVjdCgpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICAgICAgcmVjdGFuZ2xlT2JqZWN0OiB0aGlzLnJlY3RhbmdsZU9iamVjdCxcclxuICAgICAgICAvLyAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGdlbmVyYXRlUmVjdGFuZ2xlT2JqZWN0KCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fcmVjdGFuZ2xlT2JqZWN0LnJlc2l6ZSgzOTUsIDMyMClcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX3JlY3RhbmdsZU9iamVjdC5maWxscyA9IFtcclxuICAgICAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHR5cGU6ICdJTUFHRScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGltYWdlSGFzaDogdGhpcy5faW1nTGluay5oYXNoLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzY2FsZU1vZGU6ICdGSVQnXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgXVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgZ2VuZXJhdGVGcmFtZSgpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZnJhbWUueCA9IHNldFgoKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZnJhbWUueSA9IHNldFkoKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZnJhbWUucmVzaXplKDQ3NSwgNDAwKVxyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGxpbmtzQXJyYXkuaW5kZXhPZih0aGlzKTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBjdXJyZW50RnJhbWVOYW1lID0gcGx1QXJyYXlbY3VycmVudEluZGV4XVxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RnJhbWVOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5fZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWVcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2ZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCdcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2ZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gNDBcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2ZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9mcmFtZS5hcHBlbmRDaGlsZCh0aGlzLl9yZWN0YW5nbGVPYmplY3QpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY2xhc3MgQ3JlYXRlUmVjdGFuZ2xlIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjdGFuZ2xlKGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3QucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3JlY3QucmVzaXplKGltYWdlRGF0YS53aWR0aCwgaW1hZ2VEYXRhLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6ICdJTUFHRScsIGltYWdlSGFzaDogaW1hZ2VEYXRhLmhhc2gsIHNjYWxlTW9kZTogJ0ZJVCcgfV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzcyBDcmVhdGVJbWFnZSBleHRlbmRzIENyZWF0ZVJlY3RhbmdsZSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUltYWdlQXN5bmMoaW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0geWllbGQgZmlnbWEuY3JlYXRlSW1hZ2VBc3luYyhpbWFnZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBhd2FpdCBpbWFnZS5nZXRTaXplQXN5bmMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBoYXNoOiBpbWFnZS5oYXNoIH07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4ge2hhc2g6IGltYWdlLmhhc2gsIHdpZHRoLCBoZWlnaHR9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIGltYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBlbGVtIG9mIGxpbmtzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0JfQndCQ0KfQldCd0JjQlSDQodCn0IHQotCn0JjQmtCQINClOiAke2hhbmRsZVhDb3VudGVyLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCX0J3QkNCn0JXQndCY0JUg0KHQp9CB0KLQp9CY0JrQkCBZOiAke2hhbmRsZVlDb3VudGVyLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlWENvdW50ZXIoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVlDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEluZGV4KVxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRGcmFtZU5hbWUgPSBwbHVBcnJheVtjdXJyZW50SW5kZXhdXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlY3RhbmdsZSA9IG5ldyBDcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBDcmVhdGVJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0geWllbGQgbmV3SW1hZ2UuY3JlYXRlSW1hZ2VBc3luYyhlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdSZWN0YW5nbGUuY3JlYXRlUmVjdGFuZ2xlKGltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbGVtID0gbmV3IENhcmQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGltZ0xpbmsgPSBhd2FpdCBmaWdtYS5jcmVhdGVJbWFnZUFzeW5jKGVsZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1nTGluaylcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByZWN0YW5nbGVPYmplY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY3RhbmdsZU9iamVjdC5yZXNpemUoMzk1LCAzMjApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjdGFuZ2xlT2JqZWN0LmZpbGxzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0eXBlOiAnSU1BR0UnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaW1hZ2VIYXNoOiBpbWdMaW5rLmhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzY2FsZU1vZGU6ICdGSVQnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBdXHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZnJhbWUueCA9IHNldFgoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyYW1lLnkgPSBzZXRZKClcclxuICAgICAgICAgICAgICAgICAgICAvLyBmcmFtZS5yZXNpemUoNDc1LCA0MDApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRJbmRleCA9IGxpbmtzQXJyYXkuaW5kZXhPZihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRGcmFtZU5hbWUgPSBwbHVBcnJheVtjdXJyZW50SW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEZyYW1lTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gNDBcclxuICAgICAgICAgICAgICAgICAgICAvLyBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZyYW1lLmFwcGVuZENoaWxkKHJlY3RhbmdsZU9iamVjdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnNBcnIucHVzaChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQucmVzaXplKDM5NSwgMzIwKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5jaGFyYWN0ZXJzID0gKCdFUlJPUjonICsgJ1xcbicgKyAoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmZvbnRTaXplID0gMjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9IH1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS54ID0gc2V0WCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLnkgPSBzZXRZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUucmVzaXplKDQ3NSwgNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbGlua3NBcnJheS5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVOYW1lID0gcGx1QXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGcmFtZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWUubmFtZSA9IGN1cnJlbnRGcmFtZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSAnSE9SSVpPTlRBTCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSAnQ0VOVEVSJztcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChlcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvZyA9IHlpZWxkIGZpZ21hLmNyZWF0ZVRleHQoKTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcclxuICAgICAgICBsb2cueCA9IDUwO1xyXG4gICAgICAgIGxvZy55ID0gLTUwO1xyXG4gICAgICAgIGxvZy5jaGFyYWN0ZXJzID0gKGDQmtC+0LvQuNGH0LXRgdGC0LLQviDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0LjQvNGR0L06ICR7cGx1QXJyYXkubGVuZ3RofS4gXFxu0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QsdGA0LDQsdC+0YLQsNC90L3Ri9GFINGB0YHRi9C70L7QujogJHtsaW5rc0FycmF5Lmxlbmd0aH0uIFxcbtCa0L7Qu9C40YfQtdGB0YLQstC+INC+0YjQuNCx0L7QujogJHtlcnJvcnNBcnIubGVuZ3RofWApO1xyXG4gICAgICAgIGxvZy5mb250U2l6ZSA9IDE4O1xyXG4gICAgICAgIGxvZy5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcclxuICAgICAgICB5aWVsZCBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG4gICAgfSkpKCk7XHJcbn07XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvY29kZS50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9