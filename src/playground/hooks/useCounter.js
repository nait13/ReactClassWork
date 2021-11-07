import {useState} from 'react'

export const useCounter = (initialCounter , step) => {
    const [counter,setCounter] = useState(initialCounter);

    const dec = () => {setCounter((cn)=> cn === 0 ? 0 : cn - step)};
    const inc = () => {setCounter((cn)=>cn + step)};

    return {count:counter , inc , dec}
}