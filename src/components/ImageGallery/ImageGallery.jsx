import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, openModal }) => (
  <ul className={css.gallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        id={image.id}
        image={image.webformatURL}
        alt={image.tags}
        openModal={openModal}
      ></ImageGalleryItem>
    ))}
  </ul>
);
export default ImageGallery;
