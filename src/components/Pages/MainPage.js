import React,{Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const {Wrapper , CustomLink , UserWrapper, UserInput , UserHeader} = {
    Wrapper:styled.div`
        margin: 100px auto;
        width: 80%;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
        padding: 20px;
        text-align: center;

    `,
    UserWrapper: styled.div`
        border: 1px solid salmon;
        padding: 10px;
        width:90%;
        margin: 20px auto;
    
    `
    ,
    UserInput:styled.input`
        display:block;
        outline:none;
        border: 1px solid salmon;
        font-size:20px;
        margin:10px auto;
    `,
    UserHeader:styled.h2`
        font-size:30px;
        font-weight: bold;
        text-align:center;
    `
    ,
    CustomLink:styled(Link)`
        text-decoration: none;
        font-weight: 400;
        font-size: 22px;
        border: 1px solid salmon;
        padding:10px;
        transition: all 0.3s ease;
        display: block;
        color: salmon;
        width: 220px;
        margin: 20px auto;

        &:hover {
            background:salmon;
            color:#fff;
        }
    `
        
    
}

export class MainPage extends Component {
    state = {
        userId: '',
    }

    changeHandler = ({target:{value}}) => {
        this.setState(()=>({userId:value}))
    }

   render() {
        return (
            <Wrapper>
                <h1>MainPage</h1>
                <CustomLink to = '/search'> Search user </CustomLink>
                <UserWrapper> 
                    <UserHeader>Enter user id</UserHeader>
                    <UserInput 
                        value = {this.state.userId}
                        onChange = {this.changeHandler}/>
                    <CustomLink to = {`/user/${this.state.userId}`}>Go to user</CustomLink>
                </UserWrapper>
            </Wrapper>
        )
    }
}