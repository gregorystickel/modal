import Header from './components/Header'
import './App.css'
import React, { useState } from 'react';
import TestModal from './components/TestModal';
import NonMaterialModal from './components/NonMaterialModal';

function App() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const modalOpenHandler = () => {
    setOpen2(true);
  }

  const modalCloseHandler = () => {
    setOpen2(false);
  }

  return (
    <div className="App">
      <Header open={open} setOpen={setOpen} />
      <TestModal open={open} setOpen={setOpen} />
      <button onClick={modalOpenHandler}>Open Modal 2</button>
      { open2 && <NonMaterialModal open2={open2} setOpen2={setOpen2} modalCloseHandler={modalCloseHandler}/>}
      
    </div>
  );
}

export default App;
