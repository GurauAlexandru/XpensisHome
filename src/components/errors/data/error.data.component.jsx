import './error.data.styles.scss';
import errorData from '../../../assets/wallpapers/error-no-data.webp';

const NoData = () => (
  <section className='error-no-data'>
    <h3 className='header h-normal color-gray'>We don't have any data</h3>
    <h3 className='header h-normal color-gray'>
      Please review your database and then come back to check it here
    </h3>
    <img
      className='error-no-data__wallpaper'
      src={errorData}
      alt='no data found'
    />
  </section>
);

export default NoData;
