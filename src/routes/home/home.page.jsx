import './home.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { Link, Outlet } from 'react-router-dom';

import Button from '../../components/button/button.component';
import Icon from '../../components/icon/icon.component';

import overviewIcon from '../../assets/icons/overview.svg';
import walletIcon from '../../assets/icons/wallet.svg';
import pieChart from '../../assets/icons/pie-chart.svg';
import logOut from '../../assets/icons/log-out.svg';

const Home = () => {
  const { logout } = useContext(UserContext);

  return (
    <div className='home-setup'>
      <main className='home-page'>
        <Link to='/' className='link-page'>
          <Icon src={overviewIcon} alt='overview icon' />
          <p className='desc'>Overview</p>
        </Link>
        <Link to='/details' className='link-page'>
          <Icon src={pieChart} alt='pie chart icon' />
          <p className='desc'>Account details</p>
        </Link>
        <Link to='/budget' className='link-page'>
          <Icon src={walletIcon} alt='wallet icon' />
          <p className='desc'>Budget</p>
        </Link>
        <Button className='button button__logout' onClick={() => logout()}>
          <Icon src={logOut} alt='logout icon' />
          <p className='desc'>Logout</p>
        </Button>
      </main>
      <Outlet />
    </div>
  );
};

export default Home;
