import './sign-in.styles.scss';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const SignIn = () => (
  <div className='sign-in__box'>
    <h3 className='header h-normal'>Login into your account</h3>
    <form className='sign-in__form'>
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
);

export default SignIn;
