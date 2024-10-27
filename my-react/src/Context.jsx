import { createContext, useReducer } from "react";

const Context = createContext();
export default Context;

function reducer(state, action) {
    switch (action.type) {
        case 'increase':
            return state + 1;
        case 'decrease':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
}

const initialState = 0;

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider };
