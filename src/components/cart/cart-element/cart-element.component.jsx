import './cart-element.styles.scss';

const CartElement = ({ title, money, currency, color, className }) => (
  <div className={`${className}`}>
    <h3 className='header h-cart-normal'>{title}</h3>
    <h2 className={`header h-small ${color}`}>
      {money} {currency}
    </h2>
  </div>
);

export default CartElement;
