export class CreateImage {
    async createImageAsync(imageData) {
        const image = await figma.createImageAsync(imageData);
        return {hash: image.hash};
    }
}