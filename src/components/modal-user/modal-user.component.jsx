import './modal-user.styles.scss';

import { Link } from 'react-router-dom';
import Currency from '../currency/currency.component';

const ModalUser = ({ button }) => {
  return (
    <section className='modal-user'>
      <div className='modal-user__container'>
        <Currency />
        <Link to='/my-profile' className='link'>
          <h5 className='header h-small'>My profile</h5>
        </Link>
      </div>
      {button}
    </section>
  );
};

export default ModalUser;
