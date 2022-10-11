import './image-profile.styles.scss';

const ImageProfile = ({ user }) => (
  <div className='image-profile'>
    {user.avatar ? (
      <img src={user.avatar} alt='user avatar' className='image-profile__img' />
    ) : (
      <div className='image-profile__no-image'></div>
    )}
  </div>
);

export default ImageProfile;
