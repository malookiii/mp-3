
import { styled } from "styled-components";


const StyledHeader = styled.header`
    background-color: rgb(20, 87, 129);
    color: white;
   
    @media screen and (max-width: 1000px){
            text-align: center;
            width: 100%;}
        
    
`;


export default function Header() {
    return (

        <StyledHeader>
            <h1>Abdulmalik Alamoudi</h1>
            <p>Welcome To My Online Resume!</p>
        </StyledHeader>

    );
}

