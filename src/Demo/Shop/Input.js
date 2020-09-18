import React from 'react'
import {Form} from "react-bootstrap";

export default function Input(props) {
    return (
        <Form.Group controlId={props.ControlId}>
                      <Form.Label>{props.LabelName}</Form.Label>
                      <Form.Control
                        type={props.Type}
                        placeholder={props.PlaceHolder}
                        required={props.Required}
                      />
                    </Form.Group>
    )
}
