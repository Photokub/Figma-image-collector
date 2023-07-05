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

        class CreateRectangle {
            createRectangle(imageData) {
                const rect = figma.createRectangle();
                if (imageData) {
                    rect.resize(395, 320);
                    rect.fills = [{type: 'IMAGE', imageHash: imageData.hash, scaleMode: 'FIT'}];
                }
                return rect;
            }
        }

        class CreateImage extends CreateRectangle {
            async createImageAsync(imageData) {
                const image = await figma.createImageAsync(imageData);
                return {hash: image.hash};
            }
        }

        class CreateFrame {
            createFrame(filling, namesArray) {
                const frame = figma.createFrame();
                frame.x = setX()
                frame.y = setY()
                frame.resize(475, 400)
                let currentIndex = linksArray.indexOf(namesArray);
                let currentFrameName = pluArray[currentIndex]
                if (typeof currentFrameName === "string") {
                    frame.name = currentFrameName
                }
                frame.layoutMode = 'HORIZONTAL'
                frame.horizontalPadding = 40
                frame.counterAxisAlignItems = 'CENTER'
                frame.appendChild(filling)
            }
        }

        class CreateErrorMessage{
            async createErrorMessage(defaultErrMessage){
                const errorText = await figma.createText()
                await figma.loadFontAsync({family: "Inter", style: "Regular"})
                errorText.resize(395, 320)
                errorText.x = 0
                errorText.y = 0
                errorText.characters = ('ERROR:' + '\n' + (defaultErrMessage))
                errorText.fontSize = 24
                errorText.fills = [{type: 'SOLID', color: {r: 1, g: 0, b: 0}}]
                return errorText
            }
        }


        for (let elem of linksArray) {
            if (typeof elem === "string") {

                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${handleXCounter.value}`)
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${handleYCounter.value}`)
                handleXCounter()
                handleYCounter()

                try {

                    const newRectangle = new CreateRectangle()
                    const newImage = new CreateImage()
                    const newFrame = new CreateFrame()

                    const image = await newImage.createImageAsync(elem)
                    const rectangleWithImage = newRectangle.createRectangle(image)
                    const frameWithFilling = newFrame.createFrame(rectangleWithImage, elem)

                } catch (err) {

                    errorsArr.push(err)

                    const newFrame = new CreateFrame()
                    const newError = new CreateErrorMessage()

                    const error = await newError.createErrorMessage(err)
                    const frameWithError = newFrame.createFrame(error, elem)
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