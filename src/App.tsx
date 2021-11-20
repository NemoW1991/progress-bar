import React, {useState} from 'react';
import { initialData } from './lib/constants';
import { getData } from './lib/api';
import { DataObj } from './lib/types';
import Main from './view';

export default function App() {

  const [data, setData] = useState<DataObj>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async() => {
    const dataSet = await getData();
    setIsLoading(true);
    setData(dataSet.data);
  }

  React.useEffect(() => {
    fetchData()
  },[]);

  return (
    <div className='app'>
      {isLoading && <Main data = {data} />}
    </div>
  )
}