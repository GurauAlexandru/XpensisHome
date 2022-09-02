import './error.message.styles.scss';

const ErrorMessage = () => (
  <div className='error-message'>
    <h2 className='header header-large color-white'>Something goes wrong</h2>
    <h2 className='header header-large color-white'>
      Check your username and password.
    </h2>
  </div>
);

export default ErrorMessage;
