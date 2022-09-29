import './modal.styles.scss';

import goodbye from '../../assets/wallpapers/goodbye.webp';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

import Button from '../button/button.component';

const Modal = () => {
  const { currentUser, setIsModalOpen, logout } = useContext(UserContext);

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className='modal'>
      <h2 className='header h-xLarge'>Hello, {currentUser.name}</h2>
      <p className='p-total'>Are you sure you want to logout?</p>
      <img src={goodbye} alt='goodbye wallpaper' className='modal__img' />
      <div className='modal__box'>
        <Button className='button button__normal' onClick={() => logout()}>
          Logout
        </Button>
        <Button className='button button__normal' onClick={() => closeModal()}>
          Close
        </Button>
      </div>
    </section>
  );
};

export default Modal;
