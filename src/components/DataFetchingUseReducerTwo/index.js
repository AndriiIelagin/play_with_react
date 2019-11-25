import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

function DataFetchingUseReducerTwo() {
  const initialState = {
    loading: true,
    post: {},
    error: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          ...state,
          loading: false,
          post: action.payload,
          error: ''
        };
      case 'FETCH_FAILED':
        return {
          ...state,
          loading: false,
          post: {},
          error: 'Something went wrong'
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_FAILED' });
      });
  }, []);

  return (
    <div>
      {state.loading ? 'Loading...' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingUseReducerTwo;
