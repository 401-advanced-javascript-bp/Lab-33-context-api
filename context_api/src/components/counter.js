import React from 'react';
import { CounterContext } from './context/counter-context';

class Counter extends React.Component {
  static contextType = CounterContext;

  render(){
    return (
      <p>This is the counter:{this.context.count}</p>
    )
  }
}

export default Counter;