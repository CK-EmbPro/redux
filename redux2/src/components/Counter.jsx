import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter, resetCounter } from '../redux/counter/conterActions'

const Counter = () => {
    const dispatch = useDispatch()
    const globalState = useSelector(state => state.counterReducer.count)
    console.log("global state", globalState)

    const increase = ()=>{
        dispatch(increaseCounter())
    }

    const reset = ()=>{
        dispatch(resetCounter())
    }

    const decrease = ()=>{
        dispatch(decreaseCounter())
    }
  return (
    <div>
        <h2>Counter value is {globalState} </h2>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Counter