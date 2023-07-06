import {CreateText} from "./Text";

export class CreateErrorMessage extends CreateText {
    async createErrorMessage(defaultErrMessage) {
        const errorText = await this.createText()
        errorText.resize(395, 320)
        errorText.x = 0
        errorText.y = 0
        errorText.characters = ('ERROR:' + '\n' + (defaultErrMessage))
        errorText.fontSize = 24
        errorText.fills = [{type: 'SOLID', color: {r: 1, g: 0, b: 0}}]
        return errorText
    }
}