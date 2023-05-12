figma.showUI(__html__, {
    width: 500,
    height: 360,
});

figma.ui.onmessage = pluginMessage => {

    (async () => {

        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr: any[] = []
        console.log(pluArr)
        console.log(linkArr)
        console.log(errorsArr)

        /////////////синхронный запрос///////////////
        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);
        console.log(linksArray)
        console.log(pluArray)

        function counter(){
            let counter = 0
            return function(){
                return counter + 525
            }
        }

        let count = counter()

        for (let elem of linksArray) {
            if (typeof elem === "string") {

                const indexOfElement = linksArray.indexOf(elem)
                const firstFramePositionX = 50;
                const frameAndSpaceWidth = 475 + 50;
                //let frameAndSpaceHeight = 400 + 50;
                const totalWidthForFrames = frameAndSpaceWidth * linksArray.length
                let rowWidth = frameAndSpaceWidth * 10;
                 //let currentFramePositionX = indexOfElement * frameAndSpaceWidth
                //let currentFramePositionX
                let currentFramePositionX = indexOfElement * frameAndSpaceWidth
                let framePositionInRowX = rowWidth - currentFramePositionX
                const nextFramePositionX = totalWidthForFrames - currentFramePositionX


                //handlePos(positionY, indexOfElement)

                //let rowWidth = totalWidthForFrames / (frameAndSpaceWidth * 10);

                console.log(`ПОЛНАЯ ШИРИНА ПОД ФРЕЙМЫ: ${totalWidthForFrames}`)
                console.log(`ШИРИНА РЯДА: ${rowWidth}`)


                // function handlePos(){
                //     //if(indexOfElement % 10 == 0 && indexOfElement != 0){
                //     if(currentFramePositionX >= rowWidth){
                //         positionY = frameAndSpaceHeight++
                //         currentFramePositionX = currentFramePositionX - rowWidth;
                //         console.log(`ТЕКУЩАЯ ПОЗИЦИЯ X: ${currentFramePositionX}`)
                //     } else {
                //         positionY = 0
                //     }
                // }
                let positionY
                let setY = handlePos()
                let setX = handlePosX(currentFramePositionX)

                let positionX = setX()
                let row = 450

                function getCurrentPositionX() {
                    return setX()
                }

                function getCurrentPositionY() {
                    return setY()
                }

                let currentX = getCurrentPositionX()
                let currentY = getCurrentPositionY()



                function handlePos() {
                    //let col = 0
                    //let positionY
                    return function () {
                        //positionX = setX()

                        if (currentFramePositionX >= rowWidth) {
                            //currentFramePositionX = currentFramePositionX - rowWidth
                            return row + 50
                        } else {
                            return positionY = 0
                        }
                    }
                }

                //ПЛЯСАТЬ ОТ СЧЁТЧИКА. ПОКА СЧЁТЧИК МЕНЬШЕ ДЛИНЫ РЯДА - Y = 0
                //В ПРОТИВНОМ СЛУЧАЕ ОБНУЛИТЬ СЧЕТЧИК И ПРИБАВИТЬ Y

                //СДЕЛАТЬ ВНЕШНИЙ СЧЕТЧИК, КОТОРЫЙ НЕЗАВИСИМО ИНКРЕМИРУЕТСЯ ПРИ КАЖДОЙ ГЕНЕРАЦИИ И СОХРАНЯЕТ СВОЁ ЗНАЧЕНИЕ
                //КАК ТОЛЬКО СЧЁТЧИК ДОЙДЁТ ДО ДЛИНЫ СТРОКИ - ОБНУЛИТЬ СЧЕТЧИК, ОБНУЛИТЬ X И УВЕЛИЧИТЬ Y НА СТРОЧКУ ВНИЗ

                function handlePosX(arg) {
                    //let row = 450
                    //let col = 0
                    //let positionY
                    //console.log(`currentFramePositionX - значение, приходящее в  функцию: ${currentFramePositionX}`)
                    console.log(`значение аргумента ${arg}`)
                    return function () {
                        if (arg >= rowWidth) {
                            //currentFramePositionX = currentFramePositionX - rowWidth
                            return arg - rowWidth
                            //return row + 50
                        } else {
                            //return currentFramePositionX
                            return currentFramePositionX = indexOfElement * frameAndSpaceWidth
                            //return col = 0
                        }
                    }
                }

                //console.log(`ПОЗИЦИЯ Y: ${positionY}`)
                console.log(`currentFramePositionX: ${currentFramePositionX}`)
                console.log(`SET X(): ${setX()}`)
                console.log(`POSITION X: ${positionX}`)
                console.log(`CURRENT X(): ${currentX}`)
                console.log(`CURRENT Y(): ${currentY}`)
                console.log(`SET Y(): ${setY()}`)
                //console.log(`ЗНАЧЕНИЕ COL: ${col}`)


                //let positionY = 0;
                // if (indexOfElement % 10) {
                //     positionY = frameAndSpaceHeight
                //
                // }

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
                    //frame.x = currentFramePositionX
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
                    //errorText.x = 50
                    errorText.x = setX()
                    errorText.y = setY()
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

