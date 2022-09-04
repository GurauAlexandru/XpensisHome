import './overview.styles.scss';

import Bar from '../../components/bar/bar.component';

const Overview = () => {
  return (
    <div className='body-container overview'>
      <Bar header='Overview' />

      <div className='body-box'>
        <div className='cart'>1</div>
        <div className='cart'>2</div>
        <div className='cart'>3</div>
        <div className='cart'>4</div>
      </div>
    </div>
  );
};

export default Overview;
