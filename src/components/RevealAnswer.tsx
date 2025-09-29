import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    let [answer, setanswer] = useState<boolean>(false);
    function flipAnswer(): void {
        setanswer(!answer);
    }
    return (
        <div>
            <Button onClick={flipAnswer}>Reveal Answer</Button>
            {answer && <div>42</div>}
        </div>
    );
}
