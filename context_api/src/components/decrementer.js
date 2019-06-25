import React from 'react';
import {CounterContext} from './context/counter-context';

class Decrementer extends React.Component{
  static contextType = CounterContext;
  render(){
    return(
      <button onClick={this.context.decrement}>
    Number of cookies to steal from Cookie Monster
      </button>
      )
  }
}

export default Decrementer;