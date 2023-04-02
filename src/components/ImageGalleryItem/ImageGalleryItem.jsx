import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image, alt }) => (
  <li className={css.item}>
    <img className={css.itemImage} loading="lazy" src={image} alt={alt} />
  </li>
);
export default ImageGalleryItem;
