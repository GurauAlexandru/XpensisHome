import './cart-item-balance.styles.scss';

const CartItemBalance = ({ totalBalance, currency }) => (
  <div className='cart-item__balance'>
    <h3 className='header h-cart-normal'>Total balace</h3>
    <h2 className='header h-normal'>
      {totalBalance} {currency}
    </h2>
  </div>
);

export default CartItemBalance;
