import './register.styles.scss';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const RegisterForm = () => (
  <div className='register__box'>
    <h3 className='header h-normal'>Register an account</h3>
    <form className='register__form'>
      <FormInput label='User name' type='text' required />
      <FormInput label='Email' type='emial' required />
      <FormInput label='Password' type='password' required />
      <FormInput label='Confirm password' type='password' required />
      <Button
        className='button button__normal mt-large'
        onClick={() => console.log('succesfull registred')}
      >
        Register
      </Button>
    </form>
  </div>
);

export default RegisterForm;
