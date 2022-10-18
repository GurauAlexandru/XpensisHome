import './user-profile-settings-account.styles.scss';
import { useState, useContext } from 'react';

import { UserContext } from '../../context/user.context';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import users from '../../store/users';

const defaultFormFields = {
  name: '',
  email: '',
};

const UserProfileSettingsAccount = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(() => defaultFormFields);
  const { name, email } = formFields;

  const handleSubmit = () => {
    const { password, year, avatar } = currentUser;
    const user = users.find((el) => {
      return el.name === currentUser.name;
    });

    const usersEmail = users.map((el) => el.email);

    if (!name && !email) {
      console.log('No data entered');
      return;
    }
    if (usersEmail.includes(email)) {
      alert('Email already taken');
      return;
    }

    setFormFields(defaultFormFields);
    setCurrentUser({ name: name, email: email, password, year, avatar });

    user.name = name;
    user.email = email;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='user-profile-settings-account'>
      <h2 className='header h-xLarge'>Account settings</h2>
      <p className='p-cart-item'>Update your name and email address:</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormInput
          label='Change name'
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={name}
        />
        <FormInput
          label='Change email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <Button className='button button__normal mt-large' type='submit'>
          Update
        </Button>
      </form>
    </div>
  );
};

export default UserProfileSettingsAccount;
