import React from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import Option from './components/Option';

function App(){
  return(
    <div style = {{textAlign : "center"}}>
      <Counter />
      <Button />
      <Option />
    </div>
  );
}

export default App;
