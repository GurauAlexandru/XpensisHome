import './user.styles.scss';

import { useState, useCallback } from 'react';
import Button from '../button/button.component';
import ModalUser from '../modal-user/modal-user.component';

const User = ({ user }) => {
  const [modal, setModal] = useState(() => false);

  const handleClick = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  return (
    <div className='user'>
      {user.avatar ? (
        <div className='user__logo'>
          <img src={user.avatar} alt='user avatar' className='user__img' />
        </div>
      ) : (
        ''
      )}
      <Button className='button button__link' onClick={() => handleClick()}>
        {user.name}
      </Button>
      {modal ? (
        <ModalUser
          button={
            <Button
              className='button button__normal'
              onClick={() => handleClick()}
            >
              Close
            </Button>
          }
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default User;
