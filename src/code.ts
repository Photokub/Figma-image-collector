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
}

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

    (async () => {

        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr: any[] = []
        const counter = pluginMessage.handleXCounter

        /////////////синхронный запрос///////////////
        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);

        const itemsPerRow = 10;

        function positionCounter() {

            function counter() {
                if (counter.value == itemsPerRow) {
                    return counter.value = 1
                } else {
                    return counter.value++
                }
            }

            counter.value = 0
            return counter
        }

        let handleXCounter = positionCounter();
        let handleYCounter = positionCounter();

        function setXPos() {
            let step = 525
            let xPos = 0;
            return function () {
                const position = handleXCounter.value
                if (position >= itemsPerRow) {
                    return xPos = 0;
                } else {
                    return xPos = xPos + step
                }
            }
        }

        function setYPos() {
            let step = 450
            let yPos = 0;
            return function () {
                const position = handleYCounter.value
                if (position >= itemsPerRow) {
                    return yPos = yPos + step
                } else {
                    return yPos
                }
            }
        }

        const setX = setXPos()
        const setY = setYPos()

        class Card {
            private _name: any;
            private _image: any;
            private _imgLink: Image;
            private _rectangleObject: RectangleNode;
            private _frame: FrameNode;

            constructor(name, image, linksArray, pluArray) {
                this._name = name;
                this._image = image;
                this._imgLink = await figma.createImageAsync(this._image)
                this._rectangleObject = figma.createRectangle()
                this._frame = figma.createFrame();
            }

            // _generateRectangleObject() {
            //     return {
            //         rectangleObject: this.rectangleObject,
            //     }
            // }

            generateRectangleObject() {
                this._rectangleObject.resize(395, 320)
                this._rectangleObject.fills = [
                    {
                        type: 'IMAGE',
                        imageHash: this._imgLink.hash,
                        scaleMode: 'FIT'
                    }
                ]
            }

            generateFrame(){
                this._frame.x = setX()
                this._frame.y = setY()
                this._frame.resize(475, 400)
                let currentIndex = linksArray.indexOf(this);
                let currentFrameName = pluArray[currentIndex]
                if (typeof currentFrameName === "string") {
                    this._frame.name = currentFrameName
                }
                this._frame.layoutMode = 'HORIZONTAL'
                this._frame.horizontalPadding = 40
                this._frame.counterAxisAlignItems = 'CENTER'
                this._frame.appendChild(this._rectangleObject)
            }
        }


        for (let elem of linksArray) {
            if (typeof elem === "string") {

                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${handleXCounter.value}`)
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${handleYCounter.value}`)
                handleXCounter()
                handleYCounter()

                try {
                    console.log(elem)

                    let imgLink = await figma.createImageAsync(elem)
                    console.log(imgLink)
                    const rectangleObject = figma.createRectangle()
                    rectangleObject.resize(395, 320)
                    rectangleObject.fills = [
                        {
                            type: 'IMAGE',
                            imageHash: imgLink.hash,
                            scaleMode: 'FIT'
                        }
                    ]

                    const frame = figma.createFrame();
                    frame.x = setX()
                    frame.y = setY()
                    frame.resize(475, 400)
                    let currentIndex = linksArray.indexOf(elem);
                    console.log(currentIndex)
                    let currentFrameName = pluArray[currentIndex]
                    console.log(currentFrameName)
                    if (typeof currentFrameName === "string") {
                        frame.name = currentFrameName
                    }
                    frame.layoutMode = 'HORIZONTAL'
                    frame.horizontalPadding = 40
                    frame.counterAxisAlignItems = 'CENTER'
                    frame.appendChild(rectangleObject)
                } catch (err) {

                    errorsArr.push(err)

                    const errorText = await figma.createText()
                    await figma.loadFontAsync({family: "Inter", style: "Regular"})
                    errorText.resize(395, 320)
                    errorText.x = 0
                    errorText.y = 0
                    errorText.characters = ('ERROR:' + '\n' + (err))
                    errorText.fontSize = 24
                    errorText.fills = [{type: 'SOLID', color: {r: 1, g: 0, b: 0}}]

                    const frame = figma.createFrame();
                    frame.x = setX()
                    frame.y = setY()
                    frame.resize(475, 400)
                    let currentIndex = linksArray.indexOf(elem);

                    let currentFrameName = pluArray[currentIndex]

                    if (typeof currentFrameName === "string") {
                        frame.name = currentFrameName
                    }
                    frame.layoutMode = 'HORIZONTAL'
                    frame.horizontalPadding = 40
                    frame.counterAxisAlignItems = 'CENTER'
                    frame.appendChild(errorText)
                }
            }
        }

        const log = await figma.createText()
        await figma.loadFontAsync({family: "Inter", style: "Regular"})
        log.x = 50
        log.y = -50
        log.characters = (`Количество обработанных имён: ${pluArray.length}. \nКоличество обработанных ссылок: ${linksArray.length}. \nКоличество ошибок: ${errorsArr.length}`)
        log.fontSize = 18
        log.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}]

        await figma.closePlugin()
    })()
}