import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    let [attempts, setattempts] = useState<number>(4);
    let [progress, setprogress] = useState<boolean>(false);
    let startquiz = () => {
        setprogress(true);
        setattempts(attempts - 1);
    };
    let stopquiz = () => {
        setprogress(false);
    };
    let mulligan = () => {
        setattempts(attempts + 1);
    };

    return (
        <div>
            <div>Attempts left: {attempts}</div>
            <Button onClick={startquiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopquiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
