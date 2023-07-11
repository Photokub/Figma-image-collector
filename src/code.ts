import {CreateFrame} from "../components/Frame/Frame";
import {CreateRectangle} from "../components/Rectangle/Rectangle";
import {CreateImage} from "../components/Image/Image";
import {CreateErrorMessage} from "../components/Error/Error";
import {CreateText} from "../components/Text/Text";
import {handleYCounter, handleXCounter} from "../utils/positionSetter";
import {preloader} from "../components/Preloader/Preloader";

figma.showUI(__html__, {
    width: 500,
    height: 360,
});

figma.ui.onmessage = pluginMessage => {

    (async () => {
        //const app = pluginMessage.app;
        //const preloader = pluginMessage.preloader;
        const pluArr = pluginMessage.namesArr;
        const linkArr = pluginMessage.linkArr;
        const errorsArr: any[] = []

        /////////////синхронный запрос///////////////
        let iterLinksArray = linkArr[Symbol.iterator]();
        let iterPluArray = pluArr[Symbol.iterator]();
        let linksArray = Array.from(iterLinksArray);
        let pluArray = Array.from(iterPluArray);


        // function showPreloader() {
        //     preloader()
        //     //preloader.classList.add('preloader__visible')
        //     //document.body.classList.add('loaded');
        // }

        //await showPreloader()

        //console.log(app)

        // function preloader(): string {
        //     document.body.innerHTML = '<p>LOADING</p>'
        //     // return `
        //     // <p>LOADING</p>>
        //     // `
        // }

        // function preloader(){
        //     pluginMessage.document.body.innerHTML = '<p>LOADING</p>'
        //     // return `
        //     // <p>LOADING</p>>
        //     // `
        // }
        //
        // preloader()

        for (let elem of linksArray) {
            if (typeof elem === "string") {

                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Х: ${handleXCounter.value}`)
                console.log(`ЗНАЧЕНИЕ СЧЁТЧИКА Y: ${handleYCounter.value}`)
                handleXCounter()
                handleYCounter()

                const newFrame = new CreateFrame

                try {

                    const newRectangle = new CreateRectangle
                    const newImage = new CreateImage

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