import './register.styles.scss';
import { useContext, useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import users from '../../store/users';
import { UserContext } from '../../context/user.context';
import createNewUser from '../../context/createNewUser';
import Message from '../message/message.component';
import { useCallback } from 'react';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(() => defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;
  const [successMessage, setsuccessMessage] = useState(() => false);
  const [failedMessage, setFailedMessage] = useState(() => false);

  const createUser = useCallback(() => {
    const myNewUser = createNewUser(name, email, password);
    const checkUser = users
      .map((el) => el.email)
      .find((el) => el === myNewUser.email);

    if (checkUser) {
      setFailedMessage(true);
      return;
    }
    users.push(myNewUser);
    setsuccessMessage(true);
    console.log(users);

    return users;
  }, [name, email, password]);

  const login = (user) => {
    return setCurrentUser(user);
  };

  const handleSubmit = () => {
    createUser();

    const newUser = users.find((el) => {
      return el.email === email && el.password === password;
    });

    if (password !== confirmPassword) {
      alert("Password don't match with confirm password");
      return;
    }

    setTimeout(() => {
      login(newUser);
      setsuccessMessage(false);
      setFailedMessage(false);
      setFormFields(defaultFormFields);
    }, 3000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='register__box'>
      <h3 className='header h-normal'>Register an account</h3>
      {successMessage === false ? (
        <>
          {failedMessage === false ? (
            <form
              className='register__form'
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <FormInput
                label='Name'
                type='text'
                required
                onChange={handleChange}
                name='name'
                value={name}
              />
              <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email.toLocaleLowerCase()}
              />
              <FormInput
                label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
              />
              <FormInput
                label='Confirm password'
                type='password'
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
              />
              <Button className='button button__normal mt-large' type='submit'>
                Register
              </Button>
            </form>
          ) : (
            <Message
              className='message message__failed'
              firstMessage='Email exist'
              secondMessage='Please login to your account.'
            />
          )}
        </>
      ) : (
        <Message
          className='message message__success'
          firstMessage='Account created'
          secondMessage='Login successful'
        />
      )}
    </div>
  );
};

export default RegisterForm;
