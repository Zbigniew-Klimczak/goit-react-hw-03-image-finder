import css from './Modal.module.css';
const Modal = ({ imageObject, closeModal }) => (
  <div
    id="overlay"
    className={css.overlay}
    onClick={e => {
      if (e.target.id === 'overlay') {
        closeModal();
      }
    }}
  >
    <div className={css.modal}>
      <img src={imageObject.largeImageURL} alt={imageObject.tags} />
    </div>
  </div>
);
export default Modal;
