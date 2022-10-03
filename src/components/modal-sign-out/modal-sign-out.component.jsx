import './modal-sign-out.styles.scss';

const ModalSignOut = ({ name, image, logoutBtn, closeModalBtn }) => {
  return (
    <section className='modal'>
      <h2 className='header h-xLarge'>Hello, {name}</h2>
      <p className='p-total'>Are you sure you want to logout?</p>
      <img src={image} alt='goodbye wallpaper' className='modal__signout-img' />
      <div className='modal__signout-box'>
        {logoutBtn}
        {closeModalBtn}
      </div>
    </section>
  );
};

export default ModalSignOut;
