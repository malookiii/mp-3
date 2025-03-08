import {styled} from "styled-components";

import {StyledMain, StyledTitle} from "./Styles.tsx";


const StyledText = styled.p`
    color: white;
    font-size: 16px;
    padding: 2vh 0;
    margin-left: 100px ; 
`;




const StyledH3 = styled.h3`
    color: white;
    font-size: 18px;
    text-align: left;
    align-self: flex-start;
    padding: 20px;
`;


export default function Experiences(){
    return(
        <StyledMain>
            <StyledTitle>Experiences</StyledTitle>

                <StyledH3>Megamind IT Solutions</StyledH3>
                <StyledText>Oracle ERP Software Engineer Intern</StyledText>
                <StyledText>June 2024 - July 2024 | Jeddah, KSA</StyledText>

                <StyledText>Developed and customized Oracle R12 forms and reports to enhance the data retrieval efficiency of employee records.</StyledText>
                <StyledText>Used SQL and PL/SQL to analyze employee datasets to provide HR with insights for optimized workforce management</StyledText>
                <StyledText>Collaborated with the accounting team to organize invoice processing within Oracle R12 to improve financial workflow</StyledText>

                <StyledH3>Middle East Healthcare Company</StyledH3>

                <StyledText>Executive Workshop Director </StyledText>
                    <StyledText>March 2020 - September 2022 | Jeddah, KSA</StyledText>

                <StyledText>Directed workshops for 100+ healthcare executives to drive improvements in service and customer satisfaction</StyledText>
                <StyledText>Researched and curated case studies of successful organizations to demonstrate effective strategies and foster innovation</StyledText>
                <StyledText>Achieved improvements in customer service metrics and strategic outcomes, proven by feedback surveys conducted post-workshop</StyledText>


                <StyledH3>Dancing Leaf Events</StyledH3>
                <StyledText>Project Manager </StyledText>
                    <StyledText>November 2020 - March 2022 | Jeddah, KSA</StyledText>

                <StyledText>Analyzed the needs of a major governmental entertainment arm to successfully implement a $40,000 event</StyledText>
                <StyledText>Managed cross-functional teams to deliver eight themed events, improving team productivity by approximately 30%</StyledText>
                <StyledText>Oversaw logistics and on-site coordination, managing setup and event flow to ensure a seamless experience for event planning</StyledText>

                <StyledH3>Greener</StyledH3>

                <StyledText>Sustainability Analyst Intern </StyledText>
                    <StyledText>May 2021 - June 2021 | Jeddah, KSA</StyledText>
                <StyledText>Analyzed data to help a major government project achieve LEED Platinum certification, supporting Saudi Vision 2030 goals</StyledText>
                <StyledText>Collaborated with national government bodies to enhance green building practices by providing sustainability insights and optimizing metrics
                    with innovative solutions</StyledText>
                <StyledText>Assisted in the planning and installation of seven EV charging stations at a leading automotive maintenance facility</StyledText>

        </StyledMain>
    );
}