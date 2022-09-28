import './cart-no-data.styles.scss';
import errorDataImg from '../../../assets/wallpapers/error-no-data.webp';

const CartNoData = () => (
  <div className='cart-no-data'>
    <h3 className='header h-small color-gray'>We don't have any data</h3>
    <h3 className='header h-small color-gray'>
      Please review your database and then come back to check it here
    </h3>
    <img
      className='cart-no-data__wallpaper'
      src={errorDataImg}
      alt='no data found'
    />
  </div>
);

export default CartNoData;
