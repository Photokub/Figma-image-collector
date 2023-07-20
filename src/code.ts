import {CreateFrame} from "../components/Frame/Frame";
import {CreateRectangle} from "../components/Rectangle/Rectangle";
import {CreateImage} from "../components/Image/Image";
import {CreateErrorMessage} from "../components/Error/Error";
import {CreateText} from "../components/Text/Text";
import {handleYCounter, handleXCounter} from "../utils/positionSetter";


figma.showUI(__html__, {
    width: 500,
    height: 360,
});

figma.ui.onmessage = pluginMessage => {

    (async () => {

        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr: any[] = []

        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);

        const newRectangle = new CreateRectangle;
        const newImage = new CreateImage
        const newFrame = new CreateFrame

        for (let elem of linksArray) {
            if (typeof elem === "string") {

                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${handleXCounter.value}`)
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${handleYCounter.value}`)
                handleXCounter()
                handleYCounter()

                try {
                     const image = await newImage.createImageAsync(elem)
                     const rectangleWithImage = newRectangle.createRectangle(image)
                    newFrame.createFrame(rectangleWithImage, elem, linksArray, pluArray)
                } catch (err) {
                    errorsArr.push(err)
                    const newError = new CreateErrorMessage
                    const error = await newError.createErrorMessage(err)
                    newFrame.createFrame(error, elem, linksArray, pluArray)
                }
            }
        }

        const newLog = new CreateText()
        const log = await newLog.createText()
        log.x = 50
        log.y = -50
        log.characters = (`Количество обработанных имён: ${pluArray.length}. \nКоличество обработанных ссылок: ${linksArray.length}. \nКоличество ошибок: ${errorsArr.length}`)
        log.fontSize = 18
        log.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}]

        await figma.closePlugin()
    })()
}