import React from 'react';
import './index.scss';
import {getPercentage} from '../../lib/util';

const Progress: React.FC<{
  readonly bar?: number;
  readonly limit?: number;
}> = ({
  bar = 0,
  limit = 100
}) => {
  const progressPercentage = getPercentage(bar, limit);

  return (
    <div className='progress'>
      <progress id="index" value={bar} max={limit} className={progressPercentage>=100 ? 'progress--color-pink': 'progress--color-purple'}>{bar}</progress>
      <span>{progressPercentage}%</span>
    </div>
  )
}

export default Progress;