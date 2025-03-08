import { styled } from "styled-components";
import { Link } from "react-router-dom"


const StyledFooter = styled.footer`
    background-color: rgb(20, 87, 129);
    color: white;
    width:100%;
    margin: 0 auto;
    
    
    
    
`;

export default function Footer() {
    return (
        <StyledFooter>
        <p>
            All Rights Reserved by Abdulmalik Alamoudi <Link to="/credits">Credits</Link> &copy;
        </p>
        </StyledFooter>
    );
}