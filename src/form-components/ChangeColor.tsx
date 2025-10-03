import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
        "white",
    ];
    const [selected_color, setColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        type="radio"
                        key={color}
                        id={`color-${color}`}
                        label={color}
                        name="color"
                        value={color}
                        checked={selected_color === color}
                        onChange={(event) => {
                            setColor(event.target.value);
                        }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selected_color,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {selected_color}
            </div>
        </div>
    );
}
