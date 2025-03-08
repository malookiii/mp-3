import { styled } from "styled-components";

import { StyledTitle, StyledMain, StyledText2 } from "./Styles.tsx";



const StyledText = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 2vh 0;
    margin-left: 20px ;
`;

const StyledImageDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;

`;

export default function Home() {
    return(
        <StyledMain>
            <StyledTitle>Home</StyledTitle>
            <StyledImageDiv>
                <img id="profile-image" src="/myimage.jpg" alt="Abdulmalik Alamoudi" width="300"/>
            </StyledImageDiv>

            <StyledText>
                <p>
                    Hello Everyone! My name is Abdulmalik Alamoudi, a junior pursuing a degree in Computer Science at Boston University.
                    I am currently wrapping up my Bachelor's degree and am looking forward to apply my learnings into something meaningful that would help
                    benefit multiple lives. I am currently leaning towards a career in entrepreneurship, more specifically a Fintech startup.
                </p>
            </StyledText>
            <StyledText2>
                Welcome to my website, where you will learn a lot about me! You should find my current and past <strong><em><u>Educational</u></em></strong> experiences and <strong><em><u>Extracurriculars</u></em></strong>. Thus, sit back, relax, and enjoy your journey throughout everything I have currently achieved in my life!
            </StyledText2>


        </StyledMain>
    );
    }