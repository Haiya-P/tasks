import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ backgroundColor: "red" }}></div>
                This is UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> This is a header</h1>
            <img
                src="/Users/haiyap/Downloads/IMG_2775.jpg"
                alt="My ugly bird :>"
            />
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
