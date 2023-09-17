import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreamentAction, increamentAction } from '../redux/actions/counterActions';
import { DECREAMENT, INCREAMENT } from '../redux/actions/types';
import { decreament, increament } from '../redux/counterSlice';

function Counter() {
    const {count} = useSelector(state => state);
    const dispatch = useDispatch();

    const handleIncreament =() =>{
        // increamentAction(dispatch)
        dispatch(increament)
    }

    const handleDecreament =() =>{
        // decreamentAction(dispatch)
        dispatch(decreament())
    }
  return (
    <div>
        <p>{count} </p>
        <button onClick={handleIncreament}>Increment</button>
        <button onClick = {handleDecreament}>Decrement</button>
    </div>
  )
}

export default Counter