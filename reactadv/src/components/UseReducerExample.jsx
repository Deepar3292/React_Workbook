import { useReducer } from "react";
import CountReducer from "./CountReducer";

export default function UseReducerExample () {
    let initialState = {count: 0};
    let [state, dispatch] = useReducer(CountReducer, initialState);

    return <div>
        Count {state.count}
        <button onClick={() => dispatch({type: 'INCREMENT', payload: 10})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
    </div>
}