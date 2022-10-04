import './success-data-send.styles.scss';
import imgSucced from '../../../assets/wallpapers/succed.webp';

const SuccessDataSend = () => (
  <div className='success-data-send'>
    <img
      src={imgSucced}
      alt='data send to database'
      className='success-data-send__img'
    />
    <h2 className='header h-large color-green'>Congratulation</h2>
    <p className='p-cart-item color-green'>
      Your data have been send to the database 😃
    </p>
    <p className='p-cart-item color-green'>Now you can check it on the app</p>
  </div>
);

export default SuccessDataSend;
