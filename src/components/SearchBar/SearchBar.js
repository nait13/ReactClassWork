import React, {useState} from 'react';
import {Components} from './SearchBar.styled';



export const SearchBar = (props) => {

    const [inputText,setInputText] = useState('');

    const handleChange = ({target: {value}}) => {
        setInputText(() => (value));
        props.whenClick(value);
    }

    return (
        <Components.Wrapper>
            <h1>Search user</h1>
            <Components.Input 
                type='text'
                value={inputText}
                onChange={handleChange}/>
        </Components.Wrapper>
    ); 
    
}

