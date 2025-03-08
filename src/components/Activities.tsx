import { styled } from "styled-components";

import {StyledMain, StyledTitle} from "./Styles.tsx";


const StyledText = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-left: 20px ;
`;


const StyledH3 = styled.h3`
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-align: left;
    align-self: flex-start;
`;

export default function Activities() {
    return(
        <StyledMain>
            <StyledTitle>Activities</StyledTitle>
    <StyledText>
        <StyledH3>Boston University Saudi Cultural Club </StyledH3>
        <p>Logistics Chair</p>
        <p>June 2024 - Present | Boston, MA</p>
        <p>Managed logistics for club events, coordinating venues, transportation, and vendor communications </p>
        <p>Analyzed event data to improve planning and resource allocation</p>
        <StyledH3>Google Developers Student Club at UC Davis</StyledH3>
        <p>Tech Lead</p>
        <p>November 2022 - June 2023 | Davis, CA</p>

        <p>Led the Development of an AI-powered mental health chatbot for UC Davis students, offering confidential student support
            Designed personalized, AI-driven responses, leveraging data analysis to address student needs effectively
            Managed a team to successfully design and implement the chatbot
        </p>

        <StyledH3>Fazaa</StyledH3>
        <p>Founder</p>
        <p>May 2019 - July 2022 | Jeddah, KSA</p>

        <p>Launched Fazaa, a free tech support service empowering the elderly to navigate modern technologies and enhance their digital independence

        </p>

    </StyledText>
        </StyledMain>
    )
}