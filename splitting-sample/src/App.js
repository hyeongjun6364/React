import logo from './logo.svg';
import './App.css';
import { useState,Suspense } from 'react';
import React from 'react';
import loadable from '@loadable/component';
const SplitMe = loadable(()=> import('./SplitMe'),{
  fallback:<div>loading...</div>
});

function App() {
  const [visivle, setVisible] = useState(false);
  const onClick = ()=>{
    setVisible(true);
  }
  const onMouseOver = () => {
    SplitMe.preload();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>hello react!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visivle && <SplitMe/>}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
