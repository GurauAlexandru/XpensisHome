import './modal-user-profile.styles.scss';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import ImageProfile from '../image-profile/image-profile.component';

const ModalUserProfile = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

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
        </div>
        <div className='user-profile-page__container--content'></div>
      </div>
    </section>
  );
};

export default ModalUserProfile;
