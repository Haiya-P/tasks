import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={edit}
                onChange={(event) => {
                    setEdit(event.target.checked);
                }}
            />
            {edit ?
                <div>
                    <Form.Group controlId="form">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student"
                        checked={student}
                        onChange={(event) => {
                            setStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {name} {student ? "(Student)" : "(Not a student)"}
                </div>
            }
        </div>
    );
}
