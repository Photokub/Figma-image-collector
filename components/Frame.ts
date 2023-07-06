import {setYPos, setXPos} from "../utils/positionSetter";

const setX = setXPos()
const setY = setYPos()

export class CreateFrame {
    createFrame(filling, namesArray, linksArray, pluArray) {
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