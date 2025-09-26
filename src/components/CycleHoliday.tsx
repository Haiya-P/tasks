import React, { useState } from "react";
import { Button } from "react-bootstrap";

const emojis: Record<string, string> = {
    christmas: "🎄",
    diwali: "🪔",
    easter: "🐣",
    halloween: "🎃",
    thanksgiving: "🦃",
};

const nextalphabet: Record<string, string> = {
    christmas: "diwali",
    diwali: "easter",
    easter: "halloween",
    halloween: "thanksgiving",
    thanksgiving: "christmas",
};

const nextinyear: Record<string, string> = {
    diwali: "easter",
    easter: "halloween",
    halloween: "thanksgiving",
    thanksgiving: "christmas",
    christmas: "diwali",
};

export function CycleHoliday(): React.JSX.Element {
    const [currentholiday, setcurrentholiday] = useState("christmas");
    const movealphabetically = (): void => {
        setcurrentholiday(nextinyear[currentholiday]);
    };
    const moveyear = (): void => {
        setcurrentholiday(nextinyear[currentholiday]);
    };

    return (
        <div>
            <h2>Holiday: {emojis[currentholiday]}</h2>
            <Button onClick={movealphabetically} className="me-2">
                Advance by Alphabet
            </Button>
            <Button onClick={moveyear}>Advance by Year</Button>
        </div>
    );
}
