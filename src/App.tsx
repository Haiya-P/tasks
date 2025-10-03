import React from "react";
import "./App.css";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ backgroundColor: "red" }}></div>
                This is UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />
            <CheckAnswer expectedAnswer="111"></CheckAnswer>
            <hr />
            <GiveAttempts></GiveAttempts>
            <hr />
            <EditMode></EditMode>
            <hr />
            <MultipleChoiceQuestion
                options={["Dover", "Wilmington", "Newark", "Baltimore"]}
                expectedAnswer="Dover"
            ></MultipleChoiceQuestion>
            <hr />
            <ChangeColor></ChangeColor>
            <hr />
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
