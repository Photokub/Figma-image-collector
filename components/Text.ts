export class CreateText {
    async createText() {
        const text = await figma.createText()
        await figma.loadFontAsync({family: "Inter", style: "Regular"})
        return text
    }
}