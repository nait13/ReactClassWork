import { useReducer, useState } from "react"
import { act } from "react-dom/test-utils";


const actions = {
    ADD_APPLE : 'ADD_APPLE',
    SELL_APPLE: 'SELL_APPLE',
    CHANGE_AMOUNT:"CHANHE_AMOUNT"
}

const innitialState = {
        apples:[1,2,3,4,5],
        isSold:false,
        inputAmount: 0,
};

const reducer = (state, action) => {
    console.log("REDUCER WORK",state);
    switch (action.type) {

        case actions.ADD_APPLE:
            const biggerAppleArr = [...state.apples];
            for (let  i = 0 ;i<+state.inputAmount;i++) {
                biggerAppleArr.push(biggerAppleArr.length)
            }

            return {
                ...state,
                apples:biggerAppleArr,
                isSold:false,
            };
        case actions.SELL_APPLE:
            const newApplesArr = state.apples.slice(0,state.apples.length - state.inputAmount);
            return {
                ...state,
                apples: newApplesArr,
                isSold: newApplesArr.length <= 2, 
            };
        case actions.CHANGE_AMOUNT:
            return {
                ...state,
                inputAmount:action.payload
            };
        default:
            return state;
    }
}


export const Example = () => {
    const [state , dispatch] = useReducer(reducer, innitialState);
    const addHandler = () => dispatch({type:actions.ADD_APPLE})
    const sellHandler = () => dispatch({type:actions.SELL_APPLE});
    const inputHandler = ({target:{value}}) => dispatch ({type:actions.CHANGE_AMOUNT , payload:value});

    return (
        <>
         <div>
            Apples count: {state.apples.length}
        </div>
        <div>Are apples sold: {String(state.isSold)}</div>
        <div>
            <input value = {state.inputAmount} onChange = {inputHandler}/>
            <button onClick = {addHandler}>Add apple</button>
            <button onClick = {sellHandler}>Sell apple</button>
        </div>
        </>
    )
}