import React, { useReducer } from "react";

const Counter=()=>{
   let[state,dispatch]=useReducer(reducer,0)

   function reducer(state,action) {
    if(action.type==='add'){
        return state+1;
    }else if(action.type==='sub'){
        return state-1;
    }else if(action.type==='reset'){
        return 0;
    }
    else{
        return state;
    }
   }

    return(
        <div>
            <h1>Counter: {state}</h1>
            <button onClick={()=>{dispatch({type:'add'})}}>++</button>
            <button onClick={()=>{dispatch({type:'sub'})}}>--</button>
            <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
        </div>
    )
}

export default Counter