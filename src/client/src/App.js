import React, {useEffect, useState} from 'react';
import {fetchData} from './services/api';

const App= ()=>{
  const [data, setData]= useState(null);

  useEffect(()=>{
    fetchData().then(response => setData(response));
  }, [])

  return(
    <div>
      <h1>CraftNest Marketplace</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default App;