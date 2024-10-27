import React, { useContext } from 'react';
import Context from './Context';

const UseReducerHook = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>++</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>--</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
};

export default UseReducerHook;
