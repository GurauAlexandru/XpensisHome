import './sign-in.styles.scss';
import { useContext } from 'react';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { UserContext } from '../../context/user.context';

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);

  const handleLogIn = () => {
    setCurrentUser('Alexandru');
  };

  return (
    <div className='sign-in__box'>
      <h3 className='header h-normal'>Login into your account</h3>
      <form className='sign-in__form'>
        <FormInput label='Email' type='email' required name='email' />
        <FormInput label='Password' type='password' required name='password' />
        <Button
          className='button button__normal mt-large'
          onClick={() => handleLogIn()}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
