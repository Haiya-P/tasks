import React from "react";
import "./App.css";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ChangeType } from "./components/ChangeType";
import { Button } from "react-bootstrap";
import IMG_2775 from "./Assets/IMG_2775.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ backgroundColor: "red" }}></div>
                This is UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <h1> This is a header</h1>
            <img src={IMG_2775} alt="My ugly bird :>" />
            <p>Hello World! Haiya Patel</p>
            <ul>
                <li>I like Birds</li>
                <li>I like Gundam</li>
                <li>I hate Coding</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
