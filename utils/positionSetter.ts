import {positionCounter} from "./counter";

const itemsPerRow = 10;

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

export {
    setXPos,
    setYPos,
    handleXCounter,
    handleYCounter
}