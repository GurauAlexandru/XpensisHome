import './user.styles.scss';

import Button from '../button/button.component';
import ModalUser from '../modal-user/modal-user.component';
import { useState, useCallback } from 'react';

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
      {modal ? <ModalUser /> : ''}
    </div>
  );
};

export default User;
