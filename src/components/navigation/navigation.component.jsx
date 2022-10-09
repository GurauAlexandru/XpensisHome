import './navigation.styles.scss';

import SelectTime from '../elements/select-time/select-time.component';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import User from '../user/user.component';

const Navigation = ({ header }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className='navigation'>
        <h2 className='header h-large'>{header}</h2>
        <div className='navigation__time'>
          <SelectTime />
        </div>
        <User user={currentUser} />
      </div>
    </>
  );
};

export default Navigation;
