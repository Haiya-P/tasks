import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={userAnswer}
                onChange={(event) => {
                    setUserAnswer(event.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span style={{ marginLeft: "10px" }}>
                {userAnswer === expectedAnswer ? "✔️" : "❌"}
            </span>
        </div>
    );
}
