import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, alt, id, openModal }) => (
  <li className={css.item}>
    <img
      className={css.itemImage}
      loading="lazy"
      src={image}
      alt={alt}
      onClick={() => openModal(id)}
    />
  </li>
);
export default ImageGalleryItem;
