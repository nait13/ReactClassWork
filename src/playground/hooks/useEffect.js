import {useEffect, useState , useRef } from "react";
import {useCounter} from './useCounter';



export const Test = () => {
        const {count,inc ,dec} = useCounter(0,1);
        const renderRef = useRef(false);

        useEffect(()=>{
            if (!renderRef.current){
                renderRef.current = true;
            }else {
                console.log("Useefect")
            }
        });
    
    console.log('RENDER!');

    return (
        <>
            <div>{count}</div>
            <button onClick = {inc}>+</button>
            <button onClick = {dec}>-</button>
        </>
       
    )
}



export const TestToggler = () => {
   const [shouldShow,setShouldShow] = useState(true);
   
    return (
        <>
            <button onClick = {()=>setShouldShow((prev)=>!prev)}>Toggle</button>
            {
                shouldShow && <Test/>
            }
        </>

    )

}