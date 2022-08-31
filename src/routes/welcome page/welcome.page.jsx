import './welcome.styles.scss';
import welcomeWallpaper from '../../assets/wallpapers/welcome-page.webp';

// temp
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';

const WelcomePage = () => (
  <div className='welcome-page'>
    <div className='welcome-page__picture'>
      <img
        src={welcomeWallpaper}
        alt='wellcome wallpaper'
        className='welcome-page__img'
      />
    </div>
    <div className='welcome-page__container'>
      <h1 className='header h-big'>Xpenses Home</h1>
      <div className='welcome-page__box'>
        <h3 className='header h-normal'>Login into your account</h3>
        <form className='welcome-page__form'>
          <FormInput label='Email' type='email' required />
          <FormInput label='Password' type='password' required />
          <Button
            className='button button__normal mt-large'
            onClick={() => console.log('button clicked')}
          >
            Login
          </Button>
        </form>
      </div>
      <h4 className='header h-small'>
        Don't have and account?{' '}
        <Button
          className='button button__link'
          onClick={() => console.log('register button clicked')}
        >
          Register
        </Button>
      </h4>
    </div>
  </div>
);

export default WelcomePage;
