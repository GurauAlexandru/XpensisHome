import './modal-user.styles.scss';

import Currency from '../currency/currency.component';

const ModalUser = ({ button }) => {
  return (
    <section className='modal-user'>
      <Currency />
      {button}
    </section>
  );
};

export default ModalUser;
