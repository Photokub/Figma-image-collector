import {CreateRectangle} from "./Rectangle";

export class CreateImage extends CreateRectangle {
    async createImageAsync(imageData) {
        const image = await figma.createImageAsync(imageData);
        return {hash: image.hash};
    }
}