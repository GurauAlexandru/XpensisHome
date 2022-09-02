import './home.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import Button from '../../components/button/button.component';

const Home = () => {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <div>
      <h1 className='header h-big'>Home page</h1>
      <h2 className='header header-normal'>Welcome {currentUser.name}</h2>
      <Button className='button button__normal' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
