import styled from 'styled-components';
import {SomeButton} from '../SomeButton/SomeButton';

// const isDisabled = ({disabled}) => {disabled ? 'background: gray;' : 'background: orange;' }

export const Components = {
    Wrapper: styled.div`
        width: 80%;
        margin: 30px auto;
        box-shadow: 3px 3px 4px 2px rgba(0,0,0,0.2);
        padding: 20px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `,
    Input: styled.input`
        font-size: 20px;
        padding: 10px;
        margin-right: 10px;
        outline: none;
        ${({value})=> 
            value.length > 5 
            ? 'border: 2px solid red'
            : 'border: 1px solid black'}
    `,
    Button: styled.button`
        transition: all 0.2s ease;
        cursor: pointer;
        padding: 10px;
        background: crimson;
        color: #fff;
        font-size: 20px;
        border-radius: 6px;
        border: none;
        box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.8);      

        &:hover {
            background: firebrick;
        }

        &:active {
            box-shadow: none;
        }

        @media screen and (max-width: 500px) {
            background: green;
        }
    `,
    CustomSomeButton: styled(SomeButton)`
        border: 2px solid red;
        margin: 20px;
    `
};

