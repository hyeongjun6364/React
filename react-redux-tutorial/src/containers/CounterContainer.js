import React, { useCallback } from 'react'
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector,useDispatch } from 'react-redux';
function CounterContainer() {
  const number = useSelector(state => state.counter.number)
  const dispatch = useDispatch();
  const onIncrease = useCallback(()=> dispatch(increase()),[dispatch])
  const onDecrease = useCallback(()=> dispatch(decrease()),[dispatch])
  return (
    <Counter 
      number={number}
      onIncrease= {onIncrease} 
      onDecrease={(onDecrease)}/>
  );
};



export default CounterContainer