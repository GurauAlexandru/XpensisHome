import './register.styles.scss';
import { useContext, useState, useEffect } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import users from '../../store/users';
import { UserContext } from '../../context/user.context';
import createNewUser from '../../context/createNewUser';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [user, setUser] = useState(() => []);
  const [formFields, setFormFields] = useState(() => defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  useEffect(() => {
    setUser(users);
  }, [user]);

  const login = (user) => {
    return setCurrentUser(user);
  };

  const createUserFunction = () => {
    const myNewUser = createNewUser(name, email, password);
    users.push(myNewUser);

    return users;
  };

  const handleSubmit = () => {
    createUserFunction();

    const newUser = user.find((el) => {
      return el.email === email && el.password === password;
    });

    if (password !== confirmPassword) {
      alert("Password don't match with confirm password");
      return;
    }
    // DISPLAY A MESSAGE SUCCESS OR FAILED
    setTimeout(() => {
      login(newUser);
    }, 3000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='register__box'>
      <h3 className='header h-normal'>Register an account</h3>
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
    </div>
  );
};

export default RegisterForm;
