import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [maxAttempts, setMaxAttempts] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts {attempts}</h3>
            <input
                type="number"
                value={maxAttempts}
                onChange={(event) => {
                    setMaxAttempts(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </button>
            <button
                onClick={() => {
                    const max = parseInt(maxAttempts);
                    !isNaN(max) && setAttempts(attempts + max);
                    !isNaN(max) && setMaxAttempts("");
                }}
            >
                gain
            </button>
        </div>
    );
}
