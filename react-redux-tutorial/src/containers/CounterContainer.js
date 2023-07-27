import React from 'react'
import Counter from '../components/Counter';
import { increase,decrease } from '../modules/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function CounterContainer({number, increase,decrease}) {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
  );
};



export default connect(
    state => ({
        number:state.counter.number
    }),
    {
        increase,
        decrease
    }
    
        )(CounterContainer)