
export function mapPropertyImages(images) {
    // Only get the media of category 1 (images) in the size big (category 6)
    return images.filter((media) => media.Categorie === 1).map((image) => {
        return image.MediaItems.find((mediaItem) => mediaItem.Category === 6);
    });
}
