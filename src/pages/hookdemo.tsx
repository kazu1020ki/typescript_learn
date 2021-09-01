import Head from 'next/head'
import React, { useReducer } from 'react'

const initialState: number = 0;

type CountAction = {
  type: string;
  payload: number;
}

const reducer = (state: number, action: CountAction) => {
  switch (action.type) {
    case 'count/increment':
      console.log("count/increment")
      return (state + 1 + action.payload);


    case 'count/decrement':
      console.log("count/decrement")

      return (state - 1 + action.payload);
    default:
      return state;

  }
}


export default function Count() {
  const [count, dispatch] = useReducer(
    reducer
    , initialState
  );

  function handleIncrement() {
    dispatch(
      {
        type: 'count/increment',
        payload: 0
      }
    );
  }
  function handleDecrement() {
    dispatch(
      {
        type: 'count/decrement',
        payload: 0
      }
    );
  }



  return (
    <div>
      <head>
        <title>カウンアップ</title>
        <meta name="description" content="カウントアップします" />
      </head>
      <p>Count :{count}</p>
      <button onClick={handleIncrement}> increment </button>
      <button onClick={handleDecrement}> decrement </button>
    </div>

  );
}