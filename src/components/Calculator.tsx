import { useState} from "react";
import {styled} from "styled-components";


const CalcInput = styled.div`
    display: flex;
    flex-direction: column;
`;
const CalcButtons = styled.div`
    display: flex;
    justify-content: center;

`;

const CalcWrapper = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: grey;
    padding: 10px;
    width:200px;
    height: 200px;
    margin: 20px auto;
    max-width: 90%;
`;

export default function Calculator() {
    const[ first, setFirst] = useState("");
    const[ second, setSecond] = useState("");
    const[output, setOutput] = useState("");


    function addition(){

        const num1 = Number(first);
        const num2 = Number(second);
        const sum = num1 + num2;
        setOutput(String(sum));
    }

    function subtraction(){

        const num1 = Number(first);
        const num2 = Number(second);
        const sum = num1 - num2;
        setOutput(String(sum));
    }

    function multiplication(){
        const num1 = Number(first);
        const num2 = Number(second);
        const sum = num1 * num2;
        setOutput(String(sum));
    }

    function division(){
        const num1 = Number(first);
        const num2 = Number(second);
        const sum = num1 / num2;
        setOutput(String(sum));
    }

    function power(){
        const num1 = Number(first);
        const num2 = Number(second);
        let sum = 1;

        for(let i = 0; i < num2; i++){
            sum = num1 * sum
        }
        setOutput(String(sum));

    }

    function clearnums(){

        setFirst("");
        setSecond("");
        setOutput("");
    }

    let styledOutput = {color: "white"};

    if(Number(output) < 0){
        styledOutput = {color: "red"};
    }

    return (
        <div>
            <CalcWrapper>
            <CalcInput>
                <label>First Number:
                    <input type="text" value={first} onChange={(e) => setFirst(e.target.value)}/>
                </label>
                <label>Second Number:
                    <input type="text" value={second} onChange={(e) => setSecond(e.target.value)}/>
                </label>

            </CalcInput>
            <CalcButtons>
            <button onClick={addition}>+</button>
            <button onClick={subtraction}>-</button>
            <button onClick={multiplication}>X</button>
            <button onClick={division}>/</button>
            <button onClick={power}>POW</button>
            <button onClick={clearnums}>CLEAR</button>
            </CalcButtons>
            <h2 style={styledOutput}>{output}</h2>
            </CalcWrapper>

        </div>
    );
}