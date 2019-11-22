import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state > 0 ? state - 1 : initialState
    case 'reset':
      return initialState
    default:
      return state;
  }
}

function ReducerCounter() {

  const [count, dispatch] = useReducer(reducer, initialState) 

  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  )
}

export default ReducerCounter