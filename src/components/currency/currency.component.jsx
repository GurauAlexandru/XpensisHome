import './currency.styles.scss';

import { useContext } from 'react';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';

const Currency = () => {
  const { currency, setCurrency } = useContext(UserContext);

  return (
    <div className='currency'>
      <div className='currency__container'>
        <h5 className='header h-small'>Currency:</h5>
      </div>
      <div className='currency__container'>
        <div className='currency__container__box'>
          <Button
            className={`button button__select ${
              currency === 'EUR' ? 'button__active' : ''
            }
            `}
            type='button'
            onClick={() => setCurrency('EUR')}
          >
            EUR
          </Button>
          <Button
            key='2'
            className={`button button__select ${
              currency === 'USD' ? 'button__active' : ''
            }`}
            type='button'
            onClick={() => setCurrency('USD')}
          >
            USD
          </Button>
          <Button
            key='3'
            className={`button button__select ${
              currency === 'RON' ? 'button__active' : ''
            }`}
            type='button'
            onClick={() => setCurrency('RON')}
          >
            RON
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Currency;
