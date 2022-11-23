import './welcome.styles.scss';
import welcomeWallpaper from '../../assets/wallpapers/welcome-page.webp';
import whatsappIcon from '../../assets/icons/WhatsAppButtonGreenLarge.svg';
import { useState } from 'react';

import Button from '../../components/button/button.component';
import SignIn from '../../components/signIn-form/sign-in.component';
import RegisterForm from '../../components/register-form/register.component';

const WelcomePage = () => {
  const [account, setAccount] = useState(true);

  const handleAccountButton = () => {
    setAccount(!account);
  };

  return (
    <div className='welcome-page'>
      <div className='welcome-page__picture'>
        <img
          src={welcomeWallpaper}
          alt='wellcome wallpaper'
          className='welcome-page__img'
        />
      </div>
      <div className='welcome-page__container'>
        <h1 className='header h-big handwrite'>Xpenses Home</h1>
        {account ? <SignIn /> : <RegisterForm />}
        {
          <a aria-label='Chat on WhatsApp' href='https://wa.me/+40799980957'>
            <img alt='Chat on WhatsApp' src={whatsappIcon} />
          </a>
        }
        <h4 className='header h-small'>
          {account ? " Don't have an account? " : 'Have an account? '}
          <Button
            className='button button__link'
            onClick={() => handleAccountButton()}
          >
            {account ? 'Register' : 'Login'}
          </Button>
        </h4>
      </div>
    </div>
  );
};

export default WelcomePage;
