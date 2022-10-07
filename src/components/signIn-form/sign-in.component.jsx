import './sign-in.styles.scss';
import { useContext, useEffect, useState } from 'react';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import users from '../../store/users';
import { UserContext } from '../../context/user.context';

import Message from '../message/message.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(() => defaultFormFields);
  const { email, password } = formFields;
  const [user, setUser] = useState(() => []);
  const [successMessage, setSuccessMessage] = useState(() => false);
  const [failedMessage, setFailedMessage] = useState(() => false);

  useEffect(() => {
    setUser(users);
  }, []);

  const myUser = user.find((el) => {
    return el.email === email && el.password === password;
  });

  const handleSubmit = () => {
    if (!myUser) setFailedMessage(true);
    if (myUser) setSuccessMessage(true);

    setTimeout(() => {
      setCurrentUser(myUser);
      setFailedMessage(false);
    }, 3000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in__box'>
      <h3 className='header h-normal'>Login into your account</h3>
      {successMessage === false ? (
        <>
          {failedMessage === true ? (
            <Message
              className='message message__failed'
              firstMessage='Something goes wrong'
              secondMessage='Check your username and password.'
            />
          ) : (
            <>
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
                <Button
                  className='button button__normal mt-large'
                  type='submit'
                >
                  Login
                </Button>
              </form>
            </>
          )}
        </>
      ) : (
        <Message
          className='message message__success'
          firstMessage='Login successful'
          secondMessage='Welcome to Xpenses Home'
        />
      )}
    </div>
  );
};

export default SignIn;
