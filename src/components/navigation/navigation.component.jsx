import './navigation.styles.scss';

import SelectTime from '../elements/select-time/select-time.component';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const Navigation = ({ header }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className='navigation'>
      <h2 className='header h-large'>{header}</h2>
      <div className='navigation__time'>
        <SelectTime />
      </div>
      <div className='user'>
        {currentUser.avatar ? (
          <div className='user__logo'>
            <img
              src={currentUser.avatar}
              alt='my avatar'
              className='user__img'
            />
          </div>
        ) : (
          ''
        )}
        <h3 className='header h-special'>{currentUser.name}</h3>
      </div>
    </div>
  );
};

export default Navigation;
