import './success.message.styles.scss';

const SuccessMessage = () => {
  return (
    <div className='success-message'>
      <h2 className='header header-large color-white'>Login successful</h2>
      <h2 className='header header-large color-white'>
        Welcome to your Xpenses Home app.
      </h2>
    </div>
  );
};

export default SuccessMessage;
