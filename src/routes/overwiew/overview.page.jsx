import './overview.styles.scss';

import Bar from '../../components/bar/bar.component';

const Overview = () => {
  return (
    <div className='body-container overview'>
      <Bar header='Overview' />

      <div className='cart'></div>
    </div>
  );
};

export default Overview;
