import './home.styles.scss';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { Link, Outlet } from 'react-router-dom';

import Button from '../../components/button/button.component';
import Icon from '../../components/icon/icon.component';

import menuIcon from '../../assets/icons/menu.svg';
import menuIconFull from '../../assets/icons/menu-full.svg';
import walletIcon from '../../assets/icons/wallet.svg';
import walletIconFull from '../../assets/icons/wallet-full.png';
import pieChart from '../../assets/icons/pie-chart.svg';
import pieChartFull from '../../assets/icons/pie-chart-full.png';
import logOut from '../../assets/icons/log-out.svg';

import { useEffect, useState } from 'react';

const Home = () => {
  const [fill, setFill] = useState(false);
  const [myPath, setMyPath] = useState('/');
  const { logout } = useContext(UserContext);

  const handleClick = () => {
    setFill(!fill);
  };

  useEffect(() => {
    setMyPath(window.location.pathname);
  }, [fill, myPath]);

  return (
    <div className='home-setup'>
      <main className='home-page'>
        <Link to='/' className='link-page' onClick={handleClick}>
          <Icon
            src={myPath === '/' ? menuIconFull : menuIcon}
            alt='overview icon'
          />
          <p className='desc'>Overview</p>
        </Link>
        <Link to='/details' className='link-page' onClick={handleClick}>
          <Icon
            src={myPath === '/details' ? pieChartFull : pieChart}
            alt='pie chart icon'
          />
          <p className='desc'>Account details</p>
        </Link>
        <Link to='/budget' className='link-page' onClick={handleClick}>
          <Icon
            src={myPath === '/budget' ? walletIconFull : walletIcon}
            alt='wallet icon'
          />
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
