import { useCounter } from "./useCounter"

export const Years = () => {

   const {count , dec , inc} = useCounter(2021 , 1);
    
    return (
        <>
            <h1>Years count</h1>  
            <br/> 
            <button onClick = {dec}>-</button>
            <span>{count}</span>
            <button onClick = {inc}>+</button>
        </>
    )
}