import './summary-box.styles.scss';

const SummaryBox = ({
  source,
  title,
  mainMoney,
  subtitle,
  secondMoney,
  currency,
  color,
  secondColor,
  headerStyle,
}) => (
  <div className='summary--box'>
    <h3 className={`header ${headerStyle} ${secondColor}`}>{source}</h3>
    <h3 className='header h-small '>{title}</h3>
    <h2 className={`header h-normal ${color}`}>
      {mainMoney} {mainMoney ? currency : ''}
    </h2>
    <h3 className='header h-small'>{subtitle}</h3>
    <h2 className='header h-normal'>
      {secondMoney} {secondMoney ? currency : ''}
    </h2>
  </div>
);

export default SummaryBox;
