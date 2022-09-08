import './sign-in.styles.scss';
import { useContext, useEffect, useState } from 'react';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import users from '../../store/users';
import { UserContext } from '../../context/user.context';
import ErrorMessage from '../errors/message/error.message.component';
import SuccessMessage from '../success/message/success.message.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [user, setUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setsuccessMessage] = useState(false);

  useEffect(() => {
    setUser(users);
  }, []);

  const myUser = user.find((el) => {
    return el.email === email && el.password === password;
  });

  const handleSubmit = () => {
    if (!myUser) setErrorMessage(true);
    if (myUser) setsuccessMessage(true);

    setTimeout(() => {
      setCurrentUser(myUser);
    }, 2000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrorMessage(false);

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in__box'>
      <h3 className='header h-normal'>Login into your account</h3>
      <form
        className='sign-in__form'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <Button className='button button__normal mt-large' type='submit'>
          Login
        </Button>
      </form>
      {successMessage ? <SuccessMessage /> : ''}
      {errorMessage ? <ErrorMessage /> : ''}
    </div>
  );
};

export default SignIn;
