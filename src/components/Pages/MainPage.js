import { Link } from "react-router-dom";
import styled from "styled-components";



const {Wrapper, CustomLink} = {
    Wrapper:styled.div`
        margin: 100px auto;
        width: 80%;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
        padding: 20px;
        text-align: center;

    `,
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


export const MainPage = () => {
    return (
        <Wrapper>
            <h1>MainPage</h1>
            <CustomLink to = '/search'> Search user </CustomLink>
        </Wrapper>
        
    )
}