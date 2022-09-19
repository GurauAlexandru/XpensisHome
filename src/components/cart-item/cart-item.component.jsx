import './cart-item.styles.scss';

const CartItem = ({ title, month, balance, children, bar }) => (
  <div className='cart-item'>
    <h3 className='header h-cart-big'>{title}</h3>
    {month}
    {balance}
    {children}
    {bar}
  </div>
);

export default CartItem;
