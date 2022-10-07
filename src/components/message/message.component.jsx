import './message.styles.scss';

const Message = ({ className, firstMessage, secondMessage }) => (
  <div className={className}>
    <h2 className='header h-large'>{firstMessage}</h2>
    <h2 className='header header-large'>{secondMessage}</h2>
  </div>
);

export default Message;
