import './register.styles.scss';
import { useContext, useState, useEffect } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import users from '../../store/users';
import { UserContext } from '../../context/user.context';
import createNewUser from '../../context/createNewUser';
// import { useMemo } from 'react';
// import { useCallback } from 'react';

const defaultFormFields = {
  Uname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [user, setUser] = useState(() => []);
  const [formFields, setFormFields] = useState(() => defaultFormFields);
  const { Uname, email, password, confirmPassword } = formFields;

  useEffect(() => {
    setUser(users);
  }, [user]);

  const handleSubmit = () => {
    const newCreatedUser = user.find((el) => {
      users.push(createNewUser(Uname, email, password));
      return el.email === email && el.password === password;
    });

    if (password !== confirmPassword) {
      alert("Password don't match with confirm password");
      return;
    }

    setCurrentUser(newCreatedUser);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  console.log(user);

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
          name='Uname'
          value={Uname}
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
