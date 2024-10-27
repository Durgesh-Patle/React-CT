import React, { useReducer } from "react";

const initilizer=0;

function reducer(state,action) {
    // console.log(state,action);

    if(action.type==='increment'){
        return state+1;
    }else if(action.type==='decrement'){
        return state-1;
    }else if(action.type==='reset'){
        return 0;
    }
    else{
        return state;
    }
}

function ReducerHook(){
   const[state,dispatch] =useReducer(reducer,initilizer); 

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>++</button>
            <button onClick={()=>{dispatch({type:'decrement'})}}>--</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    )

}

export default ReducerHook