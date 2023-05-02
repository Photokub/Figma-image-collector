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
                console.log(elem)
                let imgLink = await figma.createImageAsync(elem)
                if (!imgLink){
                    throw new Error('ОШИБКА ОШИБКА!!! ЭТО НЕ ИЗОБРАЖЕНИЕ')
                    console.log('ОШИБКА ОШИБКА!!! ЭТО НЕ ИЗОБРАЖЕНИЕ')
                }
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
            }
        }

        const link = await figma.createText()
        await figma.loadFontAsync({family: "Inter", style: "Regular"})
        link.x = 50
        link.y = 0
        link.characters = (`Количество обработанных имён: ${pluArray.length}. \nКоличество обработанных ссылок: ${linksArray.length}.`)
        link.fontSize = 18
        link.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}]

        await figma.closePlugin()
    })()
}

