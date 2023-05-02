figma.showUI(__html__, {
    width: 500,
    height: 360,
});

figma.ui.onmessage = pluginMessage => {

    (async () => {

        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        console.log(pluArr)
        console.log(linkArr)

        /////////////синхронный запрос///////////////
        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);
        console.log(linksArray)
        console.log(pluArray)

        for (let elem of linksArray) {
            if (typeof elem === "string") {
                try{
                    console.log(elem)
                    let imgLink = await figma.createImageAsync(elem)
                    // if (!imgLink){
                    //     throw new Error('ОШИБКА ОШИБКА!!! ЭТО НЕ ИЗОБРАЖЕНИЕ')
                    //     console.log('ОШИБКА ОШИБКА!!! ЭТО НЕ ИЗОБРАЖЕНИЕ')
                    // }
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
                    frame.x = 50
                    frame.y = 50
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
                }catch(err){
                    // const errorObject = figma.createRectangle()
                    // errorObject.resize(395, 320)
                    // errorObject.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]

                    const errorText = await figma.createText()
                    await figma.loadFontAsync({family: "Inter", style: "Regular"})
                    errorText.resize(395, 320)
                    errorText.x = 50
                    errorText.y = 0
                    errorText.characters = ('ERROR:' + '\n' + (err))
                    errorText.fontSize = 24
                    errorText.fills = [{type: 'SOLID', color: {r: 1, g: 0, b: 0}}]

                    const frame = figma.createFrame();
                    frame.x = 50
                    frame.y = 50
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
        log.y = 0
        log.characters = (`Количество обработанных имён: ${pluArray.length}. \nКоличество обработанных ссылок: ${linksArray.length}.`)
        log.fontSize = 18
        log.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}]

        await figma.closePlugin()
    })()
}

