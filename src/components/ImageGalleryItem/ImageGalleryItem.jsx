import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image, tags }) => {
  <li className={css.item}>
    <img className={css.itemImage} src={image} alt={tags} />
  </li>;
};
export default ImageGalleryItem;
