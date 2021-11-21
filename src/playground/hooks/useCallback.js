import { useState , useCallback , memo , useMemo} from 'react';


const Item  = memo(({itemData:{id,name},clickHandler}) => {
    console.log(`${id} item RENDERS!`)
    return <div onClick = {() => clickHandler(id)}>{name}</div>
});



export const  Example = () => {
    const [message , setMessage] = useState('');

    const items = useMemo(()=>{
        return [
            {id:1,name:'First'},
            {id:2,name:'Second'},
            {id:3,name:'Thrid'},
        ]
    },[]);

    const handleClick = useCallback((id) => {
        console.log(`${id} item was clicked`)
    },[])
    // const handleClick = useCallback(()=>{
    //     console.log(`New message income! ${message}`)
    // },[message]);

    const handleMessage = () => {
        setMessage(Math.random());
    }

  
    console.log("RENDER");
    return (
        <>
            <h1>useCallback Example</h1>
            <div>{message}</div>
            {/* <button onClick = {handleClick}>Click</button> */}
            <button onClick = {handleMessage}>New message</button>
            {items.map(
                (item)=>
                    <Item 
                        key = {item.id} 
                        itemData = {item} 
                        clickHandler = {handleClick}/>)
            }
        </>
    )
}