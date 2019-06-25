import React from 'react';

import './App.css';
import Counter from './components/counter';
import Incrementer from './components/incrementer';
import Decrementer from './components/decrementer';




function App() {
  return (

    <div>
      <Counter/>
      <Incrementer/>
      <Decrementer/>
    </div>
  );
}

export default App;
