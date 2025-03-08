import {styled} from "styled-components";

import {StyledMain, StyledTitle, StyledH3, StyledText2} from "./Styles.tsx"

const StyledText = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 2vh 0;
    margin-left: 20px ;
`;

const StyledRelCors = styled.h3`
    margin-left: 20px ;
`

export default function Education() {
    return(
        <StyledMain>
                <StyledTitle>Education</StyledTitle>
            <StyledText>

                <StyledH3>Boston University</StyledH3>
                <p>Bachelor of Arts - BA, Computer Science. Started July 2023, Expected Graduation May 2026 </p>
                <p>Cumulative GPA: 3.7 / 4.0</p>
                <StyledH3>University of California, Davis (transferred)</StyledH3>
                <p>Bachelor of Science - BS, Computer Science. Started September 2022, Transferred July 2023 </p>
            </StyledText>

    <StyledRelCors>Relevant Coursework</StyledRelCors>
    <StyledText2>
        Principles of Microeconomics & Macroeconomics, Probability, Algorithms, Linear Algebra, Calculus,
        Discrete Mathematics, Entrepreneurship, Data Structures, Databases and Data Mining, Computer Systems
    </StyledText2>
        </StyledMain>
    )
}