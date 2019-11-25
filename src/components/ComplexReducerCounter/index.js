import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  stepValue: 1
};
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {...state, firstCounter: Number(state.firstCounter) + Number(state.stepValue)};
    case 'decrement':
      return {...state, firstCounter: state.firstCounter ? Number(state.firstCounter) - Number(state.stepValue) : 0};
    case 'reset':
      return initialState
    case 'step':
      return {...state, stepValue: action.payload}
    default:
      return state;
  }
}

function ComplexReducerCounter() {

  const [count, dispatch] = useReducer(reducer, initialState)
  const { firstCounter, stepValue } = count

  return (
    <div>
      <div>Count - {firstCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: stepValue})}>Increment</button>
      <button onClick={() => dispatch({type:'decrement', value: stepValue})}>Decrement</button>
      <input type='number' value={stepValue} onChange={e => dispatch({ type: 'step', payload: e.target.value })} />
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ComplexReducerCounter
