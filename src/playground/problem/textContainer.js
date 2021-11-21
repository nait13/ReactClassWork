import { useContext } from "react"
import { myContext } from "../hooks/useContext";


export const TextConteiner = () => {
    const {theme} = useContext(myContext);
    

    return <span style = {{background: theme === 'dark' ? 'black' : 'pink'}}>
        {'TEXT'}
    </span>
}