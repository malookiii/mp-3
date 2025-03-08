import { styled }  from 'styled-components';

const StyledMain = styled.main`
    width: 70%;
    min-height: 100vh;
    box-sizing: border-box; 
    background-color: lightblue;
    font-size: large;
    color: white;
    padding: 20px;
    @media screen and (max-width: 1000px){
        width: 100%;
        height: auto;
    }
`;

const StyledText = styled.div`
    color: white;
    font-size: 16px;
    padding: 2vh 0;
    margin-left: 20px ;
`;

const StyledText2 = styled.p`
    color: white;
    font-size: 18px;
    padding: 2vh 0;
    margin-left: 20px ;
`

const StyledTitle = styled.h2`
    max-width: 100%;
    text-align: left;
    font-size: 25px;
    margin-left: 20px ;
`;

const StyledH3 = styled.h3`
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 2vh 0;
    text-align: left;
    align-self: flex-start;
`;


export {StyledMain, StyledText, StyledTitle, StyledH3, StyledText2};

