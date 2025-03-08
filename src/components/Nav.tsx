import { Link } from "react-router-dom";
import { styled } from "styled-components";


const StyledNav = styled.nav`
    width:30%;
    background-color: orange;
    @media screen and (max-width: 1000px){
        width:100%;
        height: revert;
    }
`
const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    padding-left:0;
    list-style: none;
    color: white;
    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: row;
    }
`

const StyledLi = styled.li`
    width: 90%;
    background-color: lightblue;
    padding: 2vh 0;
    margin: 5vh auto;
    font-family:'Times New Roman', Times, serif;
    @media screen and (max-width: 1000px){
        width: 12%;
        background-color: lightblue;
        margin: 1%;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: calc(2px + 1.5vw);
    -webkit-text-fill-color: white;
`
export default function Nav(){

    return(
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/education">Education</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/experiences">Experiences</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/activities">Activities</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/projects">Projects</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/skills">Skills</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>

    );
}