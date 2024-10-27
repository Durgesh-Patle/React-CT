import React, { useReducer } from 'react'

const ToDoList = () => {
    let data = {
        input: '',
        arrData: []
    }

    function reduser(state, action) {
        if (action.type === 'input') {
            return {
                ...state, input: action.payload
            }
        }
        else if (action.type === 'add') {
            return {
                ...state, arrData: [...state.arrData, action.payload],
                input: ''
            }
        }
        else if (action.type === 'delete') {
            return {
                ...state, arrData: [...state.arrData.filter((a, b) => {
                    return b !== action.payload
                })]
            }
        }

    }
    let [state, dispatch] = useReducer(reduser, data)
    function fun(e) {
        dispatch({
            type: "input",
            payload: e.target.value
        })

    }
    function add() {
        dispatch({
            type: "add",
            payload: state.input
        })

    }

    function delet(ind) {
        dispatch({
            type: "delete",
            payload: ind
        })

    }
    return (
        <div>
            <input value={state.input} type='text' onChange={fun} />
            <button onClick={add}>add</button>
            {
                state.arrData.map((val, ind) => {
                    return (<>
                        <li>  {val}</li>
                        <button onClick={() => { delet(ind) }}>Remove</button>
                    </>)
                })
            }
        </div>

    )
}

export default ToDoList