import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    let [type, settype] = useState<string>("short_answer_question");
    let toggletype = () => {
        settype(
            type === "short_answer_question" ?
                "multiple_cjoice_question"
            :   "short_answer_question",
        );
    };
    return (
        <div>
            <Button onClick={toggletype}> Change Type</Button>
            {type === "short_answer_question" ?
                "Short Answer"
            :   "Multiple Choice"}
        </div>
    );
}
