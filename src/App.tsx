import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled }  from "styled-components";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

import Activities from "./components/Activities.tsx"
import Education from "./components/Education.tsx"
import Experiences from "./components/Experiences.tsx";
import Skills from "./components/Skills.tsx";
import Home from "./components/Home.tsx";
import Projects from "./components/Projects.tsx";


const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    ;
    @media screen and (max-width: 1000px){
        width: 100%;
        flex-direction: column;
    }
`
const StyledPages = styled.div`
    width: 80vw;
    margin: 0 auto;
    
    
`
const PageWrapper = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
    body, h1, p {
        margin: 0;
        padding: 0;
    }

;
`
function Root(){
    return(
        <>

            <PageWrapper>
            <StyledPages>
            <Header />
            <StyledDiv>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/activities"} element={<Activities />} />
                    <Route path={"/education"} element={<Education />} />
                    <Route path={"/experiences"} element={<Experiences />} />
                    <Route path={"/skills"} element={<Skills />} />
                    <Route path={"/projects"} element={<Projects />} />
                </Routes>
            </StyledDiv>
                <Footer />
            </StyledPages>

            </PageWrapper>


        </>
    );
}

const router = createBrowserRouter(
    [
        {path:"*", Component: Root},
    ]
)

export default function App(){

    return <RouterProvider router={router}/>;

}