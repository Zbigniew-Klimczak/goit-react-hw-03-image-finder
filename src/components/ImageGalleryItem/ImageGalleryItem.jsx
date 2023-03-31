import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image, alt }) => (
  <li className={css.item}>
    <img className={css.itemImage} src={image} alt={alt} />
  </li>
);
export default ImageGalleryItem;
