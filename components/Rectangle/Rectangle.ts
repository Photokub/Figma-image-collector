export class CreateRectangle {
    createRectangle(imageData) {
        const rect = figma.createRectangle();
        if (imageData) {
            rect.resize(395, 320);
            rect.fills = [{type: 'IMAGE', imageHash: imageData.hash, scaleMode: 'FIT'}];
        }
        return rect;
    }
}