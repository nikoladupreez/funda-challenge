
export function mapPropertyImages(images) {
    return images.filter((media) => media.Categorie === 1).map((image) => {
        return image.MediaItems.find((mediaItem) => mediaItem.Category === 6);
    });
}
