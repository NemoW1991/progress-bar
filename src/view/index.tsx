import React, {useEffect, useState} from 'react';
import Progress from '../components/Progress';
import Select from '../components/Select';
import Button from '../components/Button';
import {DataObj} from '../lib/types';
import './index.scss'

const View: React.FC<{
  readonly data: DataObj
}> = ({ data }) => {

  const [bars, setBars] = useState<number[]>([]),
        [activeBar, setActiveBar] = useState(0);
  
  useEffect(() => {
    setBars(data.bars)
  },[data])

  const changeActiveBar = (e:React.SyntheticEvent<HTMLSelectElement>) => {
    setActiveBar(parseInt(e.currentTarget.value));
  }
  
  const changeProgress = (buttonValue: number) => {
    const barsCopy = [...bars];
    const grossValue = barsCopy[activeBar] + buttonValue;
    barsCopy[activeBar] = grossValue >= 0 ? grossValue : 0 ;
    setBars(barsCopy);
  }

  const renderProgresses = () => 
    bars.map((bar,index) => 
      <Progress key={index} bar={bar} limit={data.limit} />
    );

  const renderSelect = () => 
    <Select options={[...Array(bars.length).keys()]} handleChange={changeActiveBar} />
  
  const renderButtons = () =>
    data.buttons.map((buttonValue,index) => 
      <Button key={index} handleClick={() => changeProgress(buttonValue)} buttonText={`${buttonValue}`} />
    );

  return (
    <>
    <div className='view'>
      <h1>Progress Bar Demo</h1>
      <div className='view__shower'>
        { renderProgresses() }
      </div>
      <div className='view__control'>
        { renderSelect()  }
        { renderButtons() }
      </div>
    </div>
    </>
  )
}

export default View;