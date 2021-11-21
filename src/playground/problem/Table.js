import {Row} from './Row'
import { myContext } from '../hooks/useContext'
import { useState } from 'react'


export const Table = () => {
    const [theme, settheme] = useState('dark');

    const themeHandler = () => {
    settheme((prevTheme)=>prevTheme === 'dark' ? 'ligth' : 'dark')}

    return (
        <myContext.Provider value = {{
            info:2 ,
            theme,
        }}>
            <table style = {{border:"1px solid gray"}}>
                <Row/>
            </table>
            <button onClick = {themeHandler}>Toggle theme</button>
        </myContext.Provider>
    )
}