import './cart-item-bar.styles.scss';

const CartItemBar = () => (
  <div className='cart-item__bar'>
    <div className='cart-item__bar--income'>
      <h4 className='header header--small color-green'>60%</h4>
      <div className='cart-item__bar--income--progress'></div>
    </div>
    <div className='cart-item__bar--outcome'>
      <h4 className='header header--small color-red'>30%</h4>
      <div className='cart-item__bar--outcome--progress'></div>
    </div>
    <div className='cart-item__bar--others'>
      <h4 className='header header--small color-gray'>10%</h4>
      <div className='cart-item__bar--others--progress'></div>
    </div>
  </div>
);

export default CartItemBar;
