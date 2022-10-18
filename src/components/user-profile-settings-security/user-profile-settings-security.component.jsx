import './user-profile-settings-security.styles.scss';
import { useState, useContext } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';
import users from '../../store/users';
import Message from '../message/message.component';

const defaultFormFields = {
  password: '',
  confirmPassword: '',
};

const UserProfileSettingsSettings = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(() => defaultFormFields);
  const { password, confirmPassword } = formFields;
  const [successMessage, setSuccessMessage] = useState(() => false);
  const [failedMessage, setFailedMessage] = useState(() => false);

  const user = users.find((el) => {
    return el.name === currentUser.name;
  });

  const handleSubmit = () => {
    const { name, email, year, avatar } = currentUser;

    if (password !== confirmPassword) {
      setFailedMessage(true);
      setFormFields(defaultFormFields);
      setTimeout(() => {
        setFailedMessage(false);
      }, 3000);
      return;
    }
    setCurrentUser({ password: password, email, name, year, avatar });

    user.password = password;

    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='user-profile-settings-security'>
      <h2 className='header h-xLarge'>Security settings</h2>
      <p className='p-cart-item'>Change your password:</p>
      {successMessage === false ? (
        <>
          {failedMessage === false ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <FormInput
                label='Change password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
              />
              <FormInput
                label='Confirm password change'
                type='password'
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
              />
              <Button className='button button__normal mt-large' type='submit'>
                Change
              </Button>
            </form>
          ) : (
            <Message
              className='message message__failed'
              firstMessage="Password don't match"
              secondMessage='Check if both password are the same!'
            />
          )}
        </>
      ) : (
        <Message
          className='message message__success'
          firstMessage='Password has changed'
          secondMessage='You can login now with your new password.'
        />
      )}
    </div>
  );
};

export default UserProfileSettingsSettings;
