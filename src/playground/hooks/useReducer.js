import { useReducer, useState } from "react"

const innitialState = {
        apples:[1,2,3,4,5],
        isSold:false,
        weight: 200,
        name: 'MackBoo'
};

const reducer = (state, action) => {
    console.log("REDUCER WORK",state);
    switch (action.type) {
        case 'ADD_APPLE':
            return {
                apples:[...state.apples,state.apples.length+1],
                isSold:false,
            };

        case 'SELL_APPLE':
            const newApplesArr = state.apples.slice(0,state.apples.length-1);
            return {
                ...state,
                apples: newApplesArr,
                isSold: newApplesArr.length <= 2, 
            };
        default:
            return state;
    }
}


export const Example = () => {
    const [state , dispatch] = useReducer(reducer, innitialState);
    const addApple = () => dispatch({type:"ADD_APPLE"})
    const sellApple = () => dispatch({type:'SELL_APPLE'});

    return (
        <>
         <div>
            Apples count: {state.apples.length}
        </div>
        <div>Are apples sold: {String(state.isSold)}</div>
        <div>
            <button onClick = {addApple}>Add apple</button>
            <button onClick = {sellApple}>Sell apple</button>
        </div>
        </>
    )
}