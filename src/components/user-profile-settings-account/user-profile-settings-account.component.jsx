import './user-profile-settings-account.styles.scss';
import { useState, useContext } from 'react';

import { UserContext } from '../../context/user.context';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFields = {
  name: '',
  email: '',
};

const UserProfileSettingsAccount = () => {
  const { currentUser, currentName, setCurrentName } = useContext(UserContext);
  const [formFields, setFormFields] = useState(() => defaultFields);
  const { name, email } = formFields;

  const handleSubmit = () => {
    if (!name && !email) {
      console.log('No data entered');
      return;
    }

    // Update user name to a selected input text (name), same for email

    console.log('CurrentName: ', currentName);
    // console.log(name);

    console.log(currentUser.name);
    setCurrentName(name); // not working as expecting

    setFormFields(defaultFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...defaultFields, [name]: value });
  };

  return (
    <div className='user-profile-settings-account'>
      <h2 className='header h-xLarge'>Account settings</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormInput
          label='Name'
          type='text'
          onChange={handleChange}
          name='name'
          value={name}
        />
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
        />
        <Button className='button button__normal mt-large' type='submit'>
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserProfileSettingsAccount;
