import css from './Button.module.css';
const Button = ({ loadMore }) => (
  <button className={css.button} type="button" onClick={loadMore}>
    Load more
  </button>
);
export default Button;
