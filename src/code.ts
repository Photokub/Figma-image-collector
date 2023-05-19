figma.showUI(__html__, {
    width: 500,
    height: 360,
});

figma.ui.onmessage = pluginMessage => {

    (async () => {

        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr: any[] = []

        /////////////синхронный запрос///////////////
        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);

        const itemsPerRow = 10;

        function counterForXPosition() {

            function counter() {
                if (counter.counterX >= itemsPerRow) {
                    console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Х: ${counter.counterX}`)
                    return counter.counterX = 1
                }
                else {
                    console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Х: ${counter.counterX}`)
                    return counter.counterX++
                }
            }

            counter.counterX = 0
            return counter
        }

        function counterForYPosition() {
            function counter() {
                if (counter.counterY >= itemsPerRow) {
                    console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Y: ${counter.counterY}`)
                    return counter.counterY = 1
                } else {
                    console.log(`ЗНАЧЕНИЕ СЧЕТЧИКА Y: ${counter.counterY}`)
                    return counter.counterY++
                }
            }

            counter.counterY = 0
            return counter
        }

        let handleXPosition = counterForXPosition();
        let handleYPosition = counterForYPosition();

        function setXPos() {
            let step = 280
            let xPos = 0;
            return function () {
            const position = handleXPosition.counterX
                console.log(`ЗНАЧЕНИЕ position X: ${position}`)
                if (handleXPosition.counterX >= itemsPerRow ) {
                    return xPos = 0
                } else {
                    return xPos = xPos + step
                }
            }
        }

        function setYPos() {
            let step = 250
            let yPos = 0;
            return function () {
            const position = handleYPosition.counterY
                if (position == itemsPerRow) {
                    return yPos = yPos + step
                } else {
                    return yPos
                }
            }
        }

        const setX = setXPos()
        const setY = setYPos()

        for (let elem of linksArray) {
            if (typeof elem === "string") {

                const indexOfElement = linksArray.indexOf(elem)
                const firstFramePositionX = 50;
                const frameAndSpaceWidth = 475 + 50;
                const totalWidthForFrames = frameAndSpaceWidth * linksArray.length
                let rowWidth = frameAndSpaceWidth * 10;
                let currentFramePositionX = indexOfElement * frameAndSpaceWidth
                let framePositionInRowX = rowWidth - currentFramePositionX
                const nextFramePositionX = totalWidthForFrames - currentFramePositionX

                console.log(`handleXPosition(): ${handleXPosition()}`)
                console.log(`handleYPosition(): ${handleYPosition()}`)
                console.log(`handleXPosition.counterX: ${handleXPosition.counterX}`)
                console.log(`handleYPosition.counterY: ${handleYPosition.counterY}`)
                console.log(`setX: ${setX()}`)
                console.log(`seY: ${setY()}`)

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

                    let frameXPosition;
                    if (indexOfElement === 0) {
                        frameXPosition = firstFramePositionX
                    } else {
                        frameXPosition = currentFramePositionX
                    }

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

