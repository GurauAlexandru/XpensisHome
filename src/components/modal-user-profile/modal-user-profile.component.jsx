import './modal-user-profile.styles.scss';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import ImageProfile from '../image-profile/image-profile.component';
import Buton from '../button/button.component';

const ModalUserProfile = () => {
  const { currentUser } = useContext(UserContext);
  const [classAccount, setClassAccount] = useState(true);
  const [classSecurity, setClassSecurity] = useState(false);
  const [container, setContainer] = useState(true);

  const handleClickAccount = () => {
    setContainer(true);
    setClassAccount(true);
    setClassSecurity(false);
  };
  const handleClickSecurity = () => {
    setContainer(false);
    setClassAccount(false);
    setClassSecurity(true);
  };

  return (
    <section className='user-profile-page'>
      <div className='user-profile-page__navigation'>
        <h2 className='header h-large'>My profile</h2>
        <Link to='/' className='link'>
          <h5 className='header h-small'>Close</h5>
        </Link>
      </div>
      <div className='user-profile-page__container'>
        <div className='user-profile-page__container--menu'>
          <ImageProfile user={currentUser} />
          <h3 className='header h-large'>{currentUser.name}</h3>
          <p className='p-cart-action'>{currentUser.email}</p>

          <Buton
            className={`button button__text  mt-large ${
              classAccount ? 'button__text--active' : ''
            }`}
            onClick={() => handleClickAccount()}
          >
            Account
          </Buton>
          <Buton
            className={`button button__text ${
              classSecurity ? 'button__text--active' : ''
            }`}
            onClick={() => handleClickSecurity()}
          >
            Security
          </Buton>
        </div>
        {container ? (
          <div className='user-profile-page__container--account'>
            <h2 className='header h-xLarge'>Account settings</h2>
          </div>
        ) : (
          <div className='user-profile-page__container--security'>
            <h2 className='header h-xLarge'>Security settings</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModalUserProfile;
