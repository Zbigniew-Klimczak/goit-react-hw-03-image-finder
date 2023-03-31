import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images }) => (
  <ul className={css.gallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image.webformatURL}
        alt={image.tags}
      ></ImageGalleryItem>
    ))}
  </ul>
);
export default ImageGallery;
