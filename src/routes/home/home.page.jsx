import './home.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { Link, Outlet } from 'react-router-dom';

import Button from '../../components/button/button.component';

import overviewIcon from '../../assets/icons/overview.svg';
import walletIcon from '../../assets/icons/wallet.svg';

const Home = () => {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <div className='home-setup'>
      <main className='home-page'>
        <h3 className='header h-normal'>{currentUser.name}</h3>
        <Link to='/' className='link-page'>
          <img className='link-icon' src={overviewIcon} alt='overview icon' />
        </Link>
        <Link to='/budget' className='link-page'>
          <img className='link-icon' src={walletIcon} alt='wallet icon' />
        </Link>
        <Button className='button button__normal' onClick={() => logout()}>
          Logout
        </Button>
      </main>
      <Outlet />
    </div>
  );
};

export default Home;
