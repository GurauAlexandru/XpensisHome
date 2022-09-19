import './bar.styles.scss';

import CartItemMonth from '../cart-item-month/cart-item-month.component';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const Bar = ({ header }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className='bar'>
      <h2 className='header h-large'>{header}</h2>
      <div className='bar__time'>
        <CartItemMonth />
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

export default Bar;
